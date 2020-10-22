import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { useAuth } from "../contexts/auth";

export default function SignIn() {
  const {signed, signIn, user} = useAuth();
  console.log(signed);
  console.log(user);


  async function handleSignIn() {
    const response = await signIn();
    console.log(response);
  }
  return (
    <View style={styles.container}>
      <Button title="Login" onPress={ handleSignIn }></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
})