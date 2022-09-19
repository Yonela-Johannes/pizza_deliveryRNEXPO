import { View, Text, Image, TouchableOpacity , StyleSheet, StatusBar, ImageBackground} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient' 
export default function Header(){
    return (
        <View style={styles.header}>
            <ImageBackground source={require('../../img/phonebg.jpg')} 
                style={{flex: 1, justifyContent: "flex-end", height: '100%', width: '100%'}}
                resizeMode='cover'
                >
                    <Text style={styles.mainTitle}>Delivery Pizza</Text>
                    <Text style={styles.description}>This is the description of the Pizza Delivery app</Text>
                    <LinearGradient
                        start={{x: 0, y: 1}}
                        end={{x:0, y: 0}}
                        colors={['rgba(0,0,0,1)', 'transparent']}
                        style={{height: 200,
                            justifyContent: 'flex-end',
                            paddingHorizontal: 20,
                        }}
                    >
                    </LinearGradient>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: '100%',
    height: '50%'
  },
  mainTitle: {
        fontSize: 50,
        color: 'white',
        alignSelf: 'center',
        fontWeight: 'bold',
  },
  description: {
        fontSize: 20,
        color: 'grey',
        alignSelf: 'center',
  }
  
})
