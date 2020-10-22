import React from 'react';

import { createStackNavigator }from '@react-navigation/stack'


const {Navigator, Screen} = createStackNavigator();

import OrphanagesMap from '../pages/OrphanagesMap'
import OrphanageDetails from '../pages/OrphanageDetails'
import OrphanageData from '../pages/CreateOrphanage/OrphanageData'
import SelectMapPosition from '../pages/CreateOrphanage/SelectMapPosition'
import Header from '../components/Header';

export default function AppRoutes() {
  return (
    <Navigator screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: "#f2f3f5"}
    }}>
      <Screen
        name="OrphanagesMap"
        component={OrphanagesMap}
      />

      <Screen
        name="OrphanageDetails"
        component={OrphanageDetails}
        options={{
          headerShown: true,

          header: () => <Header title="Orfanato" showCancel={false} />
        }}
      />

      <Screen
        name="SelectMapPosition"
        component={SelectMapPosition}
        options={{
          headerShown: true,
          header: () => <Header title="Selecione no mapa" />
        }}
      />

      <Screen
        name="OrphanageData"
        component={OrphanageData}
        options={{
          headerShown: true,
          header: () => <Header title="Informe os dados" />
        }}
      />

    </Navigator>
  )
}