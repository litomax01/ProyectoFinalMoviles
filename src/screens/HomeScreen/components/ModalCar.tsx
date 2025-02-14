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
        Alert.alert("¡Gracias por tu compra!", "Tu pedido ha sido procesado con éxito.", [
            { text: "OK", onPress: () => resetCart() },
        ]);
    };

    return (
        <Modal visible={isVisible} animationType='fade' transparent={true}>
            <View style={styles.modalContainer}>
                <View style={{ ...styles.modalProduct, width: width * 0.85 }}>
                    
                    {/* Encabezado del modal */}
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalTitle}>Carrito de Compras</Text>
                        <TouchableOpacity onPress={setShowModalCar}>
                            <Icon name='cancel' size={25} color={PRIMARY_COLOR} />
                        </TouchableOpacity>
                    </View>

                    {/* Si el carrito está vacío, muestra mensaje */}
                    {carProducts.length === 0 ? (
                        <Text style={styles.emptyCartMessage}>No hay productos en el carrito</Text>
                    ) : (
                        <>
                            {/* Lista de productos en el carrito */}
                            <FlatList
                                data={carProducts}
                                renderItem={({ item }) => (
                                    <View style={styles.cartItemContainer}>
                                        
                                        <View style={styles.cartItemInfo}>
                                            <Text style={styles.productName}>{item.name}</Text>
                                            <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
                                            <Text style={styles.productTotal}>Total: ${item.total.toFixed(2)}</Text>
                                        </View>

                                        <View style={styles.cartItemActions}>
                                            <TouchableOpacity onPress={() => decreaseQuantity(item.id)} style={styles.decreaseButton}>
                                                <Text style={styles.decreaseText}>-</Text>
                                            </TouchableOpacity>

                                            <Text style={styles.quantityText}>{item.quantity}</Text>

                                            <TouchableOpacity onPress={() => removeProduct(item.id)} style={styles.deleteButton}>
                                                <Icon name="delete" size={22} color="white" />
                                            </TouchableOpacity>
                                        </View>

                                    </View>
                                )}
                                keyExtractor={item => item.id.toString()}
                            />

                            {/* Botón para finalizar compra */}
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
