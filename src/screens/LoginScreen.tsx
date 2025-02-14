import React, { useState } from 'react';
import { Alert, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { TitleComponent } from '../components/TitleComponent';
import { BodyComponent } from '../components/BodyComponent';
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigator/StackNavigator';
import { User } from '../navigator/StackNavigator';

interface Props {
    users: User[];
}

export const LoginScreen = ({ users }: Props) => {
    // Definir la navegación tipada
    type NavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
    const navigation = useNavigation<NavigationProp>();

    const [loginForm, setLoginForm] = useState({ email: '', password: '' });

    const handleChange = (name: string, value: string): void => {
        setLoginForm({ ...loginForm, [name]: value });
    };

    const verifyUser = (): User | undefined => {
        return users.find(user => user.email === loginForm.email && user.password === loginForm.password);
    };

    const handleLogin = (): void => {
        if (!loginForm.email || !loginForm.password) {
            Alert.alert('Error', 'Todos los campos son obligatorios');
            return;
        }
        if (!verifyUser()) {
            Alert.alert('Error', 'Usuario y/o contraseña incorrecta');
            return;
        }
        navigation.navigate('Home');
    };

    return (
        <View>
            <StatusBar backgroundColor="#FFCC00" />
            <TitleComponent title='Iniciar Sesión' />
            <BodyComponent>
                <Text style={styles.titlePrincipal}>Bienvenido a Librería Digital</Text>
                <View style={styles.formContainer}>
                    <InputComponent placeholder='Correo' keyboardType='email-address' handleChange={handleChange} name={'email'} />
                    <InputComponent placeholder='Contraseña' handleChange={handleChange} name={'password'} isPassword />
                </View>
                <ButtonComponent title='Iniciar' handleSendInfo={handleLogin} />
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.textRedirect}>¿No tienes cuenta? Regístrate aquí</Text>
                </TouchableOpacity>
            </BodyComponent>
        </View>
    );
};
