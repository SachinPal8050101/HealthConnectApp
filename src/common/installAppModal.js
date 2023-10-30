import {Button, Linking, Modal, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Constant from './constant';

const ShowHealthAppInstallModal = () => {
  const installHealthConnectApp = () => {
    Linking.openURL(Constant.ANDROID_APP_URL).catch(exception =>
      console.log('An error occured'),
    );
  };

  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              To continue please install health connect app
            </Text>

            <Button
              title="Install Health Connect App"
              onPress={installHealthConnectApp}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 25,
  },
});

export default ShowHealthAppInstallModal;
