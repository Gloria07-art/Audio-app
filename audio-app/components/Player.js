import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { Audio } from 'expo-av';

export default function Player() {
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/Adele_-_Hello.mp3')
    );

    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  return (
    <View style={styles.container}>
      <View>
        <Text> This allows you to paly the audios in assets</Text>
      </View>
      <View>
        {' '}
        <Text style={styles.timer}> 00:00</Text>
        <Image
          source={require('../assets/voice-recording.png')}
          style={styles.image}
        />
      </View>

      <View style={styles.mainBottom}>
        {' '}
        <TouchableOpacity>
          {' '}
          <Image source={require('../assets/play.png')} style={styles.play} />
        </TouchableOpacity>
        <TouchableOpacity>
          {' '}
          <Image source={require('../assets/pause.png')} style={styles.pause} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../assets/bookmark.png')}
            style={styles.save}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FFEEF4',
    paddingBottom: 100,
  },
  mainBottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 200,
    backgroundColor: 'white',
    width: 300,
    height: 60,
    padding: 15,
    borderRadius: 20,
    marginBottom: 0
  },
  image: { width: 100, height: 100, marginTop: 40, marginLeft: 60 },
  timer: {
    margin: 24,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'grey',
    letterSpacing: 3,
    fontFamily: 'Arial',
    marginTop: 100,
  },
  play: { width: 30, height: 30, marginRight: 60 },
  pause: { width: 30, height: 30, marginRight: 60 },
  save: { width: 40, height: 40 },
});
