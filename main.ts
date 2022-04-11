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
let Random_ = randint(0, 20)
User_ = 0
