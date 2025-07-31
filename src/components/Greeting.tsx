import React, { FC } from 'react';
import { View, StyleSheet,Text } from 'react-native';

interface Props {}

const Greeting: FC<Props> = () => {
  return <View style={styles.container}>
            <Text> Hello Typescript Greeting CI/DC React Native</Text>
         </View>
};

const styles = StyleSheet.create({
 container:{},
});

export default Greeting;
