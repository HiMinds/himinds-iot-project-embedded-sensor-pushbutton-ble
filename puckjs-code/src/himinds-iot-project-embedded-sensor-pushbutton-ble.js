var blueLEDOn = false;
var pushbuttonCounter = 0;


setInterval(function () {
    blueLEDOn = !blueLEDOn;
    LED3.write(blueLEDOn);

}, 1000);


NRF.setAdvertising({}, { manufacturer: 0x0590, manufacturerData: [pushbuttonCounter] });

setWatch(function () {
    pushbuttonCounter++;
    if (pushbuttonCounter > 255)
        pushbuttonCounter = 0;
    NRF.setAdvertising({}, { manufacturer: 0x0590, manufacturerData: [pushbuttonCounter] });
}, BTN, { edge: "rising", repeat: 1, debounce: 20 });
