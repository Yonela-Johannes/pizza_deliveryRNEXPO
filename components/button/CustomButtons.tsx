import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



export const CustomButton = ({text, buttonContainerStyle, colors, onPress}) => {
    if(colors.length > 0){
        return (
          <TouchableOpacity onPress={onPress}>
            <LinearGradient
                        start={{x: 0, y: 0}}
                        end={{x:1, y: 1}}
                        colors={colors}
                        style={{
                            ...buttonContainerStyle
                        }}                
            >
              <Text style={styles.container}>
                  {text}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        );
    }else{
          <TouchableOpacity>
              <Text style={styles.container}>
                  {text}
              </Text>
          </TouchableOpacity>   
    }
}

const styles = StyleSheet.create({
  container: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
