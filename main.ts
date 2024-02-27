function settile () {
    if (ntile == 0) {
        tiles.setTileAt(tiles.getTileLocation(current_tile.column, current_tile.row), assets.tile`myTile0`)
    }
    if (ntile == 1) {
        tiles.setTileAt(tiles.getTileLocation(current_tile.column, current_tile.row), assets.tile`myTile1`)
    }
    if (ntile == 2) {
        tiles.setTileAt(tiles.getTileLocation(current_tile.column, current_tile.row), assets.tile`myTile2`)
    }
    if (ntile == 3) {
        tiles.setTileAt(tiles.getTileLocation(current_tile.column, current_tile.row), assets.tile`myTile3`)
    }
    if (ntile == 4) {
        tiles.setTileAt(tiles.getTileLocation(current_tile.column, current_tile.row), assets.tile`myTile4`)
    }
    if (ntile == 5) {
        tiles.setTileAt(tiles.getTileLocation(current_tile.column, current_tile.row), assets.tile`myTile5`)
    }
}
function join (color: number) {
	
}
let ntile = 0
let current_tile: tiles.Location = null
tiles.setCurrentTilemap(tilemap`level3`)
let lastrow = 6
let lastcolumn = 7
let cursor = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 1 1 1 1 . . . . . 
    . . . . . 1 1 1 1 1 1 1 . . . . 
    . . . . . 1 1 1 1 1 1 1 . . . . 
    . . . . . 1 1 1 1 1 1 1 . . . . 
    . . . . . 1 1 1 1 1 1 1 . . . . 
    . . . . . 1 1 1 1 1 1 1 . . . . 
    . . . . . . 1 1 1 1 1 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(cursor, tiles.getTileLocation(0, 0))
current_tile = cursor.tilemapLocation()
let nlist = [
0,
1,
2,
3,
4,
5
]
tiles.placeOnTile(cursor, current_tile)
for (let index = 0; index < 7; index++) {
    for (let index = 0; index < 8; index++) {
        ntile = nlist._pickRandom()
        settile()
        while (tiles.tileImageAtLocation(tiles.getTileLocation(current_tile.column - 1, current_tile.row)) == tiles.tileImageAtLocation(tiles.getTileLocation(current_tile.column, current_tile.row))) {
            ntile = nlist._pickRandom()
            settile()
        }
        while (tiles.tileImageAtLocation(tiles.getTileLocation(current_tile.column, current_tile.row - 1)) == tiles.tileImageAtLocation(tiles.getTileLocation(current_tile.column, current_tile.row))) {
            ntile = nlist._pickRandom()
            settile()
        }
        tiles.placeOnTile(cursor, tiles.getTileLocation(current_tile.column + 1, current_tile.row))
        current_tile = cursor.tilemapLocation()
    }
    tiles.placeOnTile(cursor, tiles.getTileLocation(0, current_tile.row + 1))
    current_tile = cursor.tilemapLocation()
}
tiles.setTileAt(tiles.getTileLocation(9, 0), assets.tile`myTile6`)
tiles.setTileAt(tiles.getTileLocation(9, 1), assets.tile`myTile7`)
tiles.setTileAt(tiles.getTileLocation(9, 2), assets.tile`myTile`)
tiles.setTileAt(tiles.getTileLocation(9, 3), assets.tile`myTile8`)
tiles.setTileAt(tiles.getTileLocation(9, 4), assets.tile`myTile9`)
tiles.setTileAt(tiles.getTileLocation(9, 5), assets.tile`myTile10`)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), cursor)
let cursor2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), cursor2)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
tiles.placeOnTile(cursor, tiles.getTileLocation(0, 6))
tiles.placeOnTile(cursor2, tiles.getTileLocation(7, 0))
cursor.setStayInScreen(true)
cursor2.setStayInScreen(true)
let player1_locations = [cursor.tilemapLocation()]
let player2_locations = [cursor2.tilemapLocation()]
