import React from 'react';
import { Text } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import ScarletScreen from './src/screens/ScarletScreen';
import GrayScreen from './src/screens/GrayScreen';

import BlueScreen from './src/screens/BlueScreen';
import MaizeScreen from './src/screens/MaizeScreen';

import BlackScreen from './src/screens/BlackScreen';
import GoldScreen from './src/screens/GoldScreen';

const TabIcon = ({selected, title}) => {
  return (
    <Text style={{color: selected ? 'red' : 'black'}}>{title}</Text>
  );
};

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="tabbar"
          tabs={true}
          tabBarStyle={{backgroundColor: '#fff'}}
        >
          <Scene key="osu" title="OSU" icon={TabIcon}>
            <Scene
              key="scarlet"
              component={ScarletScreen}
              title="Scarlet"
              initial={true}
            />
            <Scene
              key="gray"
              component={GrayScreen}
              title="Gray"
            />
          </Scene>

          <Scene key="um" title="UM" icon={TabIcon}>
            <Scene
              key="blue"
              component={BlueScreen}
              title="Blue"
              initial={true}
            />
            <Scene
              key="maize"
              component={MaizeScreen}
              title="Maize"
            />
          </Scene>

          <Scene key="vu" title="VU" icon={TabIcon}>
            <Scene
              key="black"
              component={BlackScreen}
              title="Black"
              initial={true}
            />
            <Scene
              key="gold"
              component={GoldScreen}
              title="Gold"
            />
          </Scene>
        </Scene>
      </Scene>
    </Router>
  );
};

export default App;
