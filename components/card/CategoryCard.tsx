import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export const CategoryCard  = ({containerStyle, categoryItem, onPress}) => {

  console.log(categoryItem)
  return (
    <TouchableOpacity style={[styles.container, containerStyle]}>
        {/* IMAGE */}
        <Image
            source={categoryItem.image}
            resizeMode='cover'
            style={styles.image}
        />

        {/* DETAILS */}
        <View style={styles.details}>
            {/* NAME */}
            <Text style={styles.name}>{categoryItem.name}</Text>
            {/* SERVINGS */}
            <Text style={styles.description}>{categoryItem.duration} | {categoryItem.serving} serving;</Text>
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#35495e',
  },
  image: {
      width: 100,
      height: 100,
      borderRadius: 10,
    },
    details: {
        paddingHorizontal: 20,
        paddingVertical: 5
    },
    name:{
      flex: 1,
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold'
    },
  description: {
    color: 'gray',
    fontSize: 18,
  }
});
