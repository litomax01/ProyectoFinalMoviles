import React, { useState } from 'react';
import { Alert, StatusBar, Text, View } from 'react-native';
import { TitleComponent } from '../components/TitleComponent';
import { BodyComponent } from '../components/BodyComponent';
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigator/StackNavigator';
import { useNavigation } from '@react-navigation/native';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Register'>;

interface Props {
    users: User[];
    addUser: (user: User) => void;
}

export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    city: string;
    phone: string;
}

export const RegisterScreen = ({ users, addUser }: Props) => {
    const [registerForm, setRegisterForm] = useState({
        name: '',
        email: '',
        password: '',
        city: '',
        phone: ''
    });

    const navigation = useNavigation<NavigationProp>();

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   
    const handleChange = (name: string, value: string): void => {
        setRegisterForm({ ...registerForm, [name]: value });
    };

    const handleRegister = () => {
        if (Object.values(registerForm).some(value => value.trim() === '')) {
            Alert.alert('Error', 'Todos los campos son obligatorios');
            return;
        }

        if (!emailRegex.test(registerForm.email)) {
            Alert.alert('Error', 'Por favor, ingrese un correo electrónico válido');
            return;
        }

        if (users.some(user => user.email === registerForm.email)) {
            Alert.alert('Error', 'El correo ya está registrado');
            return;
        }

        const newUser: User = {
            id: users.length + 1,
            ...registerForm
        };

        addUser(newUser);

        Alert.alert('Registro exitoso', 'Tu cuenta ha sido creada');

        navigation.navigate('Login');
    };

    return (
        <View>
            <StatusBar backgroundColor="#FFCC00" />
            <TitleComponent title='Regístrate' />
            <BodyComponent>
                <InputComponent placeholder='Nombre' handleChange={handleChange} name={'name'} />
                <InputComponent placeholder='Correo' keyboardType='email-address' handleChange={handleChange} name={'email'} />
                <InputComponent placeholder='Contraseña' handleChange={handleChange} name={'password'} isPassword />
                <InputComponent placeholder='Ciudad' handleChange={handleChange} name={'city'} />
                <InputComponent placeholder='Teléfono' keyboardType='phone-pad' handleChange={handleChange} name={'phone'} />
                <ButtonComponent title='Registrar' handleSendInfo={handleRegister} />
            </BodyComponent>
        </View>
    );
};
