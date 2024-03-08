import {Image, Keyboard, ScrollView, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import React, {useState} from 'react';
import {GlobalStyles} from '../constants/theme';
import IconButton from '../components/ui/IconButton';
import InputWithTitle from '../components/ui/InputWithTitle';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigationTypes';

type NavProps = NativeStackScreenProps<RootStackParamList, 'ManageCustomer'>

type ManageCustomerProps = {
  navigation: NavProps['navigation'],
  route: NavProps['route'],
  name: string
}
const ManageCustomer = ({navigation, name}: ManageCustomerProps) => {
  const [isPhoto, setIsPhoto] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const closeHandler = () => {
    navigation.goBack();
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex: 1}}>
      <>
        <View style={styles.buttonContainer}>
          <IconButton name={'save'} size={24} onPress={() => {
          }}/>
          <IconButton name={isEdit ? 'trash' : 'close-circle'} size={24} onPress={closeHandler}/>
        </View>
        <ScrollView style={styles.container} contentContainerStyle={{alignItems: 'center'}}>
          <View style={styles.imageContainer}>
            {isPhoto ? <Image/> :
              <IconButton name={'camera'} size={56} onPress={() => console.log('camera')}/>
            }
          </View>
          <InputWithTitle>Name</InputWithTitle>
          <InputWithTitle
            style={{marginBottom: 400}}
            textInputProps={{
              placeholder: 'Pets? Kids? Recent Vacation?',
              multiline: true
            }}>Facts</InputWithTitle>
        </ScrollView>
      </>
    </TouchableWithoutFeedback>
  );
};

export default ManageCustomer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: GlobalStyles.spacing.lg,
    backgroundColor: GlobalStyles.colors.background
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: GlobalStyles.colors.primaryContainer,
    marginBottom: GlobalStyles.spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: GlobalStyles.colors.background,
    paddingHorizontal: GlobalStyles.spacing.lg,
    paddingVertical: GlobalStyles.spacing.sm
  }
});