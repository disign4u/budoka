
import {Suspense, useRef, useState} from "react";
import {Canvas } from "@react-three/fiber";
import {OrbitControls, Text, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three';
import {gsap} from "gsap";
import {hitMeshPoints,timePoints} from "../constants/index.js";
import Loading from "../component/Loader.jsx";
import BudokaAvatar from "./BudokaAvatar.jsx";
import TargetCamera from "./TargetCamera.jsx";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoMdCheckboxOutline } from "react-icons/io";
import { FaPlay, FaStop, FaPause } from "react-icons/fa";
import './target.css'

export const Target = () => {
    const refCanvas = useRef(); // Referenz auf das Canvas-Element
    const refGroup = useRef(); // Referenz auf das Group-Element enthölte alle Meshes
    const [showText, setShowText] = useState(false); //Textansicht ein-/ausschalten
    const [isRotating, setIsRotating] = useState(false); //Rotation ein-/ausschalten
    const [isNormal, setIsNormal] = useState(false); //Geschwindigkeit verlangsamen
    let playPoints = timePoints.slice(); // Enthält die Zeitpunkte, an denen die Kugeln erscheinen sollen
    /**
     * Funktion zum Erstellen einer Kugel
     * @description
     * Diese Funktion erstellt eine Kugel mit der angegebenen Position und Farbe und animiert sie.
     * Nach der Animation wird die Kugel entfernt.
     */
    const addSphere = (point) => {
        const radius = .8;
        const widthSegements = 32;
        const heightSegments = 16;
        const colorSphere = new THREE.Color( point.color);
        const geometry = new THREE.SphereGeometry(radius, widthSegements, heightSegments);
        const material = new THREE.MeshBasicMaterial({ color: colorSphere });
        const sphere = new THREE.Mesh(geometry, material);

        // Setze Position
        sphere.position.x = point.position[0];
        sphere.position.y = point.position[1];
        sphere.position.z = point.position[2];

        refGroup.current.add(sphere);
        gsap.to(sphere.scale, {
            x: .15,
            y: .15,
            z: .15,
            duration: 0.1, // Anpassbar an die Schwierigkeit
            repeat: 8,
            yoyo: true,
            delay: 0,
            onComplete: () => {
                sphere.scale.set(0, 0, 0);
                refGroup.current.remove(sphere);
            }
        });
    }

    /**
     * AudioPlayer-Komponente
     * @description
     * Diese Komponente spielt ein Audio-Element ab und ermöglicht die Steuerung
     * des Play/Pause-Status und des Timers.
     */

   const AudioPlayer= ()=> {
        /**
         * Zustand für die Play/Pause-Status
         * @type {boolean}
         */
        const [isPlaying, setIsPlaying] = useState(false);
        const audioRef = useRef(null);


        /* Automatisches Abspielen beim Laden (optional zum testen)
        useEffect(() => {
            if (audioRef.current) {
                setIsPlaying(true)
                audioRef.current.play();
            }
        }, []);*/

        /**
         * Funktion zum Umschalten zwischen Play- und Pause-Status des Audios.
         *
         * @function handlePlayPause
         * @description Überprüft den aktuellen Status des Audios und schaltet zwischen Play und Pause um.
         */
        const handlePlayPause = () => {
            if (audioRef.current.paused) {
                audioRef.current.play();
                setIsPlaying(true);
            } else {
                audioRef.current.pause();
                setIsPlaying(false);
            }
        };
        /**
         * Stoppt das Audio und setzt den Zeitpunkt auf 0.
         *
         * @function handleStop
         * @description Stoppt das Audio und setzt den Zeitpunkt auf 0.
         * Die Zeitpunkte, an denen die Kugeln erscheinen sollen wird wiederhergestellt.
         */
        const handleStop = () => {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            setIsPlaying(false);
            playPoints = timePoints.slice();
        };

        /**
         * Aktualisiert die Wiedergabegeschwindigkeit und überprüft die Zeitpunkte für das Hinzufügen von Kugeln.
         *
         * @function handleTimeUpdate
         * @description Passt die Wiedergabegeschwindigkeit basierend auf dem isNormal-Status an und überprüft
         * die aktuellen Zeitpunkte, um Kugeln hinzuzufügen, wenn die Bedingungen erfüllt sind.
         */
        const handleTimeUpdate = () => {
            audioRef.current.playbackRate = isNormal ? 0.5 : 1;

            playPoints.forEach((point, index) => {
                timerHTML.innerHTML = Math.round(audioRef.current.currentTime); // einfache Zeitanzeige
                if (audioRef.current.currentTime > point.time) {
                    // entfernt die aktuelle Zeit aus der Liste
                    playPoints.splice(index, 1);
                    // hinzufügen der Kugel in den Canvas
                    addSphere(hitMeshPoints[point.point]);
                }
            });
        };

        return (
            <div className="audio-player">
                <audio id="player" controls={false} ref={audioRef} onTimeUpdate={handleTimeUpdate} src="/budoka/sound/workout_short.mp3"/>
                <button onClick={handlePlayPause}>
                    {isPlaying ? <FaPause color="#fff" size="10"/> : <FaPlay color="#fff" size="10"/>}
                </button>
                <button onClick={handleStop}><FaStop color="#fff" size="10"/></button>
            </div>
        );
   }

    return (
        <section className="target" id="home">
            <div className="target__container">
                <Canvas className="target__canvas" ref={refCanvas}>
                    <Suspense fallback={<Loading/>}>
                        <PerspectiveCamera makeDefault position={[0, 0, 30]}/>
                        <TargetCamera isRotating={isRotating}>
                            <group position={[-1, 0, 0]} scale={1} ref={refGroup}>
                                <BudokaAvatar scale={8}
                                              position={[1, -6, 0]}
                                              rotation={[0, 0, 0]}/>

                                {hitMeshPoints.map((hitMeshPoint, index) => (
                                    <mesh
                                        key={index}
                                        position={hitMeshPoint.position}
                                        scale={.125}
                                        name={`hit_${index}`}>
                                        <sphereGeometry args={[2, 12, 12]}/>
                                        <meshLambertMaterial color={hitMeshPoint.color}/>
                                        <Text
                                            scale={hitMeshPoint.text.scale}
                                            position={hitMeshPoint.text.position}
                                            anchorX={hitMeshPoint.text.anchorX}
                                            anchorY={hitMeshPoint.text.anchorY}
                                            color={hitMeshPoint.color}>
                                            {showText ? hitMeshPoint.text.label : ""}
                                        </Text>
                                    </mesh>
                                ))}

                            </group>
                        </TargetCamera>
                        <ambientLight intensity={1}/>
                        <directionalLight position={[10, 10, 10]} intensity={3}/>
                    </Suspense>
                    <OrbitControls/>
                </Canvas>
            </div>
            <div className="timer" id="timerHTML">0</div>
            <ul className="navbar">
                <li><AudioPlayer/></li>
                <li>
                    <button id="hit_4" onClick={() => setIsNormal(!isNormal)}>
                        {isNormal
                            ? <IoMdCheckboxOutline color="#fff" size="20" onClick={() => setIsNormal(!isRotating)}/>
                            :
                            <MdCheckBoxOutlineBlank color="#fff" size="20" onClick={() => setIsNormal(!isRotating)}/>
                        }
                        Langsam
                    </button>
                </li>
                <li>
                    <button id="hit_2" onClick={() => setShowText(!showText)}>
                        {showText
                            ? <IoMdCheckboxOutline color="#fff" size="20" onClick={() => setShowText(!showText)}/>
                            :
                            <MdCheckBoxOutlineBlank color="#fff" size="20" onClick={() => setShowText(!showText)}/>
                        } Text
                    </button>
                </li>
                <li>
                    <button id="hit_3" onClick={() => setIsRotating(!isRotating)}>
                        {isRotating
                            ? <IoMdCheckboxOutline color="#fff" size="20" onClick={() => setIsRotating(!isRotating)}/>
                            :
                            <MdCheckBoxOutlineBlank color="#fff" size="20" onClick={() => setIsRotating(!isRotating)}/>
                        }
                        Drehen
                    </button>
                </li>

            </ul>

        </section>
    )

}