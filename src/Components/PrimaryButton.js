import React from "react";
import {Button} from "react-native-elements";
import {StyleSheet} from "react-native";

export default function PrimaryButton(props: any) {
    return <Button
        buttonStyle={styles.button}
        titleStyle={styles.buttonText}
        containerStyle={styles.buttonContainer}
        {...props} />
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
    button: {
        backgroundColor: '#00CCBC',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    buttonText: {
        fontSize: 17,
        textTransform: 'uppercase'
    }
});
