import React from "react";
import {Button} from "react-native-elements";
import {StyleSheet} from "react-native";

export default function PrimaryButton(props: any) {
    return <Button
        buttonStyle={[styles.button, styles[props.color ? props.color : 'primary']]}
        titleStyle={styles.buttonText}
        {...props} />
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        paddingHorizontal: 40,
        paddingVertical: 15,
    },
    primary: {
        backgroundColor: '#0c2430',
    },
    danger: {
        backgroundColor: '#FE180C',
    },
    buttonText: {
        fontSize: 17,
        textTransform: 'uppercase'
    },
});
