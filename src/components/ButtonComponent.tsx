import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BUTTON_COLOR, SECONDARY_COLOR } from '../theme/commons/constants';

interface Props {
    title: string;
    handleSendInfo: () => void;
}

export const ButtonComponent = ({ title, handleSendInfo }: Props) => {
    return (
        <TouchableOpacity style={styles.button} onPress={handleSendInfo}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: BUTTON_COLOR,
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center'
    },
    text: {
        color: SECONDARY_COLOR,
        fontSize: 16,
        fontWeight: 'bold'
    }
});
