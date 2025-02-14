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
    pathImage: number | { uri: string };  
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
        { id: 1, name: 'Cien años de soledad', price: 15.00, stock: 5, pathImage: { uri: 'https://carlosbattaglini.es/wp-content/uploads/2017/02/librocienan%CC%83osdesoledad.jpg' } },
        { id: 2, name: 'El Principito', price: 10.50, stock: 8, pathImage: { uri: 'https://cdn.forbes.pe/2023/04/PRINCIPITO.jpg' } },
        { id: 3, name: 'Mochila escolar', price: 25.00, stock: 3, pathImage: { uri: 'https://comsucre.com.ec/wp-content/uploads/2023/02/PM-UD-3327-5.png' } },
        { id: 4, name: 'Cuaderno universitario', price: 4.99, stock: 10, pathImage: { uri: 'https://your-image-link.com/cuaderno.jpg' } },
        { id: 5, name: 'Lápices', price: 3.50, stock: 12, pathImage: { uri: 'https://http2.mlstatic.com/D_NQ_NP_640200-MLU71517988099_092023-O.webp' } },
        { id: 6, name: 'Agenda', price: 22.00, stock: 5, pathImage: { uri: 'https://dilipa.com.ec/5347-large_default/agenda-ejecutiva-espiral-2025-varios-colores.jpg' } },
        { id: 7, name: 'Tijeras', price: 4.50, stock: 10, pathImage: { uri: 'https://zarimport.com/wp-content/uploads/2022/06/ZAR15032-247-1.jpg' } },
        { id: 8, name: 'Corrector líquido', price: 2.75, stock: 15, pathImage: { uri: 'https://i0.wp.com/aguirrepapelerias.com/wp-content/uploads/2021/07/070330506923.png?fit=1200%2C1200&ssl=1' } },
        { id: 9, name: 'Cartuchera', price: 8.99, stock: 7, pathImage: { uri: 'https://vasari.vteximg.com.br/arquivos/ids/214259-1000-1000/VPT172959-GR.jpg?v=638139069096530000' } },
        { id: 10, name: 'Marcadores', price: 9.50, stock: 8, pathImage: { uri: 'https://polipapel.vteximg.com.br/arquivos/ids/175019-1000-1000/Y14433.png?v=638209883460000000' } },
        { id: 11, name: 'Resaltador', price: 6.50, stock: 10, pathImage: { uri: 'https://juanmarcet.com/wp-content/uploads/2020/11/0201129202-03-04-05-06-07-600x600.jpg' } },
        { id: 12, name: 'Regla 30cm', price: 3.00, stock: 12, pathImage: { uri: 'https://libreriairbe.com/wp-content/uploads/2021/07/Regla-30-cm-Metalica-Metrica-y-Pulgadas-.jpg' } },
        { id: 13, name: 'Compás', price: 8.00, stock: 6, pathImage: { uri: 'https://www.kores.com/co/wp-content/uploads/sites/23/fly-images/7128/Robot_Single_blue-scaled-700x9999.jpg' } },
        { id: 14, name: 'Pegamento', price: 2.00, stock: 20, pathImage: { uri: 'https://kywiec.vtexassets.com/arquivos/ids/190262/33125.jpg?v=638416573946970000' } },
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
        setShowModalCar(false); 

        setTimeout(() => {
            setCarProducts([]); 
        }, 200); 
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
