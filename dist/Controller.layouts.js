(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define('controller.layouts.js', factory) :
    (global.ControllerLayouts = factory());
}(this, (function () { 'use strict';

/*! Controller.layouts.js - v1.0.0 - 2016-08-30 */

var xboxOneOSX = {
    match: "Xbox One Wired Controller",
    name: "Xbox One (Xbox 360 Controller Driver)",
    description: "A standard Xbox One gamepad on Mac OS X using the driver " + "Xbox 360 Controller Driver (https://github.com/360Controller/360Controller/).",
    init: function init() {
        console.warn("Reporting of buttons.HOME is buggy and unreliable.");
    },
    buttons: {
        FACE_1: 0,
        FACE_2: 1,
        FACE_3: 2,
        FACE_4: 3,
        LEFT_SHOULDER: 4,
        RIGHT_SHOULDER: 5,
        LEFT_ANALOG_BUTTON: 6,
        RIGHT_ANALOG_BUTTON: 7,
        START: 8,
        SELECT: 9,
        DPAD_UP: 11,
        DPAD_DOWN: 12,
        DPAD_LEFT: 13,
        DPAD_RIGHT: 14
    },
    axes: {
        LEFT_ANALOG_STICK_HOR: 0,
        LEFT_ANALOG_STICK_VERT: 1,
        LEFT_SHOULDER_BOTTOM: {
            index: 2,
            inputMin: -1,
            type: "buttons"
        },
        RIGHT_ANALOG_STICK_HOR: 3,
        RIGHT_ANALOG_STICK_VERT: 4,
        RIGHT_SHOULDER_BOTTOM: {
            index: 5,
            inputMin: -1,
            type: "buttons"
        },
        HOME: {
            index: 9,
            type: "buttons",
            data: {
                value: undefined,
                pressed: false
            },
            method: homeButton,
            ignoreConversion: true
        }
    }
};
var mozillaVariant = {
    buttons: {
        FACE_1: 3,
        FACE_2: 4,
        FACE_3: 5,
        FACE_4: 6,
        LEFT_SHOULDER: 11,
        RIGHT_SHOULDER: 12,
        LEFT_ANALOG_BUTTON: 13,
        RIGHT_ANALOG_BUTTON: 14,
        START: 2,
        SELECT: 1,
        DPAD_UP: 7,
        DPAD_DOWN: 8,
        DPAD_LEFT: 9,
        DPAD_RIGHT: 10,
        HOME: 15
    },
    axes: {
        LEFT_ANALOG_STICK_HOR: 0,
        LEFT_ANALOG_STICK_VERT: 1,
        LEFT_SHOULDER_BOTTOM: {
            index: 2,
            inputMin: -1,
            type: "buttons"
        },
        RIGHT_ANALOG_STICK_HOR: 3,
        RIGHT_ANALOG_STICK_VERT: 4,
        RIGHT_SHOULDER_BOTTOM: {
            index: 5,
            inputMin: -1,
            type: "buttons"
        }
    }
};
xboxOneOSX.Mozilla = mozillaVariant;

function homeButton(gamepad, button) {
    if (!gamepad) {
        return;
    }
    var value = gamepad.axes[9];
    var previous = button.data;
    if (previous.value === undefined) {
        button.data = {
            value: value,
            pressed: false
        };
        return 0;
    }
    if (value === previous.value) {
        button.data = {
            value: button.data.value,
            pressed: button.data.pressed
        };
        return previous.pressed ? 1 : 0;
    } else {
        if (previous.pressed) {
            button.data = {
                value: value,
                pressed: false
            };
            return 0;
        } else {
            button.data = {
                value: value,
                pressed: true
            };
            return 1;
        }
    }
}

return xboxOneOSX;

})));
