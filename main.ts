input.onButtonPressed(Button.A, function () {
    if (User_ >= 0) {
        if (User_ >= 20) {
            User_ = 20
            basic.showNumber(User_)
        } else {
            User_ += 1
            basic.showNumber(User_)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (User_ == Random_) {
        music.playTone(587, music.beat(BeatFraction.Quarter))
        music.playTone(698, music.beat(BeatFraction.Half))
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        basic.pause(500)
        basic.clearScreen()
        User_ = 0
        Random_ = randint(0, 20)
        basic.showNumber(User_)
    } else if (User_ < Random_) {
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(466, music.beat(BeatFraction.Half))
        music.playTone(494, music.beat(BeatFraction.Half))
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        basic.pause(500)
        basic.clearScreen()
    } else if (User_ > Random_) {
        music.playTone(494, music.beat(BeatFraction.Half))
        music.playTone(466, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Half))
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        basic.pause(500)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    if (User_ <= 0) {
        User_ = 0
        basic.showNumber(User_)
    } else {
        User_ += -1
        basic.showNumber(User_)
    }
})
let User_ = 0
let Random_ = 0
Random_ = randint(0, 20)
User_ = 0
basic.showNumber(User_)
