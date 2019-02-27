import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  refereeEntry: {
    flex: 1,
    width: width - 40,
    height: 100,
    borderBottomColor: '#dcdcdc',
    borderBottomWidth: 0.5,
    marginVertical: 10,
    // backgroundColor: 'red',
    flexDirection: 'row',
    paddingVertical: 13,
  },
  imageContainer: {
    flex: 2,
    borderRadius: 5,
    // backgroundColor: 'blue',
  },
  bodyContainer: {
    flex: 3,
    // backgroundColor: 'green',
    color: '#333',
  },
  titleText: { fontSize: 20, fontWeight: 'bold' },
  descriptionText: { fontSize: 13, marginTop: 5 },
  stateText: { fontSize: 15, fontWeight: 'bold', marginTop: 5 },
});

export default styles;
