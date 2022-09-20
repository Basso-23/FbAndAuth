import { View, Text, TouchableOpacity, TextInput, StyleSheet, Dimensions, SafeAreaView} from 'react-native'
import React, { useState, useEffect} from 'react';
import { firebase } from "../config"

const Dashboard = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    firebase.firestore().collection("users")
    .doc(firebase.auth().currentUser.uid).get()
    .then((snapshot)=> {
      if (snapshot.exists){
        setName(snapshot.data())
      }
      else{
        console.log("El usuario no existe")
      }
    })
  }, []);

  

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize:20, fontWeight:"bold"}}>
        Hola, {name.firstName}
      </Text>

      

      <TouchableOpacity
      onPress={()=> {firebase.auth().signOut()}}
      style={styles.button}
      >
      <Text style={{fontSize:22, fontWeight:"bold"}}>
        Cerrar sesion
      </Text> 
      </TouchableOpacity>

    </SafeAreaView>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
    marginTop:100,
  },

  button: {
    marginTop:50,
    height:70,
    width:250,
    backgroundColor:"pink",
    alignItems:"center",
    borderRadius:50,
  },
});