import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, StatusBar } from 'react-native';
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
        { id: 1, name: 'Cien años de soledad', price: 15.99, stock: 5, pathImage: 'https://your-image-link.com/cien_anos.jpg' },
        { id: 2, name: 'El Principito', price: 10.50, stock: 8, pathImage: 'https://your-image-link.com/el_principito.jpg' },
        { id: 3, name: 'Mochila escolar', price: 25.00, stock: 3, pathImage: 'https://your-image-link.com/mochila.jpg' },
        { id: 4, name: 'Cuaderno universitario', price: 4.99, stock: 10, pathImage: 'https://your-image-link.com/cuaderno.jpg' },
        { id: 5, name: 'Set de lápices', price: 3.50, stock: 12, pathImage: 'https://your-image-link.com/lapices.jpg' },
    ];
    
    const [productsState, setProductsState] = useState<Product[]>(products);
    const [carProducts, setCarProducts] = useState<CarProduct[]>([]);
    const [showModalCar, setShowModalCar] = useState<boolean>(false);

    const changeStock = (id: number, quantity: number): void => {
        const updatedStock = productsState.map(product => 
            product.id === id ? { ...product, stock: product.stock - quantity } : product
        );
        setProductsState(updatedStock);
        addProduct(id, quantity);
    };

    const addProduct = (id: number, quantity: number) => {
        setCarProducts(prevCart => {
            const existingProductIndex = prevCart.findIndex(item => item.id === id);

            if (existingProductIndex !== -1) {
                const updatedCart = [...prevCart];
                updatedCart[existingProductIndex] = {
                    ...updatedCart[existingProductIndex],
                    quantity: updatedCart[existingProductIndex].quantity + quantity,
                    total: updatedCart[existingProductIndex].total + (updatedCart[existingProductIndex].price * quantity),
                };
                return updatedCart;
            }

            const product = productsState.find(product => product.id === id);
            if (!product) return prevCart;

            return [
                ...prevCart,
                {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: quantity,
                    total: product.price * quantity
                }
            ];
        });
    };

    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <View style={styles.headerContainer}>
                <TitleComponent title="Librería y Papelería El Regalote" />
                <TouchableOpacity onPress={() => setShowModalCar(true)} style={styles.cartIconContainer}>
                    {carProducts.length > 0 ? (
                        <>
                            <Text style={styles.textIconCar}>{carProducts.length}</Text>
                            <Icon name="shopping-cart" size={33} color={SECONDARY_COLOR} />
                        </>
                    ) : (
                        <Text style={styles.emptyCartText}>Carrito vacío</Text>
                    )}
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
            />
        </View>
    );
};
