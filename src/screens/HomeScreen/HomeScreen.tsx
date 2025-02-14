import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, StatusBar, Alert } from 'react-native';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../theme/commons/constants';
import { TitleComponent } from '../../components/TitleComponent';
import { BodyComponent } from '../../components/BodyComponent';
import { CardProduct } from './components/CardProduct';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../../theme/appTheme';
import { ModalCar } from './components/ModalCar';

export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
}

export interface CarProduct {
    id: number;
    name: string;
    price: number;
    quantity: number;
    total: number;
}

export const HomeScreen = () => {
    const products: Product[] = [
        { id: 1, name: 'Cien años de soledad', price: 15.00, stock: 5, pathImage: 'https://your-image-link.com/cien_anos.jpg' },
        { id: 2, name: 'El Principito', price: 10.50, stock: 8, pathImage: 'https://your-image-link.com/el_principito.jpg' },
        { id: 3, name: 'Mochila escolar', price: 25.00, stock: 3, pathImage: 'https://your-image-link.com/mochila.jpg' },
        { id: 4, name: 'Cuaderno universitario', price: 4.99, stock: 10, pathImage: 'https://your-image-link.com/cuaderno.jpg' },
        { id: 5, name: 'Lápices', price: 3.50, stock: 12, pathImage: 'https://your-image-link.com/lapices.jpg' },
        { id: 6, name: 'Agenda', price: 22.00, stock: 5, pathImage: 'https://your-image-link.com/agenda.jpg' },
        { id: 7, name: 'Tijeras', price: 4.50, stock: 10, pathImage: 'https://your-image-link.com/tijeras.jpg' },
        { id: 8, name: 'Corrector líquido', price: 2.75, stock: 15, pathImage: 'https://your-image-link.com/corrector.jpg' },
        { id: 9, name: 'Cartuchera', price: 8.99, stock: 7, pathImage: 'https://your-image-link.com/cartuchera.jpg' },
        { id: 10, name: 'Marcadores', price: 9.50, stock: 8, pathImage: 'https://your-image-link.com/rotuladores.jpg' },
    ];
    
    const [productsState, setProductsState] = useState<Product[]>(products);
    const [carProducts, setCarProducts] = useState<CarProduct[]>([]);
    const [showModalCar, setShowModalCar] = useState<boolean>(false);

    const changeStock = (id: number, quantity: number): void => {
        setProductsState(productsState.map(product => 
            product.id === id ? { ...product, stock: product.stock - quantity } : product
        ));
        addProduct(id, quantity);
    };

    const addProduct = (id: number, quantity: number) => {
        setCarProducts(prevCart => {
            const existingProduct = prevCart.find(product => product.id === id);
            if (existingProduct) {
                return prevCart.map(product =>
                    product.id === id
                        ? { ...product, quantity: product.quantity + quantity, total: product.price * (product.quantity + quantity) }
                        : product
                );
            }
            const product = productsState.find(p => p.id === id);
            if (!product) return prevCart;

            return [...prevCart, { id: product.id, name: product.name, price: product.price, quantity, total: product.price * quantity }];
        });
    };

    const removeProduct = (id: number) => {
        setCarProducts(prevCart => prevCart.filter(product => product.id !== id));
    };

    const decreaseQuantity = (id: number) => {
        setCarProducts(prevCart =>
            prevCart
                .map(product =>
                    product.id === id && product.quantity > 1
                        ? { ...product, quantity: product.quantity - 1, total: product.price * (product.quantity - 1) }
                        : product
                )
                .filter(product => product.quantity > 0)
        );
    };

    const resetCart = (): void => {
        Alert.alert("¡Gracias por tu compra!", "Tu pedido ha sido procesado con éxito.", [
            { text: "OK", onPress: () => setCarProducts([]) },
        ]);
        setShowModalCar(false);
    };

    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <View style={styles.headerContainer}>
                <TitleComponent title="Librería y Papelería El Regalote" />
                <TouchableOpacity 
                    onPress={() => setShowModalCar(true)} 
                    style={[styles.cartIconContainer, carProducts.length === 0 && styles.disabledButton]}
                    disabled={carProducts.length === 0}
                >
                    <Text style={styles.textIconCar}>{carProducts.length}</Text>
                    <Icon name="shopping-cart" size={40} color={SECONDARY_COLOR} />
                </TouchableOpacity>
            </View>
            
            <BodyComponent>
                <FlatList
                    data={productsState}
                    renderItem={({ item }) => <CardProduct product={item} changeStock={changeStock} />}
                    keyExtractor={item => item.id.toString()}
                />
            </BodyComponent>

            <ModalCar 
                isVisible={showModalCar} 
                carProducts={carProducts} 
                setShowModalCar={() => setShowModalCar(false)} 
                resetCart={resetCart}
                removeProduct={removeProduct}
                decreaseQuantity={decreaseQuantity} 
            />
        </View>
    );
};
