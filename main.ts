basic.forever(function () {
    music.playMelody("F F F G G G A A ", 500)
})
basic.forever(function () {
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . # . . .
        . # . . .
        `)
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        # # . # #
        # . # . #
        # . # . #
        # . . . #
        # . . . #
        `)
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        # . . . #
        # # . . #
        # . # . #
        # . . # #
        # . . . #
        `)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . . . # .
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . # . # .
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        `)
    basic.showLeds(`
        # . . . #
        # # . . #
        # . # . #
        # . . # #
        # . . . #
        `)
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . # . . .
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # . .
        . # . # .
        . # . # .
        `)
    basic.showIcon(IconNames.Heart)
    led.toggle(1, 2)
})
