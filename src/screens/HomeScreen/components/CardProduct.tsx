import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { Product } from '../HomeScreen';
import { styles } from '../../../theme/appTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../../../theme/commons/constants';
import { ModalProduct } from './ModalProduct';

interface Props {
    product: Product;
    changeStock: (id: number, quantity: number) => void;
}

export const CardProduct = ({ product, changeStock }: Props) => {
    const [showModalProduct, setShowModalProduct] = useState<boolean>(false);

    return (
        <View>
            <View style={styles.cardContainer}>
                {/* 🔥 Aquí está la corrección. No envuelvas pathImage en { uri: ... } si ya es un objeto válido */}
                <Image source={product.pathImage} style={styles.imageCard} />

                <View>
                    <Text style={styles.titleCard}>{product.name}</Text>
                    <Text> Precio: ${product.price.toFixed(2)}</Text>
                </View>

                <View style={styles.iconContainer}>
                    <Icon name='add-shopping-cart' size={30} color={PRIMARY_COLOR} onPress={() => setShowModalProduct(!showModalProduct)} />
                </View>
            </View>

            <ModalProduct 
                product={product} 
                isVisible={showModalProduct} 
                setShowModalProduct={() => setShowModalProduct(!showModalProduct)} 
                changeStock={changeStock} 
            />
        </View>
    );
};
