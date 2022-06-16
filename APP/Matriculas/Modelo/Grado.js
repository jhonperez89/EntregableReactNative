import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, TextInput, TouchableOpacity,
  Button } from 'react-native';


  export default class Grado extends React.Component
  {
    constructor (ops)
    {
      super(ops)
      //Aquí definimos las variables para la tabla Grado de la Base
      //MatriculasAPI
      //
      this.state = 
      {
        TextInput_id:"",
        TextInput_nombre:""
        
        
      }
    }

    //Ahora creamos las funciones para esta clase Persona
    InsertarPersona = () =>
    {
      //Vamos a consumir la API: APIMatriculas
      //https://localhost:44351/Api/Grado
      fetch('https://localhost:44351/Api/Grado', 
      {
        method: 'POST',
        headers:
        {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },

        body: JSON.stringify (
          {
            grado_id: this.state.TextInput_id,
            grado_nombre: this.state.TextInput_nombre
          
            
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
  
ActualizarGrado = () =>
{
  //En esta función invocamos el EndPoint o el método de la API
  // para Actualizar
  //
  fetch(
    'https://localhost:44351/Api/Grado',
    {
        method: 'PUT',
        headers:
        {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
        {
          grado_id: this.state.TextInput_id,
          grado_nombre: this.state.TextInput_nombre
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

  BorrarGrado = () =>
  {
    //Invocamos el EndPoint desde la API para borrar persona en la DB.
    fetch
    (
      'https://localhost:44351/Api/Grado',
      {
          method: 'DELETE',
          headers:
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',             
          },
          body: JSON.stringify(
            {
            Grado_id: this.state.TextInput_id
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

ListarTodasLasGrado = () =>
{
    //La siguiente función nos devuelve todos los registros de la DB
    fetch
    (
      'https://localhost:44351/Api/Grado',
      {
          method: 'GET',
          headers:
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json', 
          },
          body: JSON.stringify(
            {
              grado_id: this.state.TextInput_id,
              grado_nombre: this.state.TextInput_nombre
              
                
            }
          )
      }
    ).then((response) => response.json())
    .then((responseJson) =>
    {
      this.state(
        {
      TextInput_id: responseJson[0]['id'],
      TextInput_nombre: responseJson[0]['nombre']
      
      
        }
      )
    }
    )
}

ListarGradoxId = () =>
{
    //La siguiente función nos devuelve todos los registros de la DB
    fetch
    (
      'https://localhost:44351/Api/Grado',
      {
          method: 'GET',
          headers:
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json', 
          },
          body: JSON.stringify(
            {
              grado_id: this.state.TextInput_id  
            }
          )
      }
    ).then((response) => response.json())
    .then((responseJson) =>
    {
      this.state(
      { 
        TextInput_id: responseJson[0]['id'],
        TextInput_nombre: responseJson[0]['nombre']
       
        
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
        placeholder="nombre"
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
