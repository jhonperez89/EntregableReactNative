import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, TextInput, TouchableOpacity,
  Button } from 'react-native';


  export default class Alumno_se_matricula_asignatura extends React.Component
  {
    constructor (ops)
    {
      super(ops)
      //Aquí definimos las variables para la tabla Grado de la Base
      //MatriculasAPI
      //
      this.state = 
      {
        TextInput_id_alumno:"",
        TextInput_id_asignatura:"",
        TextInput_id_curso_escolar:"",
        
        
      }
    }

    //Ahora creamos las funciones para esta clase Persona
    InsertarAlumno = () =>
    {
      //Vamos a consumir la API: APIMatriculas
      //https://localhost:44351/Api/Alumno_se_matricula_asignatura
      fetch('https://localhost:44351/Api/Alumno_se_matricula_asignatura', 
      {
        method: 'POST',
        headers:
        {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },

        body: JSON.stringify (
          {
            alumno_id: this.state.TextInput_id_alumno,
            asignatura_id: this.state.TextInput_id_asignatura,
            curso_escolar_id: this.state.TextInput_id_curso_escolar
          
            
          }
        ) // Los datos a consumir y a enviar a la DB
       }
       ).then((response) => response.json())
       .then((responseJson) => 
        {
            alert(responseJson);    
        }).catch((error) => 
        {
            console.error(error);
        }
        );
    }
  
ActualizarAlumno = () =>
{
  //En esta función invocamos el EndPoint o el método de la API
  // para Actualizar
  //
  fetch(
    'https://localhost:44351/Api/Alumno_se_matricula_asignatura',
    {
        method: 'PUT',
        headers:
        {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
        {
            alumno_id: this.state.TextInput_id_alumno,
            asignatura_id: this.state.TextInput_id_asignatura,
            curso_escolar_id: this.state.TextInput_id_curso_escolar
        }
        )
         
                  
    }
  ).then((response) => response.json())
    .then((responseJson) =>
    {
      alert('El registro ha sido actualizado');
    }
    ).catch((error) => 
      {
        console.error(error);
      }
    )
  }

  BorrarAlumno = () =>
  {
    //Invocamos el EndPoint desde la API para borrar persona en la DB.
    fetch
    (
      'https://localhost:44351/Api/Alumno_se_matricula_asignatura',
      {
          method: 'DELETE',
          headers:
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',             
          },
          body: JSON.stringify(
            {
                alumno_id: this.state.TextInput_id_alumno,
                asignatura_id: this.state.TextInput_id_asignatura,
                curso_escolar_id: this.state.TextInput_id_curso_escolar
            }
          )
      }   
    ).then((response) => response.json())
      .then((responseJson) => 
      {
        alert('El registro ha sido borrado con éxito');
      }
      ).catch((error) => 
      {
        console.error(error);
      }
      )
  }

ListarTodasLosAlumnos = () =>
{
    //La siguiente función nos devuelve todos los registros de la DB
    fetch
    (
      'https://localhost:44351/Api/Alumno_se_matricula_asignatura',
      {
          method: 'GET',
          headers:
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json', 
          },
          body: JSON.stringify(
            {
                alumno_id: this.state.TextInput_id_alumno,
                asignatura_id: this.state.TextInput_id_asignatura,
                curso_escolar_id: this.state.TextInput_id_curso_escolar
              
                
            }
          )
      }
    ).then((response) => response.json())
    .then((responseJson) =>
    {
      this.state(
        {
            TextInput_id_alumno: responseJson[0]['id_alumno'],
            TextInput_id_asignatura: responseJson[0]['id_asignatura'],
            TextInput_id_curso_escolar: responseJson[0]['id_curso_escolar']
      
        }
      )
    }
    )
}

ListarAlumnoxId = () =>
{
    //La siguiente función nos devuelve todos los registros de la DB
    fetch
    (
      'https://localhost:44351/Api/Alumno_se_matricula_asignatura',
      {
          method: 'GET',
          headers:
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json', 
          },
          body: JSON.stringify(
            {
                alumno_id: this.state.TextInput_id_alumno,
                asignatura_id: this.state.TextInput_id_asignatura,
                curso_escolar_id: this.state.TextInput_id_curso_escolar  
            }
          )
      }
    ).then((response) => response.json())
    .then((responseJson) =>
    {
      this.state(
      { 
        TextInput_id_alumno: responseJson[0]['id_alumno'],
            TextInput_id_asignatura: responseJson[0]['id_asignatura'],
            TextInput_id_curso_escolar: responseJson[0]['id_curso_escolar']
       
        
      }
      )
    }
    )
} //Llave de la función ListarPersonaxId

//A continuación vamos a crear la estructura de la vista

render()
{
  return (
    <View style= {MisEstilos.MainContainer}>
      <Text style = {{fontSize: 20, textAlign: 'center', marginBottom: 7}}>
          Registro de personas
      </Text>
      <View style={ {flexWrap:'wrap',flexDirection:'row',backgroundColor:"white",marginTop:20}}>
        <TextInput
        placeholder="Id_alumno" 
        onChangeText ={TextInputValue => this.setState(
            {
                TextInput_id_alumno: TextInputValue
            })}
            underlineColorAndroid= 'transparent'
            style={MisEstilos.TextInputStyleClass}
            value= {this.state.TextInput_id}
        >
        </TextInput>
        
      </View>
      <TextInput
        placeholder="id_asignatura"
        onChangeText={TextInputValue => this.setState(
          {
            TextInput_id_asignatura: TextInputValue
          }
        )}
          underlineColorAndroid='transparent'
          style={MisEstilos.TextInputStyleClass}
          value={this.state.TextInput_nombre}
          autoFocus={true}
      >
      </TextInput>

      <TextInput
        placeholder="id_curso_escolar"
        onChangeText={TextInputValue => this.setState(
          {
            TextInput_id_curso_escolar: TextInputValue
          }
        )}
          underlineColorAndroid='transparent'
          style={MisEstilos.TextInputStyleClass}
          value={this.state.TextInput_nombre}
          autoFocus={true}
      >
      </TextInput>
      
      <View style={ {flexWrap:'wrap',
      flexDirection:'row',
      backgroundColor:"green",marginTop:20}}>
      </View>

      
      
      

      

      
         

      <TouchableOpacity
        activeOpacity={0.4}
        style={MisEstilos.TouchableOpacityStyle}
        onPress={this.InsertarGrado}
      >
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.4}
        style={MisEstilos.TouchableOpacityStyle}
        onPress={this.ActualizarGrado}
      >
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.4}
        style={MisEstilos.TouchableOpacityStyle}
        onPress={this.BorrarGrado}
      >
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.4}
        style={MisEstilos.TouchableOpacityStyle}
        onPress={this.ListarGradoxId}
      >
      </TouchableOpacity>        
    </View>

  );
}

}  //Llave que cierra la clase principal


const MisEstilos = StyleSheet.create(
  {
    MainContainer:
    {
        alignItems: 'center',
        flex: 1,
        paddingTop: 30,
        backgroundColor: '#fff'
    },
    TextInputStyleClass:
    {
      textAlign: 'center',
      width: '50%',
      marginBottom: 7,
      height: 40,
      borderWidth: 1,
      borderColor: '#FF5722',
      borderRadius: 5,
    },
    TouchableOpacityStyle:
    {
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 5,
      marginBottom: 7,
      width: '90%',
      backgroundColor: '#08BCD4'
    },
    TextStyle:
    {
      color: '#fff',
      textAlign: 'center',
    },
    rowViewContainer:
    {
      fontSize: 20,
      paddingRight: 10,
      paddingTop: 10,
      paddingLeft: 10,
      paddingBottom: 10,
    },
  });