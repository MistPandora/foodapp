import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Recipes(props) {

    return (
        <TouchableOpacity onPress={() => props.goToDetailedPage(props.name)}>
            <View style={styles.container} backgroundColor={props.color}>
                <View style={styles.imgWrapper}>
                    <Image
                        style={styles.img}
                        source={props.imgSrc}
                    />
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.name}>{props.name}</Text>
                    <Text style={styles.desc}>{props.desc}</Text>
                </View>
            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-end',
        height: 270,
        width: 160,
        margin: 5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 55,
        borderBottomLeftRadius: 75,
        borderBottomRightRadius: 20,
    },
    imgWrapper: {
        height: '40%',
        width: '100%',
        marginTop: 25,
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    textContainer: {
        alignItems: 'flex-end',
        width: '100%',
        paddingRight: 10
    },
    name: {
        color: "#614b70",
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: "right",
        marginTop: 20,
        marginBottom: 5,
        paddingLeft: 5
    },
    desc: {
        color: "#95979a",
        textAlign: "right",
        paddingLeft: 15
    }
})