import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';

// import { StatusBar } from 'expo-status-bar';

import { Constants } from 'expo';
// import { NativeRoutes } from 'react-router-native';
// import { Navigation } from 'react-router-navigation';
// import { Redirect } from 'react-router';
// import { NativeRoute } from 'react-router-native';

// import { Audio } from 'expo-av';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
import Images from './components/Images';
import Recorder from './components/Recorder';
import Player from './components/Player';
import MyList from './components/MyList';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <>
          <NativeRoutes>
            <NativeRoute path="/" element={<Images />} />
            <NativeRoute path="MyList" element={<MyList />} />
            <NativeRoute path="Recorder" element={<Recorder />} />{' '}
          </NativeRoutes>
        </>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  //container: {
  //   flex: 1,
  //   // justifyContent: 'center',
  //   backgroundColor: '#FDE5EC',
  //   // padding: 8,
  //},
});
