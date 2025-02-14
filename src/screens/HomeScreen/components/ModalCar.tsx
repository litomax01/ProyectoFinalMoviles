import React from 'react';
import { FlatList, Modal, Text, TouchableOpacity, useWindowDimensions, View, Alert } from 'react-native';
import { CarProduct } from '../HomeScreen';
import { styles } from '../../../theme/appTheme';
import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../../../theme/commons/constants';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
    isVisible: boolean;
    carProducts: CarProduct[];
    setShowModalCar: () => void;
    resetCart: () => void;
    removeProduct: (id: number) => void;
    decreaseQuantity: (id: number) => void;
}

export const ModalCar = ({ isVisible, carProducts, setShowModalCar, resetCart, removeProduct, decreaseQuantity }: Props) => {
    const { width } = useWindowDimensions();

    const handleBuy = () => {
        setShowModalCar(); // Cierra el modal primero

        setTimeout(() => {
            resetCart(); // Luego vacía el carrito después de cerrar el modal
            Alert.alert("¡GRACIAS POR TU COMPRA, VUELVE PRONTO!", "Tu pedido ha sido procesado con éxito.");
        }, 300); 
    };
    
    return (
        <Modal visible={isVisible} animationType='fade' transparent={true}>
            <View style={styles.modalContainer}>
                <View style={{ ...styles.modalProduct, width: width * 0.85 }}>
                    
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalTitle}>Carrito de Compras</Text>
                        <TouchableOpacity onPress={setShowModalCar}>
                            <Icon name='cancel' size={25} color={PRIMARY_COLOR} />
                        </TouchableOpacity>
                    </View>

                    {carProducts.length === 0 ? (
                        <Text style={styles.emptyCartMessage}>No hay productos en el carrito</Text>
                    ) : (
                        <>
                            <FlatList
                                data={carProducts}
                                renderItem={({ item }) => (
                                    <View style={styles.cartItemContainer}>
                                        <View style={styles.cartItemInfo}>
                                            <Text style={styles.productName}>{item.name}</Text>
                                            <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
                                            <Text style={styles.productTotal}>Total: ${item.total.toFixed(2)}</Text>
                                        </View>
                                    </View>
                                )}
                                keyExtractor={item => item.id.toString()}
                            />

                            <TouchableOpacity style={styles.buttonBuy} onPress={handleBuy}>
                                <Text style={styles.buttonBuyText}>Finalizar Compra</Text>
                            </TouchableOpacity>
                        </>
                    )}
                </View>
            </View>
        </Modal>
    );
};
