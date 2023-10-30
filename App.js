import {View, Text, NativeModules, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import ShowHealthAppInstallModal from './src/common/installAppModal';

const {HealthAppModule} = NativeModules;

const App = () => {
  const [isConnectAppInstall, setIsConnectAppInstall] = useState(true);

  const callBack = res => {
    setIsConnectAppInstall(res);
  };
  useEffect(() => {
    HealthAppModule.isPackageInstalled(
      'com.google.android.apps.healthdata',
      callBack,
    );
  }, []);
  return (
    <View style={style.mainView}>
      <Text>App---</Text>
      {!isConnectAppInstall && ShowHealthAppInstallModal()}
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
