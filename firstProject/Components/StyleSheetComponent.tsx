/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';

export default function StyleSheetComponent () : JSX.Element {

  const [mode, setMode] = React.useState(0);
  const toggleMode = () =>{
    if (mode === 0)
    {
        setMode(1);
    }
    else {
        setMode(0);
    }
  };
  return (
      <View style={styles.container}>
        <Text style={mode === 0 ? styles.whiteText : styles.darkText}>
          Hello World
        </Text>
        <Button
          title="Increment"
          color="#841584"
          onPress={toggleMode}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: '#FFFFFF',
    backgroundColor : '#000000',
  },
  darkText: {
    color: '#000000',
    ackgroundColor : '#FFFFFF',
  },
});
