input.onButtonPressed(Button.AB, function () {
    for (let index2 = 0; index2 < 6; index2++) {
        index = randint(randint(0, 10), 6)
        basic.showString("" + (text_list[index]))
        text_list.pop()
    }
})
input.onButtonPressed(Button.B, function () {
    index = randint(0, 6)
    basic.showString("" + (text_list[index]))
    text_list.pop()
})
let index = 0
let text_list: string[] = []
text_list = [
"Sabaton",
"Green Day",
"Metallica",
"Van Halen",
"Led Zeppelin",
"Rolling Stones"
]
