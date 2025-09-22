import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
export default function App() {
  return (
    <View>
      <Text style={styles.paragraph}>Hello, World 
      const [fullname, setFullname] = useState("Eoin OKennedy");
      </Text>
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
});
