input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # # . # #
        . . . . .
        # # # # #
        # . . . #
        . # # # .
        `)
    soundExpression.giggle.play()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    soundExpression.happy.play()
})
let timer = 0
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    . . . . .
    `)
soundExpression.hello.play()
basic.forever(function () {
    basic.pause(500)
    timer = timer + 1
    if (timer == 20) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            . . . . .
            `)
        soundExpression.sad.play()
    }
    if (timer == 40) {
        soundExpression.mysterious.play()
        music.setBuiltInSpeakerEnabled(false)
        while (true) {
            basic.showLeds(`
                . # # # .
                # . # . #
                # # # # #
                . # # # .
                . # # # .
                `)
        }
    }
})
