import { StyleSheet, Text, View, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require("../assets/images/home.jpg")}
      />
      <View>
        <Text style={styles.title}>FoodApp</Text>
        <View style={styles.textContainer}>
          <Text style={styles.desc}>Let's go!</Text>
          <FontAwesome style={styles.arrow} name={'arrow-right'} onPress={() => navigation.navigate('DrawerNavigator')} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
    backgroundColor: "#655074",
  },
  img: {
    width: "100%",
    height: "75%",
    borderBottomLeftRadius: 160
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 25,
    paddingRight: 25,
    textAlign: 'right',
  },

  textContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: "center",
    marginTop: 25,
    paddingRight: 25,
  },
  desc: {
    color: "#fff",
    fontSize: 22,
    fontWeight: 'bold'
  },
  arrow: {
    color: "#fff",
    fontSize: 22,
    fontWeight: 100,
    marginLeft: 25
  }
});
