import React, { useState } from 'react';
import { StatusBar, Text, TouchableOpacity, View, Image, ScrollView, Modal } from 'react-native';
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
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const handleChange = (name: string, value: string): void => {
        setLoginForm({ ...loginForm, [name]: value });
    };

    const verifyUser = (): User | undefined => {
        return users.find(user => user.email === loginForm.email && user.password === loginForm.password);
    };

    const handleLogin = (): void => {
        if (!loginForm.email || !loginForm.password) {
            setModalMessage('Todos los campos son obligatorios');
            setModalVisible(true);
            return;
        }
        if (!verifyUser()) {
            setModalMessage('Usuario y/o contraseña incorrecta');
            setModalVisible(true);
            return;
        }
        navigation.navigate('Home');
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: PRIMARY_COLOR, alignItems: 'center', justifyContent: 'center', paddingVertical: 40 }}>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            
            {/* Título Principal */}
            <Text style={styles.mainTitle}>LIBRERÍA Y PAPELERÍA EL REGALOTE</Text>

            {/* Imagen de Login */}
            <Image source={require('../../assets/login-banner.png')} style={styles.loginImage} />
            
            {/* Subtítulo de Bienvenida Mejorado */}
            <Text style={styles.welcomeText}>¡Hola de nuevo!</Text>
            <Text style={styles.loginSubtitle}>Ingresa tus credenciales para continuar</Text>
            
            <BodyComponent>
                <View style={styles.formContainer}>
                    <InputComponent placeholder='Correo Electrónico' keyboardType='email-address' handleChange={handleChange} name={'email'} />
                    <InputComponent placeholder='Contraseña' handleChange={handleChange} name={'password'} isPassword />
                </View>
                
                <TouchableOpacity style={styles.forgotPassword}>
                    <Text style={{ color: SECONDARY_COLOR, textAlign: 'right' }}>¿Olvidaste tu contraseña?</Text>
                </TouchableOpacity>
                
                <ButtonComponent title='Acceder' handleSendInfo={handleLogin} />
                
                <View style={styles.registerContainer}>
                    <Text style={{ color: SECONDARY_COLOR }}>¿No tienes cuenta? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={{ color: '#5aabdd', fontWeight: 'bold' }}>Regístrate aquí</Text>
                    </TouchableOpacity>
                </View>
            </BodyComponent>

            {/* Modal de Errores */}
            <Modal visible={modalVisible} animationType='slide' transparent={true}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>{modalMessage}</Text>
                        <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
                            <Text style={styles.modalButtonText}>Aceptar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
}
