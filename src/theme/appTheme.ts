import { StyleSheet } from 'react-native';
import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR, TEXT_COLOR, BACKGROUND_COLOR, INPUT_COLOR } from './commons/constants';

export const styles = StyleSheet.create({
    titleCard: {
        fontSize: 18,
        fontWeight: 'bold',
        color: TEXT_COLOR,
        marginBottom: 8,
    },
    loginImage: {
        width: '80%',
        height: 220,
        resizeMode: 'contain',
        marginBottom: 25,
    },
    loginSubtitle: {
        fontSize: 16,
        color: TEXT_COLOR,
        textAlign: 'center',
        marginBottom: 12,
    },
    forgotPassword: {
        marginTop: 8,
        alignSelf: 'flex-end',
        color: BUTTON_COLOR,
        fontSize: 14,
        fontWeight: 'bold'
    },
    registerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    modalContent: {
        width: '85%',
        backgroundColor: BACKGROUND_COLOR,
        padding: 20,
        borderRadius: 12,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 6,
    },
    modalText: {
        fontSize: 16,
        color: TEXT_COLOR,
        textAlign: 'center',
        marginBottom: 15,
    },
    modalButton: {
        backgroundColor: BUTTON_COLOR,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 6,
        marginTop: 10,
    },
    modalButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    },
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        borderWidth: 1,
        borderColor: PRIMARY_COLOR,
        backgroundColor: SECONDARY_COLOR,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
        marginBottom: 15,
    },
    imageCard: {
        height: 80,
        width: 80,
        borderRadius: 10,
    },
    iconContainer: {
        flex: 1,
        alignItems: 'flex-end'
    },
    modalProduct: {
        backgroundColor: BACKGROUND_COLOR,
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 6
    },
    modalHeader: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        padding: 10
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: TEXT_COLOR
    },
    modalImage: {
        width: 160,
        height: 160,
        alignSelf: 'center',
        marginVertical: 12
    },
    textQuantity: {  
        fontSize: 16,
        fontWeight: 'bold',
        color: TEXT_COLOR,
        textAlign: 'center',
        marginTop: 5
    },
    textIconCar: {
        backgroundColor: 'white',
        paddingHorizontal: 10,
        borderRadius: 10,
        fontSize: 13,
        fontWeight: 'bold',
        color: BUTTON_COLOR,
    },
    titlePrincipal: {
        fontSize: 22,
        fontWeight: 'bold',
        color: TEXT_COLOR,
        textAlign: 'center',
        marginBottom: 12,
    },
    formContainer: {
        marginVertical: 15,
        paddingHorizontal: 20,
    },
    headerContainer: {  
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 12,
        backgroundColor: PRIMARY_COLOR,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    textRedirect: {  
        color: BUTTON_COLOR,
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 18,
        textAlign: 'center'
    },
    headerTable: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textHeaderTable: {
        fontWeight: 'bold',
        color: TEXT_COLOR
    },
    totalContainer: {
        alignItems: 'flex-end',
        paddingTop: 15,
        paddingBottom: 10,
        paddingHorizontal: 10
    },
    textTotal: {
        fontSize: 18,
        fontWeight: 'bold',
        color: TEXT_COLOR
    },
    buttonAddCart: {
        backgroundColor: BUTTON_COLOR,
        alignItems: 'center',
        paddingVertical: 12,
        borderRadius: 8,
        marginTop: 15
    },
    mainTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 20,
    },
    welcomeText: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#FFA500', 
        textAlign: 'center',
        marginBottom: 10,
    },
    cartIconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: PRIMARY_COLOR,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 4,
    },
    counterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    counterButton: {
        backgroundColor: PRIMARY_COLOR,
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 10,
    },
    counterText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    counterNumber: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    emptyCartText: {
        fontSize: 16,
        color: '#999',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    },
    disabledButton: {
        backgroundColor: '#B0B0B0', 
        opacity: 0.6,
    },
    cartItemActions: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 10,
    },
    decreaseButton: {
        backgroundColor: '#FFA500',
        padding: 8,
        borderRadius: 5,
        alignItems: 'center',
    },
    decreaseText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    deleteButton: {
        backgroundColor: 'red',
        padding: 8,
        borderRadius: 5,
        alignItems: 'center',
    },
    quantityText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: TEXT_COLOR,
        marginHorizontal: 10,
    },
    buttonBuy: {
        backgroundColor: BUTTON_COLOR,
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 15,
    },
    buttonBuyText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    buttonAddCartText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    emptyCartMessage: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#999',
        textAlign: 'center',
        marginTop: 20,
    },
    cartItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    cartItemInfo: {
        flexDirection: 'column',
        flex: 1,
        marginLeft: 10,
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: TEXT_COLOR,
    },
    productPrice: {
        fontSize: 14,
        color: '#777',
    },
    productTotal: {
        fontSize: 16,
        fontWeight: 'bold',
        color: BUTTON_COLOR,
    },
});

