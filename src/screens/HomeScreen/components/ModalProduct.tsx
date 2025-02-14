import React, { useState } from 'react';
import { Image, Modal, Text, TouchableOpacity, useWindowDimensions, View, Alert } from 'react-native';
import { styles } from '../../../theme/appTheme';
import { Product } from '../HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../../../theme/commons/constants';

interface Props {
    product: Product;
    isVisible: boolean;
    setShowModalProduct: () => void;
    changeStock: (id: number, quantity: number) => void;
}

export const ModalProduct = ({ product, isVisible, setShowModalProduct, changeStock }: Props) => {
    const { width } = useWindowDimensions();
    const [quantity, setQuantity] = useState<number>(1);

    const closeModal = (): void => {
        setShowModalProduct();
        setQuantity(1);
    };

    const handleIncrease = (): void => {
        if (quantity < product.stock) {
            setQuantity(quantity + 1);
        }
    };

    const handleDecrease = (): void => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddProduct = (): void => {
        if (product.stock < quantity) {
            Alert.alert('Error', 'No hay suficiente stock disponible.');
            return;
        }
        changeStock(product.id, quantity);
        closeModal();
    };

    return (
        <Modal visible={isVisible} animationType="fade" transparent={true}>
            <View style={styles.modalContainer}>
                <View style={{ ...styles.modalProduct, width: width * 0.85 }}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalTitle}>{product.name} - ${product.price.toFixed(2)}</Text>
                        <View style={styles.iconContainer}>
                            <Icon name="cancel" size={23} color={PRIMARY_COLOR} onPress={closeModal} />
                        </View>
                    </View>
                    <Image source={{ uri: product.pathImage }} style={styles.modalImage} />
                    <View style={styles.counterContainer}>
                        <TouchableOpacity onPress={handleDecrease} style={styles.counterButton}>
                            <Text style={styles.counterText}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.counterNumber}>{quantity}</Text>
                        <TouchableOpacity onPress={handleIncrease} style={styles.counterButton}>
                            <Text style={styles.counterText}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.textQuantity}>Total: ${(product.price * quantity).toFixed(2)}</Text>
                    </View>
                    <TouchableOpacity 
                        style={[styles.buttonAddCart, product.stock === 0 && styles.disabledButton]} 
                        onPress={handleAddProduct} 
                        disabled={product.stock === 0}
                    >
                        <Text style={styles.buttonAddCartText}>
                            {product.stock === 0 ? 'Sin Stock' : 'Agregar al carrito'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};
