import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
export default function App() {

  const [fullname, setFullname] = useState("Denys Bondarenko");

  return (
    <View>
      <Text style={styles.paragraph}>Hello, World, {fullname}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        onChangeText={text => setFullname(text)} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    margin: 24,
    fontSize: 18,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
