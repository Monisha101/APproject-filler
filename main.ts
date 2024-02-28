controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    color = ColorAtLocation(7, 0)
    while (color == ColorAtLocation(7, 0) || color == ColorAtLocation(0, 6) || color > 5) {
        color = game.askForNumber("Pick a color", 1)
    }
    JoinTile(2, color)
    CheckForWin()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    color = ColorAtLocation(7, 0)
    while (color == ColorAtLocation(7, 0) || color == ColorAtLocation(0, 6) || color > 5) {
        color = game.askForNumber("Pick a color", 1)
    }
    JoinTile(1, color)
    CheckForWin()
})
function SetTileColor (color3: number) {
    if (color3 == 0) {
        tilecolor = assets.tile`myTile0`
    }
    if (color3 == 1) {
        tilecolor = assets.tile`myTile1`
    }
    if (color3 == 2) {
        tilecolor = assets.tile`myTile2`
    }
    if (color3 == 3) {
        tilecolor = assets.tile`myTile3`
    }
    if (color3 == 4) {
        tilecolor = assets.tile`myTile4`
    }
    if (color3 == 5) {
        tilecolor = assets.tile`myTile5`
    }
    return tilecolor
}
function ColorAtLocation (col: number, row: number) {
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(col, row), assets.tile`myTile0`)) {
        start_tile = 0
    }
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(col, row), assets.tile`myTile1`)) {
        start_tile = 1
    }
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(col, row), assets.tile`myTile2`)) {
        start_tile = 2
    }
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(col, row), assets.tile`myTile3`)) {
        start_tile = 3
    }
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(col, row), assets.tile`myTile4`)) {
        start_tile = 4
    }
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(col, row), assets.tile`myTile5`)) {
        start_tile = 5
    }
    return start_tile
}
function CheckForWin () {
    column = 0
    row = 0
    unusedtile = 0
    for (let index = 0; index < 7; index++) {
        for (let index = 0; index < 8; index++) {
            ColorAtLocation(0, 6)
            Rcolor = SetTileColor(start_tile)
            ColorAtLocation(7, 0)
            Bcolor = SetTileColor(start_tile)
            if (tiles.tileAtLocationEquals(tiles.getTileLocation(column, row), Bcolor) || tiles.tileAtLocationEquals(tiles.getTileLocation(column, row), Rcolor)) {
                column += 1
            } else {
                unusedtile += 1
            }
        }
        column = 0
        row += 1
    }
    if (unusedtile == 0) {
        if (player1_locations.length > player2_locations.length) {
            game.setGameOverMessage(true, "Red wins!")
            game.gameOver(true)
        }
        if (player1_locations.length < player2_locations.length) {
            game.setGameOverMessage(true, "Black wins!")
            game.gameOver(true)
        }
        game.setGameOverMessage(true, "Tie!")
    }
}
function CheckDuplicate (col: number, row: number) {
    check = true
    for (let value2 of player_x_list) {
        if (value2.column == col && value2.row == row) {
            check = false
        }
    }
    return check
}
function JoinTile (player2: number, color2: number) {
    if (player2 == 1) {
        player_x_list = player1_locations
    } else {
        player_x_list = player2_locations
    }
    SetTileColor(color2)
    for (let value of player_x_list) {
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(value.column - 1, value.row), tilecolor) && CheckDuplicate(value.column - 1, value.row)) {
            player_x_list.push(tiles.getTileLocation(value.column - 1, value.row))
        }
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(value.column + 1, value.row), tilecolor) && CheckDuplicate(value.column + 1, value.row)) {
            player_x_list.push(tiles.getTileLocation(value.column + 1, value.row))
        }
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(value.column, value.row + 1), tilecolor) && CheckDuplicate(value.column, value.row + 1)) {
            player_x_list.push(tiles.getTileLocation(value.column, value.row + 1))
        }
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(value.column, value.row - 1), tilecolor) && CheckDuplicate(value.column, value.row - 1)) {
            player_x_list.push(tiles.getTileLocation(value.column, value.row - 1))
        }
    }
    if (player2 == 1) {
        for (let value3 of player1_locations) {
            tiles.setTileAt(value3, tilecolor)
        }
    } else {
        for (let value4 of player2_locations) {
            tiles.setTileAt(value4, tilecolor)
        }
    }
}
let player_x_list: tiles.Location[] = []
let check = false
let Bcolor: Image = null
let Rcolor: Image = null
let unusedtile = 0
let row = 0
let column = 0
let start_tile = 0
let player2_locations: tiles.Location[] = []
let player1_locations: tiles.Location[] = []
let tilecolor: Image = null
let color = 0
game.splash("Filler!")
game.showLongText("Change the color of your tiles and dominate the board.", DialogLayout.Top)
game.showLongText("Press A button if Player Red and B if Player Black", DialogLayout.Bottom)
tiles.setCurrentTilemap(tilemap`level3`)
let lastrow = 6
let lastcolumn = 7
let cursor = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . 2 2 . . . . . . . . . . . . . 
    . 2 2 . . . . . . . . . . . . . 
    . 2 2 . . . . . . . . . . . . . 
    . 2 2 . . . . . . . . . . . . . 
    . 2 2 . . . . . . . . . . . . . 
    . 2 2 . . . . . . . . . . . . . 
    . 2 2 2 2 2 2 2 2 . . . . . . . 
    . 2 2 2 2 2 2 2 2 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(cursor, tiles.getTileLocation(0, 0))
let current_tile = cursor.tilemapLocation()
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
        color = nlist._pickRandom()
        SetTileColor(color)
        tiles.setTileAt(tiles.getTileLocation(current_tile.column, current_tile.row), tilecolor)
        while (tiles.tileImageAtLocation(tiles.getTileLocation(current_tile.column - 1, current_tile.row)) == tiles.tileImageAtLocation(tiles.getTileLocation(current_tile.column, current_tile.row)) || tiles.tileImageAtLocation(tiles.getTileLocation(current_tile.column, current_tile.row - 1)) == tiles.tileImageAtLocation(tiles.getTileLocation(current_tile.column, current_tile.row))) {
            color = nlist._pickRandom()
            SetTileColor(color)
            tiles.setTileAt(tiles.getTileLocation(current_tile.column, current_tile.row), tilecolor)
        }
        tiles.placeOnTile(cursor, tiles.getTileLocation(current_tile.column + 1, current_tile.row))
        current_tile = cursor.tilemapLocation()
    }
    tiles.placeOnTile(cursor, tiles.getTileLocation(0, current_tile.row + 1))
    current_tile = cursor.tilemapLocation()
}
tiles.setTileAt(tiles.getTileLocation(9, 1), assets.tile`myTile6`)
tiles.setTileAt(tiles.getTileLocation(9, 2), assets.tile`myTile7`)
tiles.setTileAt(tiles.getTileLocation(9, 3), assets.tile`myTile`)
tiles.setTileAt(tiles.getTileLocation(9, 4), assets.tile`myTile8`)
tiles.setTileAt(tiles.getTileLocation(9, 5), assets.tile`myTile9`)
tiles.setTileAt(tiles.getTileLocation(9, 6), assets.tile`myTile10`)
let cursor2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . f f f f f f f f . 
    . . . . . . . f f f f f f f f . 
    . . . . . . . . . . . . . f f . 
    . . . . . . . . . . . . . f f . 
    . . . . . . . . . . . . . f f . 
    . . . . . . . . . . . . . f f . 
    . . . . . . . . . . . . . f f . 
    . . . . . . . . . . . . . f f . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(cursor, tiles.getTileLocation(0, 6))
tiles.placeOnTile(cursor2, tiles.getTileLocation(7, 0))
player1_locations = [cursor.tilemapLocation()]
player2_locations = [cursor2.tilemapLocation()]
