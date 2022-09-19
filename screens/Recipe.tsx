import { StyleSheet, Text, View } from 'react-native';

export const Recipe = () => {
  return (
    <View style={styles.container}>
        <Text>Recipe Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
