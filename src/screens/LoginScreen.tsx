import React, { useState } from 'react';
import { Alert, StatusBar, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import { TitleComponent } from '../components/TitleComponent';
import { BodyComponent } from '../components/BodyComponent';
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigator/StackNavigator';
import { User } from '../navigator/StackNavigator';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../theme/commons/constants';

interface Props {
    users: User[];
}

type NavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

export const LoginScreen = ({ users }: Props) => {
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
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: PRIMARY_COLOR, alignItems: 'center', justifyContent: 'center', paddingVertical: 40 }}>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            
            {/* Imagen decorativa */}
            <Image source={require('../../assets/login-banner.png')} style={styles.loginImage} />
            
            <TitleComponent title='Bienvenido de vuelta' />
            <Text style={styles.loginSubtitle}>Accede con tu cuenta para continuar</Text>
            
            <BodyComponent>
                <View style={styles.formContainer}>
                    <InputComponent placeholder='Correo Electrónico' keyboardType='email-address' handleChange={handleChange} name={'email'} />
                    <InputComponent placeholder='Contraseña' handleChange={handleChange} name={'password'} isPassword />
                </View>
                
                <TouchableOpacity style={styles.forgotPassword}>
                    <Text style={{ color: SECONDARY_COLOR, textAlign: 'right', fontSize: 14 }}>¿Olvidaste tu contraseña?</Text>
                </TouchableOpacity>
                
                <ButtonComponent title='Iniciar Sesión' handleSendInfo={handleLogin} />
                
                <View style={styles.registerContainer}>
                    <Text style={{ color: SECONDARY_COLOR, fontSize: 14 }}>¿No tienes cuenta? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={{ color: '#5aabdd', fontWeight: 'bold', fontSize: 14 }}>Regístrate aquí</Text>
                    </TouchableOpacity>
                </View>
            </BodyComponent>
        </ScrollView>
    );
}
