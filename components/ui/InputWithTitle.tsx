import {StyleSheet, Text, TextInput, TextInputProps, View, ViewStyle} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {GlobalStyles} from '../../constants/theme';

type Props = {
  style?: ViewStyle
  textInputProps?: TextInputProps
}

const InputWithTitle = ({children, textInputProps, style}: PropsWithChildren<Props>) => {
  const inputStyles: ViewStyle[] = [styles.inputField];

  if (textInputProps && textInputProps.multiline) {
    inputStyles.push(styles.multiline);
  }
  if (style) inputStyles.push(style);

  return (
    <View style={styles.inputContainer} >
      <Text style={styles.titleText}>{children}</Text>
      <TextInput style={inputStyles} {...textInputProps}/>
    </View>
  );
}

export default InputWithTitle;

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    marginHorizontal: GlobalStyles.spacing.sm,
    alignItems: 'center'
  },
  titleText: {
    ...GlobalStyles.typography.heading,
    paddingLeft: GlobalStyles.spacing.sm,
    fontWeight: 'bold',
    alignSelf: 'flex-start'
  },
  inputField: {
    width: '100%',
    padding: GlobalStyles.spacing.md,
    marginHorizontal: GlobalStyles.spacing.sm,
    marginVertical:GlobalStyles.spacing.md,
    backgroundColor: GlobalStyles.colors.primaryContainer,
    color: GlobalStyles.colors.onPrimaryContainer,
    borderRadius: GlobalStyles.borderRadius.md
  },
  multiline: {
    minHeight: 100,
    textAlignVertical: 'top'
  }
});