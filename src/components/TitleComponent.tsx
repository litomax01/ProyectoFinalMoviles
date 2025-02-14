import React from 'react';
import { Text, useWindowDimensions, StyleSheet } from 'react-native';
import { PRIMARY_COLOR } from '../theme/commons/constants';

interface Props {
    title: string;
}

export const TitleComponent = ({ title }: Props) => {
    const { height } = useWindowDimensions();
    return (
        <Text style={{ ...styles.title, height: height * 0.12 }}>{title}</Text>
    );
};

const styles = StyleSheet.create({
    title: {
        color: PRIMARY_COLOR,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 15
    }
});
