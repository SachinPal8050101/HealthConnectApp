import {View, Text, NativeModules} from 'react-native';
import React, {useEffect} from 'react';

const {HealthConnectModule} = NativeModules;

const App = () => {
  useEffect(() => {
    HealthConnectModule.CustomeFun((err, name) => {
      console.log(name); // Outputs: Sachin
    });
  }, []);
  return (
    <View>
      <Text>App---</Text>
    </View>
  );
};

export default App;
