import React from 'react';
import {useState} from 'react';

import {View, Text, Button, SafeAreaView} from 'react-native';

export const App = () => {
  const [number, setNumber] = useState(0);
  return (
    <SafeAreaView>
      <View>
        <Button
          onPress={() => {
            setNumber(number + 1);
          }}
          title="Increment"
          color="#841584"
        />
        <Text>{number}</Text>
        <Button
          onPress={() => {
            setNumber(number - 1);
          }}
          title="Decrement"
          color="#841584"
        />
      </View>
    </SafeAreaView>
  );
};
