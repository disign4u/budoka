/** @type {HTMLCanvasElement} */
export const hitMeshPoints = [
    {
        id: 1,
        color: 'red',
        position: [2, 7, 0],
        text: {
            scale:[5, 5, .5],
            position:[5,1,1],
            anchorX:"left",
            anchorY:"middle",
            label: "1. diagonal zum Hals",
        }
    }, {
        id: 2,
        color: 'yellow',
        position: [0, 7, 0],
        text: {
            scale:[5, 5, .5],
            position:[-5,1,1],
            anchorX:"right",
            anchorY:"middle",
            label: "diagonal zum Hals 2.",
        }
    }, {
        id: 3,
        color: 'red',
        position: [4, 4.5, -0.5],
        text: {
            scale:[5, 5, .5],
            position:[5,1,1],
            anchorX:"left",
            anchorY:"middle",
            label: "3. waagrecht zum Ellenbogen",
        }
    }, {
        id: 4,
        color: 'yellow',
        position: [-2, 4.5, -0.5],
        text: {
            scale:[5, 5, .5],
            position:[-5,1,1],
            anchorX:"right",
            anchorY:"middle",
            label: "waagrecht zum Ellenbogen 4.",
        }
    }, {
        id: 5,
        color: 'red',
        position: [3, -1.5, 0],
        text: {
            scale:[5, 5, .5],
            position:[5,1,1],
            anchorX:"left",
            anchorY:"middle",
            label: "5. Schlag zum Knie",
        }
    },{
        id: 6,
        color: 'yellow',
        position: [-1, -1.5, 0],
        text: {
            scale:[5, 5, .5],
            position:[-5,1,1],
            anchorX:"right",
            anchorY:"middle",
            label: "Schlag zum Knie 6.",
        }
    },  {
        id: 7,
        color: 'red',
        position: [1.7, 5.5, 1],
        text: {
            scale:[5, 5, .5],
            position:[5,1,1],
            anchorX:"left",
            anchorY:"middle",
            label: "7. Stich zur Brust",
        }
    }, {
        id: 8,
        color: 'yellow',
        position: [0.3, 5.5, 1],
        text: {
            scale:[5, 5, .5],
            position:[-5,1,1],
            anchorX:"right",
            anchorY:"middle",
            label: "Stich zur Brust 8.",
        }
    }, {
        id: 9,
        color: 'red',
        position: [1, 8.5, 1],
        text: {
            scale:[5, 5, .5],
            position:[5,1,1],
            anchorX:"left",
            anchorY:"middle",
            label: "9. Schlag auf den Kopf",
        }
    }, {
        id: 10,
        color: 'yellow',
        position: [1, 8.5, 1],
        text: {
            scale:[5, 5, .5],
            position:[-5,1,1],
            anchorX:"right",
            anchorY:"middle",
            label: "Schlag auf den Kopf 10.",
        }
    }, {
        id:11,
        color: 'red',
        position: [1, 3, 1.5],
        text: {
            scale:[5, 5, .5],
            position:[5,1,1],
            anchorX:"left",
            anchorY:"middle",
            label: "11.Gerader Stich zum Bauch",
        }
    }, {
        id: 12,
        color: 'yellow',
        position: [1, 3, 1.5],
        text: {
            scale:[5, 5, .5],
            position:[-5,1,1],
            anchorX:"right",
            anchorY:"middle",
            label: "Gerader Stich zum Bauch 12.",
        }
    },
]

export const timePoints = [{
    time: 1.7,
    point: 0
}, {
    time: 3.5,
    point: 4
}, {
    time: 5.7,
    point: 6
}, {
    time: 6.7,
    point: 9
}, {
    time: 9,
    point: 3
}, {
    time: 10.5,
    point: 9
}, {
    time: 13,
    point: 10
}, {
    time: 14,
    point: 1
}, {
    time: 16.5,
    point: 6
}, {
    time: 18,
    point: 2
}, {
    time: 20,
    point: 5
}, {
    time: 21,
    point: 3
}, {
    time: 23.5,
    point: 2
}, {
    time: 25,
    point: 2
}, {
    time:27,
    point: 9
}, {
    time:28.5,
    point:4
}, {
    time: 31,
    point:6
}, {
    time: 32.5,
    point:6
}, {
    time: 34,
    point:11
}, {
    time: 36,
    point:5
}, {
    time:38 ,
    point:8
}, {
    time: 40,
    point:0
}, {
    time: 42,
    point:2
} ,{
    time: 43.5,
    point:6
},{
    time:45 ,
    point:4
},{
    time:46.5 ,
    point:2
},{
    time:48 ,
    point:1
},{
    time: 50,
    point:3
},{
    time: 52,
    point:5
},{
    time:53.5 ,
    point:8
},{
    time: 55,
    point:7
},{
    time: 56.5,
    point:4
},{
    time:59 ,
    point:8
},{
    time: 60.5,
    point:8
},{
    time: 62,
    point:11
},{
    time: 63.5,
    point: 0
},{
    time: 65 ,
    point:5
},{
    time: 66.5,
    point:5
},{
    time: 69,
    point:2
},{
    time: 70.5,
    point:4
},{
    time: 72,
    point:0
},{
    time: 73.5,
    point:8
},{
    time: 75,
    point:4
},{
    time: 77,
    point:0
},{
    time:79 ,
    point:8
},{
    time: 80.5 ,
    point:4
},{
    time: 82,
    point:10
},{
    time: 83.5 ,
    point: 5
},{
    time: 85,
    point:9
},{
    time: 86.5,
    point: 10
},{
    time: 88,
    point:6
},{
    time: 89.5,
    point:9
},{
    time: 91.5,
    point:3
},{
    time: 93,
    point: 2
},{
    time: 95,
    point:1
},{
    time: 96.5,
    point:6
},{
    time:98 ,
    point:5
},{
    time:100 ,
    point:11
},{
    time:102,
    point:0
},{
    time: 104,
    point: 7
},{
    time: 106,
    point:4
},{
    time: 107.5,
    point:5
},{
    time: 109,
    point:9
},{
    time:110.5,
    point:1
},{
    time: 113,
    point:6
},{
    time: 114.5,
    point:4
},{
    time: 116,
    point:11
},{
    time:118,
    point:9
},{
    time: 120,
    point:8
},{
    time: 122,
    point:2
},{
    time: 123.5,
    point:2
},{
    time: 125,
    point:10
},{
    time: 128,
    point: 4
},{
    time: 129.5,
    point: 8
},{
    time: 131,
    point:10
}
,{
    time: 132.5,
    point:3
},{
    time:135 ,
    point:6
},{
    time: 137,
    point:5
},{
    time: 139,
    point:3
},{
    time: 141,
    point:0
},{
    time: 143,
    point:5
},{
    time: 144.5,
    point:7
}
]