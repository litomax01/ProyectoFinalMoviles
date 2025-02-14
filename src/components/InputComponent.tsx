import React from 'react';
import { KeyboardTypeOptions, TextInput, StyleSheet } from 'react-native';
import { INPUT_COLOR, PRIMARY_COLOR } from '../theme/commons/constants';

interface Props {
    placeholder: string;
    keyboardType?: KeyboardTypeOptions;
    handleChange: (key: string, value: string) => void;
    name: string;
    isPassword?: boolean;
}

export const InputComponent = ({
    placeholder,
    keyboardType = 'default',
    handleChange,
    name,
    isPassword = false
}: Props) => {
    return (
        <TextInput
            placeholder={placeholder}
            keyboardType={keyboardType}
            onChangeText={(value) => handleChange(name, value)}
            secureTextEntry={isPassword}
            style={styles.input}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        backgroundColor: INPUT_COLOR,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: PRIMARY_COLOR
    }
});
