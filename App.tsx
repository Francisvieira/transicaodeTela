
import { NavigationContainer } from '@react-navigation/native';
import * as  React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cliente from './screens/Cliente';
import Home from './screens/Home';
import Contato from './screens/Contato';
import Portifolio from './screens/Portifolio';

//  Empilhar tela 
export default function App() {

  const Pilha = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Pilha.Navigator initialRouteName="Home">

        <Pilha.Screen name="Home" component={Home} options={{headerTitleAlign:'center',headerTintColor:'cyan',headerStyle:{backgroundColor:'lightpurple',}}} />
        <Pilha.Screen name="Cliente" component={Cliente} />
        <Pilha.Screen name="Contato" component={Contato} />
        <Pilha.Screen name="Portifolio" component={Portifolio} />

      </Pilha.Navigator>

    </NavigationContainer>


  );
}

