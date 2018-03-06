var map = [
    [1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,1,0,1,0,1,1],
    [1,0,0,0,1,0,1,0,1,1],
    [1,0,0,0,1,0,1,0,1,1],
    [1,1,1,1,1,1,1,1,1,1]
];

var structures = [
    [
        '00000',
        '00000',
        '00000',
        '00000',
        '00000'
    ],
    [
        '00100',
        '00000',
        '00000',
        '00100',
        '00100'
    ],
    [
        '00000',
        '00000',
        '01110',
        '00100',
        '00100'
    ],
    [
        '00000',
        '00000',
        '01110',
        '01110',
        '01110'
    ],
    [
        '00100',
        '11111',
        '01110',
        '01110',
        '01110'
    ],
    [
        '00100',
        '11111',
        '11111',
        '11111',
        '11111'
    ]
];

var tiles = [
    "☺",
    "█"
];

var totalStructures = 15;
function getTile(index) {
    return tiles[index];
}
function generateMap() {
    map.length = 0;
    for(var z = 0; z < totalStructures; z++) {
        var s = ~~(Math.random()*structures.length);
        for(var y = 0; y<structures[0].length;y++) {   
            map[y] = map[y] || '';
            for(var x = 0; x<structures[s].length;x++) {
                map[y]+=structures[s][y][x];
            }        
        }
    }
}
function render() {
    var text = '';
    for(var y = 0; y<map.length; y++) {
        for(var x = 0; x < map[0].length; x++) {
            text+=getTile(map[y][x]);
        }
        text+='\n';
    } 
    document.getElementById('game').value = text;
}
window.onload = function() {
    generateMap();
    setInterval(render, 50);
};