/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
// eslint-disable-next-line eslint-comments/no-unused-disable
/* eslint-disable prettier/prettier */

import {View, Text} from 'react-native';
import React, {useState} from 'react';
import * as Yup from 'yup';
// form validation

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should contain minimum 4 characters')
    .max(16, 'Password limit exceeded')
    .required('Length is required'),
});

const App = () => {
  const [password, setPassword] = useState('');
  const [isPassGenerated, setisPassGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {};
  const createPassword = (characters: string, passwordLength: number) => {};
  const resetPasswordState = (characters: string, passwordLength: number) => {};
  return (
    <View>
      <Text>App</Text>
    </View>
  );
};

export default App;
