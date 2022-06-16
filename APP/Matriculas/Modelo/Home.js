import * as React from 'react';
import { View, Text,Button } from 'react-native';

export default function Home( { navigation } ){
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home</Text>  
            <Button title="Ir a persona" onPress={() => navigation.navigate('Persona')}/>
            <Button title="Ir a profesor" onPress={() => navigation.navigate('profesor')}/>
            <Button title="Ir a Grado" onPress={() => navigation.navigate('Grado')}/> 
            <Button title="Ir a Departamento" onPress={() => navigation.navigate('Departamento')}/>
            <Button title="Ir a Curso escolar" onPress={() => navigation.navigate('Curso_escolar')}/>
            <Button title="Ir a Asignature" onPress={() => navigation.navigate('Asignatura')}/>
            <Button title="Ir a Alumno matricula" onPress={() => navigation.navigate('Alumno_se_matricula_asignatura')}/>     
        </View>
    )
}