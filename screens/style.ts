import { StyleSheet} from 'react-native';
import { Colors } from '../constants/Colors';


export const styles = StyleSheet.create({
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