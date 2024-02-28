import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Ingredients(props) {


    return (
        <View style={styles.container} backgroundColor={props.color}>
            <Text style={styles.ingredientDesc}>{props.ingredientName}</Text>
            <Text style={styles.ingredientDesc}>{props.amount * props.nbPerson} {props.unit}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        width: '100%',

    },
    ingredientDesc: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ababab'
    }

})