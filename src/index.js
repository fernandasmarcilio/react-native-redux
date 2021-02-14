import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, SafeAreaView, Platform } from 'react-native';

import Routes from './routes';

const App = () => (
  <>
    <StatusBar barStyle="dark-content" backgroundColor="#f3f3f3" />
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: '#fefefe',
      }}
    >
      <Routes />
    </SafeAreaView>
  </>
);

export default App;
