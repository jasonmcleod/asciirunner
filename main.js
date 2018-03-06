var map = [
    [1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,1,0,1,0,1,1],
    [1,0,0,0,1,0,1,0,1,1],
    [1,0,0,0,1,0,1,0,1,1],
    [1,1,1,1,1,1,1,1,1,1]
];

var structures = [
    [
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0]
    ],
    [
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,1,0,0],
        [0,0,1,0,0]
    ],
    [
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,1,1,1,0],
        [0,0,1,0,0],
        [0,0,1,0,0]
    ],
    [
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,1,1,1,0],
        [0,1,1,1,0],
        [0,1,1,1,0]
    ],
    [
        [0,0,0,0,0],
        [1,1,1,1,1],
        [0,1,1,1,0],
        [0,1,1,1,0],
        [0,1,1,1,0]
    ]
];

var tiles = [
    " ",
    "█"
];

var totalStructures = 10;
function getTile(index) {
    return tiles[index];
}
function generateMap() {
    map.length = 0;
    
    for(var y = 0; y<structures[0].length;y++) {   
        map[y] = [];
        for(var z = 0; z < totalStructures; z++) {
            var s = ~~(Math.random()*structures.length);
            for(var x = 0; x<structures[s].length;x++) {
                map[y].push(structures[s][y][x])
            }        
        }
    }
}
generateMap();
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
    render();
};