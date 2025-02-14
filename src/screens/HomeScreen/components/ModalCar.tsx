import React from 'react';
import { FlatList, Modal, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { CarProduct } from '../HomeScreen';
import { styles } from '../../../theme/appTheme';
import { PRIMARY_COLOR } from '../../../theme/commons/constants';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
    isVisible: boolean;
    carProducts: CarProduct[];
    setShowModalCar: () => void;
}

export const ModalCar = ({ isVisible, carProducts, setShowModalCar }: Props) => {
    const { width } = useWindowDimensions();

    const totalPay = (): number => {
        let total = 0;
        carProducts.forEach(product => {
            total += product.total;
        });
        return total;
    }

    return (
        <Modal visible={isVisible} animationType='fade' transparent={true}>
            <View style={styles.modalContainer}>
                <View style={{ ...styles.modalProduct, width: width * 0.80 }}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalTitle}>Carrito de Compras</Text>
                        <View style={styles.iconContainer}>
                            <Icon name='cancel' size={23} color={PRIMARY_COLOR} onPress={setShowModalCar} />
                        </View>
                    </View>
                    <View style={styles.headerTable}>
                        <Text style={styles.textHeaderTable}>Producto</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ ...styles.textHeaderTable, marginHorizontal: 10 }}>Precio</Text>
                            <Text style={styles.textHeaderTable}>Cantidad</Text>
                            <Text style={{ ...styles.textHeaderTable, marginHorizontal: 10 }}>Total</Text>
                        </View>
                    </View>
                    <FlatList
                        data={carProducts}
                        renderItem={({ item }) =>
                            <View style={styles.headerTable}>
                                <Text>{item.name}</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ marginHorizontal: 10 }}>${item.price.toFixed(2)}</Text>
                                    <Text style={{ paddingHorizontal: 25 }}>{item.quantity}</Text>
                                    <Text style={{ marginHorizontal: 10 }}>${item.total.toFixed(2)}</Text>
                                </View>
                            </View>
                        }
                        keyExtractor={item => item.id.toString()}
                    />
                    <View style={styles.totalContainer}>
                        <Text style={styles.textTotal}>Total a Pagar: ${totalPay().toFixed(2)}</Text>
                    </View>
                    <TouchableOpacity style={styles.buttonAddCart}>
                        <Text style={styles.buttonAddCartText}>Finalizar Compra</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}
