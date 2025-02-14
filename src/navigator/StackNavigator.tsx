import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { PRIMARY_COLOR } from '../theme/commons/constants';
import { RegisterScreen } from '../screens/RegisterScreen';
import { useState } from 'react';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';

export type RootStackParamList = {
    Login: undefined;
    Register: undefined;
    Home: undefined;
};


export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    city: string;
    phone: string;
}

const users: User[] = [
    { id: 1, name: 'Carlos Pérez', email: 'carlos@gmail.com', password: '123456', city: 'Quito', phone: '0987654321' }
];

const Stack = createStackNavigator();


export const StackNavigator = () => {
    const [usersManager, setUsersManager] = useState<User[]>(users);

    const addUser = (user: User): void => {
        setUsersManager([...usersManager, user]);
    }

    return (
        <Stack.Navigator screenOptions={{ cardStyle: { backgroundColor: PRIMARY_COLOR } }}>
            <Stack.Screen name="Login" options={{ headerShown: false }} children={() => <LoginScreen users={usersManager} />} />
            <Stack.Screen name="Register" options={{ headerShown: false }} children={() => <RegisterScreen users={usersManager} addUser={addUser} />} />
            <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
        </Stack.Navigator>
    );
}
