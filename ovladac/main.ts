radio.setGroup(21)
radio.setFrequencyBand(25)
radio.setTransmitSerialNumber(true)
let id =control.deviceSerialNumber()

   

let start = true
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    start = !start
    if (start) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.No)
    }
})
basic.forever(function () {
    console.log(control.deviceSerialNumber())

    if (start) {
        let x = input.acceleration(Dimension.X)
        let y = input.acceleration(Dimension.Y)

        radio.sendValue("xy" + y, x)
        basic.pause(50)
    } else if (!start) {
        radio.sendValue("stop", 0)
    }
}
)
