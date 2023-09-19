import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';



export default function Images() {
  return (
    <View style={styles.container}>
      <View style={styles.headDiv}>
        <Text style={styles.paragraph}>
          {' '}
          Welcome to <br></br>Audio App
        </Text>{' '}
      </View>
      <ImageBackground
        source={require('../assets/22378664_6574814.jpg')}
        style={styles.backImage}
        resizeMode="cover">
        <View style={styles.logoDiv}>
          <Image
            style={styles.logo}
            source={require('../assets/voice-recording.png')}
          />
        </View>
        <View  style={styles.buttonDiv}>
          <TouchableOpacity style={styles.recordButton}>
            <Text style={styles.recordtxt}>Start new recording</Text>{' '}
          </TouchableOpacity>
          <TouchableOpacity style={styles.listButton}>
            <Text style={styles.listtxt}>My audio list</Text>{' '}
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    // justifyContent: 'center',
    // padding: 24,
  },
  headDiv: {
    marginTop: 10,
    marginBottom: -90,
    
  },
  buttonDiv: { alignItems: 'center', justifyContent: 'center' },

  paragraph: {
    margin: 24,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'grey',
    letterSpacing: 3,
    fontFamily: 'Arial',
  },

  recordtxt: { fontSize: 20, fontFamily: 'arial', color: '#4D3C77' },

  listtxt: { fontSize: 20, fontFamily: 'arial', color: 'white' },

  backImage: {
    width: 300,
    height: 470,
    opacity: 0.8,
    marginTop: 100,
    marginLeft: 16,
  },
  // paragraph: {
  //   margin: 24,
  //   marginTop: 0,
  //   fontSize: 14,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  // },

  logoDiv: {
    backgroundColor: 'white',
    height: 130,
    width: 130,
    marginTop: 90,
    marginLeft: 90,
    paddingLeft: 13,
    borderRadius: 100,
    paddingTop: 15,
    borderWidth: 4,
    borderColor: '#4D3C77',
  },
  logo: {
    height: 100,
    width: 100,
  },

  recordButton: {
    width: 250,
    borderWidth: 4,
    padding: 7,
    borderColor: '#4D3C77',
    borderTopColor: '#A2678A',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    backgroundColor: 'white',
    paddingRight: 0,
  },

  listButton: {
    width: 180,
    borderWidth: 4,
    padding: 5,
    borderColor: '#4D3C77',
    borderTopColor: '#A2678A',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#4D3C77',
  },
});
