import React from 'react';

import { createStackNavigator }from '@react-navigation/stack'
import SignIn from '../pages/SignIn';


const {Navigator, Screen} = createStackNavigator();


export default function AuthRoutes() {
  return (
      <Navigator screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: "#f2f3f5"}
      }}>
        <Screen
          name="SignIn"
          component={SignIn}
        />

      </Navigator>
  )
}