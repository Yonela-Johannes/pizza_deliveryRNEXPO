import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Colors } from '../../constants/Colors';


export const ItemCard  = ({containerStyle, categoryItem, onPress}) => {
  return (
    <TouchableOpacity  activeOpacity={0.9} style={[styles.container, containerStyle]}>
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
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 140,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    // backgroundColor: '#35495e',
    position: 'relative'
  },
  image: {
      width: "100%",
      borderRadius: 10,
      height: "100%",
      // resizeMode: 'center'
    },
    details: {
      alignItems: 'center',
      position: 'absolute',
      paddingHorizontal: 20,
      paddingVertical: 5,
      backgroundColor: Colors.primary,
      width: "100%",
    },
    name:{
      flex: 1,
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold'
    },
});
