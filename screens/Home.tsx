import React from 'react'
import { FlatList, View, StyleSheet, Text, Image, StatusBar, TouchableOpacity, TextInput} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
// import { Login } from './screens/Login';
import { MainLayout } from './MainLayout';
import Tabs from '../navigation/Tabs';
import { CategoryCard } from '../components/card/CategoryCard';
// import { Recipe } from './screens/Recipe';
import { AntDesign } from '@expo/vector-icons';
import { Colors, dummieData } from '../constants/Colors';
import { ItemCard } from '../components/Item/ItemCard';

export const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.innerContainer}>
          <StatusBar barStyle='auto' />
          {/* <View style={styles.middleContainer}>
            <TouchableOpacity style={{width: 40, height: 40}}>
              <Image source={require('../img/pizzaOne.jpg')} style={styles.itemsImage} />
            </TouchableOpacity>
            <MaterialIcons name="segment" size={24} color="black" />
          </View> */}
          {/* <View>
            <Text style={styles.header}>
              Pizza
            </Text>            
            <Text style={styles.title}>
              Pizza's
            </Text>
          </View>
          <View style={styles.search}>
              <AntDesign name="search1" size={20} color={Colors.lightGray} />
              <TextInput placeholder='search...' style={styles.input} />
          </View> */}
          <View>
              <Text style={{
                paddingTop: 20,
                paddingHorizontal: 20,
                fontSize: 18,
                fontWeight: '500',
                color: Colors.white,
                letterSpacing: 1
              }}>
                Pizza Menu
              </Text>
              <FlatList
                horizontal={true}
                data={dummieData.pizzas}
                keyboardDismissMode='on-drag'
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
            renderItem={({item}) => <ItemCard
              containerStyle={{
                marginHorizontal: 20,
              }}
              categoryItem={item}

              // onPress={() => navigation.navigate('Recipe', {recipe: item.recipe})}
            />}
              />
          </View>

          <View>
              <Text style={{
                paddingTop: 20,
                paddingHorizontal: 20,
                fontSize: 18,
                fontWeight: '500',
                color: Colors.white,
                letterSpacing: 1
              }}>
                Soft Drinks
              </Text>
              <FlatList
                horizontal={true}
                data={dummieData.softDrinks}
                keyboardDismissMode='on-drag'
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
            renderItem={({item}) => <ItemCard
              containerStyle={{
                marginHorizontal: 20,
              }}
              categoryItem={item}

              // onPress={() => navigation.navigate('Recipe', {recipe: item.recipe})}
            />}
              />
          </View>

        </View>
      </ScrollView>
      <FlatList
        data={dummieData.pizzas}
        keyExtractor={item => item.id}
        keyboardDismissMode='on-drag'
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>

          </View>
        }
        renderItem={({item}) => <CategoryCard
          containerStyle={{
            marginHorizontal: 20,
          }}
          categoryItem={item}

          // onPress={() => navigation.navigate('Recipe', {recipe: item.recipe})}
        />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  innerContainer: {
    width: '100%',
    height: '100%',
    position: 'relative'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    // position: 'absolute',
    top: 0,
    // left: -100,
  },
  middleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20
  },
  itemsImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 500
  },
  header: {
    color: Colors.primary,
      fontSize: 25,
  },
  title: {
    color: Colors.secondary,
    fontSize: 40,
    fontWeight: '500',
    letterSpacing: 2,
  },
  search: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    color: Colors.white,
    fontSize: 16,
    paddingVertical: 2,
    marginHorizontal: 5,
    borderWidth: 1,
    borderBottomColor: Colors.lightGray,
    width: '90%'
  }

});