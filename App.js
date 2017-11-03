import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import ScarletScreen from './src/screens/ScarletScreen';
// import GrayScreen from './src/screens/GrayScreen';

const App = () => {
  return (
    <ScarletScreen />
  );

  // return (
  //   <View style={styles.container}>
  //     <Text style={styles.welcome}>
  //       Blaarggag!
  //     </Text>
  //   </View>
  // );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});

export default App;
