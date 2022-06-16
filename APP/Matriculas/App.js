import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Modelo/Home';
import Persona from './Modelo/Persona';
import Grado from './Modelo/profesor';
import profesor from './Modelo/profesor';
import Departamento from './Modelo/Departamento';
import Curso_escolar from './Modelo/Curso_escolar';
import Asignatura from './Modelo/Asignatura';
import Alumno_se_matricula_asignatura from './Modelo/Alumno_se_matricula_asignatura';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Ir a prueba"
//         onPress={() => navigation.navigate('Prueba')}
//       />
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Persona" component={Persona} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Grado" component={Grado} />
        <Stack.Screen name="Profesor" component={profesor} />
        <Stack.Screen name="Departamento" component={Departamento} />
        <Stack.Screen name="Asignatura" component={Asignatura} />
        <Stack.Screen name="Curso_escolar" component={Curso_escolar} />
        <Stack.Screen name="Alumno_se_matricula" component={Alumno_se_matricula_asignatura} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;