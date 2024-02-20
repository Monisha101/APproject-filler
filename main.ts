let ntile = 0
tiles.setCurrentTilemap(tilemap`level3`)
let lastrow = 6
let lastcolumn = 7
let cursor = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 1 1 1 1 . . . . . 
    . . . . . 1 . . . . . 1 . . . . 
    . . . . . 1 . . . . . 1 . . . . 
    . . . . . 1 . . . . . 1 . . . . 
    . . . . . 1 . . . . . 1 . . . . 
    . . . . . 1 . . . . . 1 . . . . 
    . . . . . . 1 1 1 1 1 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(cursor, tiles.getTileLocation(0, 0))
let current_tile = cursor.tilemapLocation()
let nlist = [
1,
2,
3,
4,
5,
6
]
tiles.placeOnTile(cursor, current_tile)
for (let index = 0; index < 7; index++) {
    for (let index = 0; index < 8; index++) {
        ntile = nlist._pickRandom()
        if (ntile == 1) {
            tiles.setTileAt(tiles.getTileLocation(current_tile.column, current_tile.row), assets.tile`myTile0`)
        }
        if (ntile == 2) {
            tiles.setTileAt(tiles.getTileLocation(current_tile.column, current_tile.row), assets.tile`myTile1`)
        }
        if (ntile == 3) {
            tiles.setTileAt(tiles.getTileLocation(current_tile.column, current_tile.row), assets.tile`myTile2`)
        }
        if (ntile == 4) {
            tiles.setTileAt(tiles.getTileLocation(current_tile.column, current_tile.row), assets.tile`myTile4`)
        }
        if (ntile == 5) {
            tiles.setTileAt(tiles.getTileLocation(current_tile.column, current_tile.row), assets.tile`myTile5`)
        }
        if (ntile == 6) {
            tiles.setTileAt(tiles.getTileLocation(current_tile.column, current_tile.row), assets.tile`myTile6`)
        }
        tiles.placeOnTile(cursor, tiles.getTileLocation(current_tile.column + 1, current_tile.row))
        current_tile = cursor.tilemapLocation()
    }
    tiles.placeOnTile(cursor, tiles.getTileLocation(0, current_tile.row + 1))
    current_tile = cursor.tilemapLocation()
}
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), cursor)
let cursor2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f . . . . . f . . . . 
    . . . . . f . . . . . f . . . . 
    . . . . . f . . . . . f . . . . 
    . . . . . f . . . . . f . . . . 
    . . . . . f . . . . . f . . . . 
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
