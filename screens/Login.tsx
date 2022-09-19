import React from 'react'
import { View, StyleSheet, StatusBar} from 'react-native'
import { CustomButton } from '../components/button/CustomButtons'
import Header from '../components/login/Header'

export const Login = ({navigation}) => {
  return (
    <View style={styles.buttonContainer}>
        <StatusBar barStyle='light-content' />
        <Header />
        <View style={styles.button}>
        {/* login */}
            <CustomButton
                text='Sign in'
                buttonContainerStyle={{
                    paddingVertical: 20,
                    borderRadius: 10,
                }}
                colors={['#42b883','#35495e']}
                onPress={() => navigation.replace('Home')}
            />
        {/* Sign up */}
            <CustomButton
                text='Sign up'
                buttonContainerStyle={{
                    paddingVertical: 20,
                    borderRadius: 10,
                    marginTop: 20,
                    marginBottom: 30,
                    borderColor: '#42b883',
                    borderWidth: 1,
                }}
                colors={['']}
                onPress={() => navigation.replace('Home')}
            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        color: 'white',
        alignSelf: 'center'
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: 380
    }
})