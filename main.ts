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
input.onButtonPressed(Button.B, function () {
    if (User_ <= 0) {
        User_ = 0
        basic.showNumber(User_)
    } else {
        User_ += -1
        basic.showNumber(User_)
    }
})
input.onGesture(Gesture.Shake, function () {
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
        basic.showString("T=")
        basic.showNumber(_of_Guesses)
        basic.pause(500)
        _of_Guesses = 0
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
        _of_Guesses += 1
        basic.showString("T=")
        basic.showNumber(_of_Guesses)
        basic.pause(500)
        basic.clearScreen()
        basic.pause(200)
        basic.showNumber(User_)
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
        _of_Guesses += 1
        basic.showString("T=")
        basic.showNumber(_of_Guesses)
        basic.pause(500)
        basic.clearScreen()
        basic.pause(200)
        basic.showNumber(User_)
    }
})
let _of_Guesses = 0
let User_ = 0
let Random_ = 0
Random_ = randint(0, 20)
User_ = 0
_of_Guesses = 0
basic.showString("T=#tries")
basic.showNumber(User_)
