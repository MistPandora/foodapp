import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addBookmarkToStore, removeBookmarkToStore } from '../reducers/favorites';
import { useRoute } from '@react-navigation/native';
import { Ionicons, AntDesign, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ingredients from '../components/Ingredients';



export default function RecipeScreen({ navigation }) {

  const dispatch = useDispatch();
  const route = useRoute();

  const [nbPerson, setNbPerson] = useState(1);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const recipesData = require('../data/recipes');
  const bookmarkedRecipes = useSelector(state => state.favorites.value)

  const thisRecipe = recipesData.recipes.find(recipe => recipe.name == route.params);

  const bookmarkName = bookmarkedRecipes.includes(thisRecipe.id) ? "bookmark" : "bookmark-outline"

  const ingredientsElements = thisRecipe.ingredients.map((e, i) => {
    const ingredientName = e.name;
    const amount = e.amount;
    const unit = e.unit;
    const ingredient = { ingredientName, amount, unit }

    return <Ingredients key={i} nbPerson={nbPerson} {...ingredient} />

  })

  const handleBookmarkClick = () => {
    if (bookmarkedRecipes.includes(thisRecipe.id)) {
      dispatch(removeBookmarkToStore(thisRecipe.id))
      setIsBookmarked(false);
    } else {
      dispatch(addBookmarkToStore(thisRecipe.id))
      setIsBookmarked(true);
    }

  }

  return (
    <SafeAreaView style={styles.container}>

      <TouchableOpacity style={styles.bookmarkBtn} onPress={() => handleBookmarkClick()}>
        <Ionicons name={bookmarkName} style={styles.bookmarkIcon} />
      </TouchableOpacity>

      <View style={styles.topPart} backgroundColor={thisRecipe.color}>
        <AntDesign name="arrowleft" style={styles.arrowLeft} onPress={() => navigation.goBack()} />
        <View style={styles.imgWrapper}>
          <Image
            style={styles.img}
            source={thisRecipe.image}
          />
        </View>
      </View>

      <View style={styles.bottomPartBg} backgroundColor={thisRecipe.color}>
        <View style={styles.bottomPart}>

          <View style={styles.bottomHeader}>
            <View style={styles.headerItemsContainer}>
              <MaterialCommunityIcons name="gauge" size={24} color={thisRecipe.color} />
              <Text style={{ color: '#393d40' }}>{thisRecipe.level}</Text>
            </View>
            <View style={styles.headerItemsContainer}>
              <Ionicons name="timer-sharp" size={24} color={thisRecipe.color} />
              <Text style={{ color: '#393d40' }}>{thisRecipe.time}</Text>
            </View>
            <View style={styles.headerItemsContainer}>
              <FontAwesome name="star-o" size={24} color={thisRecipe.color} />
              <Text style={{ color: '#393d40' }}>{thisRecipe.rating}</Text>
            </View>
          </View>

          <Text style={styles.recipeName}>{thisRecipe.name}</Text>
          <Text style={styles.longDesc}>{thisRecipe.longDesc}</Text>


          <View style={styles.counterContainer}>

            <View style={styles.counterTextContainer}>
              <Text style={styles.ingredientsText}>Ingredients</Text>
              <Text style={styles.ingredientsSubtitle}>How many servings?</Text>
            </View>

            <View style={styles.pill}>
              <TouchableOpacity style={styles.pillMinus} onPress={() => nbPerson > 1 && setNbPerson(nbPerson - 1)}>
                <Entypo name="minus" size={24} color="#393d40" />
              </TouchableOpacity>

              <Text style={styles.pillCounter}>{nbPerson}</Text>

              <TouchableOpacity style={styles.pillPlus} onPress={() => setNbPerson(nbPerson + 1)}>
                <Entypo name="plus" size={24} color="#393d40" />
              </TouchableOpacity>
            </View>
          </View>

          <ScrollView contentContainerStyle={styles.scrollView}>
            {ingredientsElements}
          </ScrollView>



        </View>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: "#fff",
    alignItems: 'flex-end',
    flex: 1,
    width: '100%',
    height: '100%'
  },
  scrollView: {
    width: '100%',
    paddingHorizontal: 20
  },
  topPart: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    height: "35%",
    paddingHorizontal: 25,
    borderBottomLeftRadius: 120
  },
  bottomPartBg: {
    width: "100%",
    height: "60%",
    backgroundColor: '#ffeb85',
  },
  bottomPart: {
    width: "100%",
    height: "100%",
    backgroundColor: '#fff',
    borderTopRightRadius: 120
  },
  bookmarkBtn: {
    position: 'absolute',
    zIndex: 1000,
    top: '32%',
    right: '7%',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: '#655074',

  },
  bookmarkIcon: {
    color: '#fff',
    fontSize: 28
  },

  imgWrapper: {
    height: '75%',
    width: '100%',
    marginTop: -25,
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  arrowLeft: {
    position: 'absolute',
    zIndex: 1000,
    top: 50,
    left: 15,
    fontSize: 26,
    color: '#614b70',
  },
  bottomHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 55,
    paddingHorizontal: 40
  },
  headerItemsContainer: {
    alignItems: 'center',
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 140,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 15
  },
  pillCounter: {
    fontSize: 18,
    color: '#393d40'
  },
  recipeName: {
    fontSize: 32,
    color: '#393d40',
    marginTop: 25,
    paddingHorizontal: 15
  },
  longDesc: {
    paddingHorizontal: 15,
    color: '#393d40',
  },
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 25,
    marginTop: 20,
  },

  ingredientsText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#393d40'
  },
  ingredientsSubtitle: {
    fontSize: 16,
    color: '#9b9b9b',
    marginBottom: 25
  },
});
