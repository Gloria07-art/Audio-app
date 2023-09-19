import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { Audio } from 'expo-av';

export default function Recorder() {
  //  const [recording, setRecording] = React.useState;

  //  async function startRecording(){
  //    try{
  //    console.log('Requesing permissions..');
  //     await Audio.requestPermissionsAsync();
  //     await Audio.setAudioModeAsync({
  //        allowsRecordingsIOs:true,
  //       playsInSilentModeIOs: true,});

  //    console.log('Stopping recording...');
  //   const {recording} = await Audio.Recording.createAsync
  //   (Audio.RecordingOptionsPresets.HIGH_QUALITY);
  //    setRecording(recording);
  //    console.log('Reacording started');
  //   } catch (err) {
  //      console.error('Failed to start recording',
  //     err);
  //    }
  //    }

  //   async function StopRecording (){
  //    console.log('Stopping recording...');
  //    setRecording(undefined);
  //    await recording.stopAndUnloadAsync();
  //    await recording.stopAndUnloadAsync(
  //      {
  //       allowsRecordingsIOs:false,
  //     });
  //    const uri = recording.getURI();
  //    console.log('Reading stopped and stopped at', uri);

  return (
    <View style={styles.container}>
      <View>
        {' '}
        <Text style={styles.timer}> Start Recording</Text>
        <Image
          source={require('../assets/voice-recording.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.mainBottom}>
        <TouchableOpacity>
          <Image
            source={require('../assets/record.png')}
            style={styles.recordImg}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFEEF4',
    paddingBottom: 100,
  },
  mainBottom: {
    marginTop: 200,
    backgroundColor: 'white',
    width: 300,
    height: 90,
    padding: 15,
    borderRadius: 30,
    marginBottom: 0,
    alignItems:'center',
    borderWidth:4,
    borderColor:'#A2678A'
  },

  button: { backgroundColor: 'red', padding: 20, width: 200, borderRadius: 10 },
  txt: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  image: { width: 100, height: 100, marginTop: 40, marginLeft: 60 },
  recordImg: { width: 50, height: 50 },
  timer: {
    margin: 24,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'grey',
    letterSpacing: 3,
    fontFamily: 'Arial',
    marginTop: 100,
  },
});
