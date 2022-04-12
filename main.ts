input.onButtonPressed(Button.A, function () {
    basic.showNumber(Counting_)
    for (let index = 0; index < 9; index++) {
        Counting_ += -1
        basic.showNumber(Counting_)
    }
    basic.pause(1000)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 100; index++) {
        Adding_ += 1
        Sum = Adding_ + Sum
    }
    basic.showNumber(Sum)
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
let Sum = 0
let Adding_ = 0
let Counting_ = 0
let _of_Guesses = 0
let User_ = 0
let Random_ = 0
Random_ = randint(0, 20)
User_ = 0
_of_Guesses = 0
Counting_ = 9
Adding_ = 0
Sum = 0
basic.showString("T=#tries")
basic.showNumber(User_)
