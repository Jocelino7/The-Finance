import { useState } from 'react';
import { Component, } from 'react'
import { View, Text, StyleSheet } from 'react-native';

import ColorPicker from 'react-native-color-picker-ios-android'
type ColorPickerProps = {
    currentColor: string,
    setCurrentColor: (newColor: string) => void
}
const MyColorPickerComponent = ({ props }: { props: ColorPickerProps }) => {
    const [swatchesOnly, setSwatchesOnly] = useState(false);
    const [swatchesEnabled, setSwatchesEnabled] = useState(false);
    const [swatchesLast, setSwatchesLast] = useState(false);
    const [disc, setDisc] = useState(false);

    const onColorChangeComplete = (newColor: string) => {
        // Handle color change completion here
    };

    return (
        <ColorPicker
            color={props.currentColor}
            swatchesOnly={swatchesOnly}
            onColorChange={props.setCurrentColor}
            onColorChangeComplete={()=>{}}
            thumbSize={40}
            sliderSize={40}
            noSnap={true}
            row={false}
            swatchesLast={swatchesLast}
            swatches={swatchesEnabled}
            discrete={disc}
        
        />
    )
}


export default MyColorPickerComponent;

