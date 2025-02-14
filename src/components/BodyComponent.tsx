import React, { ReactNode } from 'react';
import { View, useWindowDimensions, StyleSheet } from 'react-native';
import { SECONDARY_COLOR } from '../theme/commons/constants';

interface Props {
    children: ReactNode;
}

export const BodyComponent = ({ children }: Props) => {
    const { height } = useWindowDimensions();
    return (
        <View style={{ ...styles.bodyContainer, height: height * 0.88 }}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    bodyContainer: {
        backgroundColor: SECONDARY_COLOR,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingTop: 30
    }
});
