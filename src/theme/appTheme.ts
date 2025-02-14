import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    titleCard: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    loginImage: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    
    loginSubtitle: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        marginBottom: 10,
    },
    forgotPassword: {
        marginTop: 10,
        alignSelf: 'flex-end',
    },
    
    registerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    
    
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#FFF8DC',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 2,
        marginBottom: 15
    },
    
    imageCard: {
        height: 70,
        width: 70,
        borderRadius: 10,
    },
    iconContainer: {
        flex: 1,
        alignItems: 'flex-end'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    modalProduct: {
        backgroundColor: '#FFF8DC',
        padding: 20,
        borderRadius: 7,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
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
        color: '#333'
    },
    modalImage: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginVertical: 10
    },
    textQuantity: {  
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginTop: 5
    },
    textIconCar: {
        backgroundColor: 'white',
        paddingHorizontal: 8,
        borderRadius: 10,
        fontSize: 12,
        fontWeight: 'bold',
        color: '#FFC107',
    },
    titlePrincipal: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 10,
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
        paddingVertical: 10,
        backgroundColor: '#FFC107',
    },
    textRedirect: {  
        color: '#FFC107',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center'
    },
    headerTable: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textHeaderTable: {
        fontWeight: 'bold',
        color: '#333'
    },
    totalContainer: {
        alignItems: 'flex-end',
        paddingTop: 15,
        paddingBottom: 10,
        paddingHorizontal: 10
    },
    textTotal: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    buttonAddCart: {
        backgroundColor: '#FFA500',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 15
    },
    buttonAddCartText: {
        color: 'white',
        fontWeight: 'bold'
    },
});
