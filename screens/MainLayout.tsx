import { View, StyleSheet, SafeAreaView} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { CategoryCard } from '../components/card/CategoryCard'
import { dummieData } from '../constants/Colors'
import { Home } from './Home'


export const MainLayout = () => {
  const navigation = useNavigation()
  
  return (
    <SafeAreaView style={styles.container}>

      <Home />
      {/* <FlatList
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
      /> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  }

})