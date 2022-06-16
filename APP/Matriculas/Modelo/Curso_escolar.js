import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, TextInput, TouchableOpacity,
  Button } from 'react-native';


  export default class Curso_escolar extends React.Component
  {
    constructor (ops)
    {
      super(ops)
      //Aquí definimos las variables para la tabla curso_escolar de la Base
      //MatriculasAPI
      //
      this.state = 
      {
        TextInput_id:"",
        TextInput_ano_inicio:"",
        TextInput_ano_fin:""
        
      }
    }

    //Ahora creamos las funciones para esta clase Persona
    InsertarCursoEscolar = () =>
    {
      //Vamos a consumir la API: APIMatriculas
      //https://localhost:44351/Api/CursoEscolar
      fetch('https://localhost:44351/Api/CursoEscolar', 
      {
        method: 'POST',
        headers:
        {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },

        body: JSON.stringify (
          {
            TextInput_id:"",
            TextInput_ano_inicio:"",
            TextInput_ano_fin:""
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
  
ActualizarCursoEscolar = () =>
{
  //En esta función invocamos el EndPoint o el método de la API
  // para Actualizar
  //
  fetch(
    'https://localhost:44351/Api/CursoEscolar',
    {
        method: 'PUT',
        headers:
        {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
        {
            TextInput_id:"",
            TextInput_ano_inicio:"",
            TextInput_ano_fin:""                
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

  BorrarCursoEscolar = () =>
  {
    //Invocamos el EndPoint desde la API para borrar persona en la DB.
    fetch
    (
      'https://localhost:44351/Api/CursoEscolar',
      {
          method: 'DELETE',
          headers:
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',             
          },
          body: JSON.stringify(
            {
            curso_id: this.state.TextInput_id
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

ListarTodasCursoEscolar = () =>
{
    //La siguiente función nos devuelve todos los registros de la DB
    fetch
    (
      'https://localhost:44351/Api/CursoEscolar',
      {
          method: 'GET',
          headers:
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json', 
          },
          body: JSON.stringify(
            {
                TextInput_id:"",
                TextInput_ano_inicio:"",
                TextInput_ano_fin:""     
            }
          )
      }
    ).then((response) => response.json())
    .then((responseJson) =>
    {
      this.state(
        {
      TextInput_id: responseJson[0]['id'],
      TextInput_nif: responseJson[0]['ano_inicio'],
      TextInput_nombre: responseJson[0]['ano_fin'],
      
        }
      )
    }
    )
}

ListarCursoEscolarxId = () =>
{
    //La siguiente función nos devuelve todos los registros de la DB
    fetch
    (
      'https://localhost:44351/Api/CursoEscolar',
      {
          method: 'GET',
          headers:
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json', 
          },
          body: JSON.stringify(
            {
              curso_id: this.state.TextInput_id  
            }
          )
      }
    ).then((response) => response.json())
    .then((responseJson) =>
    {
      this.state(
      { 
        TextInput_id: responseJson[0]['id'],
        TextInput_nif: responseJson[0]['ano_inicio'],
        TextInput_nombre: responseJson[0]['ano_fin']
        
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
        placeholder="Id" 
        onChangeText ={TextInputValue => this.setState(
            {
              TextInput_id: TextInputValue
            })}
            underlineColorAndroid= 'transparent'
            style={MisEstilos.TextInputStyleClass}
            value= {this.state.TextInput_id}
        >
        </TextInput>
       
      </View>
      <TextInput
        placeholder="año inicio"
        onChangeText={TextInputValue => this.setState(
          {
            TextInput_nombre: TextInputValue
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

      <TextInput
        placeholder="año fin"
        onChangeText={TextInputValue => this.setState(
          {
            TextInput_apellido1: TextInputValue
          }
        )}
          underlineColorAndroid='transparent'
          style={MisEstilos.TextInputStyleClass}
          value={this.state.TextInput_apellido1}
          autoFocus={true}
      >
      </TextInput>
      
      </View>
      

      

      <View style={ {flexWrap:'wrap',flexDirection:'row',backgroundColor:"white",marginTop:20}}>

      <TextInput
        placeholder="fechanto"
        onChangeText={TextInputValue => this.setState(
          {
            TextInput_fecha_nacimiento: TextInputValue
          }
        )}
          underlineColorAndroid='transparent'
          style={MisEstilos.TextInputStyleClass}
          value={this.state.TextInput_fecha_nacimiento}
          autoFocus={true}
      >
      </TextInput>        
      
      </View>
        

      <TouchableOpacity
        activeOpacity={0.4}
        style={MisEstilos.TouchableOpacityStyle}
        onPress={this.InsertarCursoEscolar}
      >
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.4}
        style={MisEstilos.TouchableOpacityStyle}
        onPress={this.ActualizarCursoEscolar}
      >
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.4}
        style={MisEstilos.TouchableOpacityStyle}
        onPress={this.BorrarCursoEscolar}
      >
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.4}
        style={MisEstilos.TouchableOpacityStyle}
        onPress={this.ListarCursoEscolarxId}
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
