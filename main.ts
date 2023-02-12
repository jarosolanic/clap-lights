let svetlo = false
input.onSound(DetectedSound.Loud, function () {
    svetlo = !(svetlo)
})
basic.forever(function () {
    if (svetlo) {
        basic.showLeds(`
            . # . # .
            . # . # .
            # . . . #
            . # # # .
            . . . # .
            `)
    } else {
        basic.clearScreen()
    }
})
