import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function MyList() {
  return (
    <View style={styles.main}>
      <Text style={styles.topText}> My audio list</Text>{' '}
      <View style={styles.headDiv}>
        <Text style={styles.audioText}>
          Audio 1{' '}
          <Image source={require('../assets/play.png')} style={styles.image} />
        </Text>
      </View>
      <View style={styles.headDiv}>
        {' '}
        <Text style={styles.audioText}>Audio 2 </Text>
        <TouchableOpacity>
          <Image source={require('../assets/play.png')} style={styles.image} />
        </TouchableOpacity>
      </View>
      <View style={styles.headDiv}>
        <Text style={styles.audioText}>Audio 3 </Text>{' '}
        <TouchableOpacity>
          <Image source={require('../assets/play.png')} style={styles.image} />
        </TouchableOpacity>
      </View>
      <View style={styles.headDiv}>
        <Text style={styles.audioText}>Audio 4 </Text>
        <TouchableOpacity>
          <Image source={require('../assets/play.png')} style={styles.image} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: { justifyContent: 'center', alignItems: 'center' },
  headDiv: {
    backgroundColor: '#FFEEF4',
    marginBottom: 10,
    width: 220,
    height: 60,
    alignItems: 'center',
    borderWidth: 4,
    padding: 7,
    borderColor: '#4D3C77',
    borderTopColor: '#A2678A',
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 30,
  },
  image: { width: 20, height: 20, marginLeft: 40 },
  topText: {
    margin: 24,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'grey',
    letterSpacing: 3,
    fontFamily: 'Arial',
    marginTop: 20,
  },
  audioText: {
    fontSize: 20,
    fontFamily: 'arial',
    color: '#4D3C77',
    // marginTop: 20,
  },
});
