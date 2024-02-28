import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native';
import Recipes from '../components/Recipes';

export default function SearchScreen({ navigation }) {

  const recipesData = require('../data/recipes');

  const goToDetailedPage = (name) => {
    navigation.navigate('Recipe', name)
  }

  const recipesElements = recipesData.recipes.map((e, i) => {
    const name = e.name;
    const desc = e.desc;
    const imgSrc = e.image;
    const color = e.color;

    const infos = { name, desc, imgSrc, color }

    return <Recipes key={i} {...infos} goToDetailedPage={goToDetailedPage} />

  })

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>What do you want to eat today?</Text>
      <Text style={styles.subtitle}>Our daily healthy meal plans</Text>

      <ScrollView contentContainerStyle={styles.contentContainer}>

        {recipesElements}

      </ScrollView>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#614b70'
  },
  subtitle: {
    fontSize: 16,
    color: '#cccccc',
    marginBottom: 25
  },
  contentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});
