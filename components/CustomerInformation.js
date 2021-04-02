import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CustomerlInformation = () => {
    return (
      <View style={styles.container}>
        <Text>CustomerlInformation</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default CustomerlInformation;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
