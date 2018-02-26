import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "form a": {
        "marginLeft": 10
    },
    "push-down": {
        "paddingTop": 30
    },
    "push-up": {
        "paddingBottom": 30
    }
});