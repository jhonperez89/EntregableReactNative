
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, TextInput, TouchableOpacity,
  Button } from 'react-native';


  export default class Asignatura extends React.Component
  {
    constructor (ops)
    {
      super(ops)
      //Aquí definimos las variables para la tabla persona de la Base
      //MatriculasAPI
      //
      this.state = 
      {
        TextInput_id:"",
        TextInput_nombre:"",
        TextInput_creditos:"",
        TextInput_tipo:"",
        TextInput_curso:"",
        TextInput_cuatrimestre:"",
        TextInput_id_profesor:"",
        TextInput_id_grado:"",
        
        
        
    }

    //Ahora creamos las funciones para esta clase Persona
    InsertarAsignatura = () =>
    {
      //Vamos a consumir la API: APIMatriculas
      //https://localhost:44351/Api/Asignatura
      fetch('https://localhost:44351/Api/Asignatura', 
      {
        method: 'POST',
        headers:
        {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },

        body: JSON.stringify (
          {
            asignatura_id: this.state.TextInput_id,
            asignatura_nombre: this.state.TextInput_nombre,
            asignatura_crreditos: this.state.TextInput_creditos,
            asignatura_tipo: this.state.TextInput_tipo,
            asignatura_curso: this.state.TextInput_curso,
            asignatura_cuatrimestre: this.state.TextInput_cuatrimestre,
            asignatura_id_profesor: this.state.TextInput_id_profesor,
            asignatura_id_grado: this.state.TextInput_id_grado
            
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
  
ActualizarAsignatura = () =>
{
  //En esta función invocamos el EndPoint o el método de la API
  // para Actualizar
  //
  fetch(
    'https://localhost:44351/Api/Asignatura',
    {
        method: 'PUT',
        headers:
        {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
        {
            asignatura_id: this.state.TextInput_id,
            asignatura_nombre: this.state.TextInput_nombre,
            asignatura_crreditos: this.state.TextInput_creditos,
            asignatura_tipo: this.state.TextInput_tipo,
            asignatura_curso: this.state.TextInput_curso,
            asignatura_cuatrimestre: this.state.TextInput_cuatrimestre,
            asignatura_id_profesor: this.state.TextInput_id_profesor,
            asignatura_id_grado: this.state.TextInput_id_grado               
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

  BorrarAsignatura = () =>
  {
    //Invocamos el EndPoint desde la API para borrar persona en la DB.
    fetch
    (
      'https://localhost:44351/Api/Asignatura',
      {
          method: 'DELETE',
          headers:
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',             
          },
          body: JSON.stringify(
            {
                asignatura_id: this.state.TextInput_id
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

ListarTodasLasAsignaturas = () =>
{
    //La siguiente función nos devuelve todos los registros de la DB
    fetch
    (
      'https://localhost:44351/Api/Asignatura',
      {
          method: 'GET',
          headers:
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json', 
          },
          body: JSON.stringify(
            {
                asignatura_id: this.state.TextInput_id,
                asignatura_nombre: this.state.TextInput_nombre,
                asignatura_crreditos: this.state.TextInput_creditos,
                asignatura_tipo: this.state.TextInput_tipo,
                asignatura_curso: this.state.TextInput_curso,
                asignatura_cuatrimestre: this.state.TextInput_cuatrimestre,
                asignatura_id_profesor: this.state.TextInput_id_profesor,
                asignatura_id_grado: this.state.TextInput_id_grado   
            }
          )
      }
    ).then((response) => response.json())
    .then((responseJson) =>
    {
      this.state(
        {
      TextInput_id: responseJson[0]['id'],
      TextInput_nombre: responseJson[0]['nombre'],
      TextInput_creditos: responseJson[0]['creditos'],
      TextInput_tipo: responseJson[0]['tipo'],
      TextInput_curso: responseJson[0]['curso'],
      TextInput_cuatrimestre: responseJson[0]['cuatrimestre'],
      TextInput_id_profesor: responseJson[0]['id_profesor'],
      TextInput_id_grado: responseJson[0]['id_grado']
      
      
        }
      )
    }
    )
}

ListarAsignaturaxId = () =>
{
    //La siguiente función nos devuelve todos los registros de la DB
    fetch
    (
      'https://localhost:44351/Api/Asignatura',
      {
          method: 'GET',
          headers:
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json', 
          },
          body: JSON.stringify(
            {
                asignatura_id: this.state.TextInput_id 
            }
          )
      }
    ).then((response) => response.json())
    .then((responseJson) =>
    {
      this.state(
      { 
        TextInput_id: responseJson[0]['id'],
        TextInput_nombre: responseJson[0]['nombre'],
        TextInput_creditos: responseJson[0]['creditos'],
        TextInput_tipo: responseJson[0]['tipo'],
        TextInput_curso: responseJson[0]['curso'],
        TextInput_cuatrimestre: responseJson[0]['cuatrimestre'],
        TextInput_id_profesor: responseJson[0]['id_profesor'],
        TextInput_id_grado: responseJson[0]['id_grado']
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
        <TextInput
          placeholder="nombre"
          onChangeText={TextInputValue => this.setState(
            {
                TextInput_nombre: TextInputValue
            }
          )}
            underlineColorAndroid='transparent'
            style={MisEstilos.TextInputStyleClass}
            value={this.state.TextInput_nif}
            autoFocus={true}
        >
        </TextInput>
      </View>
      
      
      <View style={ {flexWrap:'wrap',
      flexDirection:'row',
      backgroundColor:"green",marginTop:20}}>

      <TextInput
        placeholder="creditos"
        onChangeText={TextInputValue => this.setState(
          {
            TextInput_creditos: TextInputValue
          }
        )}
          underlineColorAndroid='transparent'
          style={MisEstilos.TextInputStyleClass}
          value={this.state.TextInput_apellido1}
          autoFocus={true}
      >
      </TextInput>
      <TextInput
        placeholder="tipo"
        onChangeText={TextInputValue => this.setState(
          {
            TextInput_tipo: TextInputValue
          }
        )}
          underlineColorAndroid='transparent'
          style={MisEstilos.TextInputStyleClass}
          value={this.state.TextInput_apellido2}
          autoFocus={true}
      >
      </TextInput>
      </View>
      <View style={ {flexWrap:'wrap',flexDirection:'row',backgroundColor:"white",marginTop:20}}>
      <TextInput
        placeholder="curso"
        onChangeText={TextInputValue => this.setState(
          {
            TextInput_curso: TextInputValue
          }
        )}
          underlineColorAndroid='transparent'
          style={MisEstilos.TextInputStyleClass}
          value={this.state.TextInput_ciudad}
          autoFocus={true}
      >
      </TextInput>        
      <TextInput
        placeholder="cuatrimestre"
        onChangeText={TextInputValue => this.setState(
          {
            TextInput_cuatrimestre: TextInputValue
          }
        )}
          underlineColorAndroid='transparent'
          style={MisEstilos.TextInputStyleClass}
          value={this.state.TextInput_clave}
          autoFocus={true}
      >
      </TextInput>        
      </View>

      <View style={ {flexWrap:'wrap',
      flexDirection:'row',backgroundColor:"white",
      marginTop:20}}>

      <TextInput
        placeholder="id_profesor"
        onChangeText={TextInputValue => this.setState(
          {
            TextInput_id_profesor: TextInputValue
          }
        )}
          underlineColorAndroid='transparent'
          style={MisEstilos.TextInputStyleClass}
          value={this.state.TextInput_direccion}
          autoFocus={true}
      >
      </TextInput>        
      <TextInput
        placeholder="id_grado"
        onChangeText={TextInputValue => this.setState(
          {
            TextInput_id_grado: TextInputValue
          }
        )}
          underlineColorAndroid='transparent'
          style={MisEstilos.TextInputStyleClass}
          value={this.state.TextInput_telefono}
          autoFocus={true}
      >
      </TextInput>
      </View>

      
           

      <TouchableOpacity
        activeOpacity={0.4}
        style={MisEstilos.TouchableOpacityStyle}
        onPress={this.InsertarPersona}
      >
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.4}
        style={MisEstilos.TouchableOpacityStyle}
        onPress={this.ActualizarPersona}
      >
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.4}
        style={MisEstilos.TouchableOpacityStyle}
        onPress={this.BorrarPersona}
      >
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.4}
        style={MisEstilos.TouchableOpacityStyle}
        onPress={this.ListarPersonaxId}
      >
      </TouchableOpacity>        
    </View>

  );
}

}  //Llave que cierra la clase principal
}

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
