import { View, Text, TouchableOpacity, TextInput, StyleSheet, Dimensions } from 'react-native'
import React, { useState, useEffect} from 'react';
import { firebase } from "../config"

let dimensionsW = Dimensions.get('window').width;
let dimensionsH = Dimensions.get('window').height;

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");

  registerUser = async (email, password, firstName)=>{
        await firebase.auth().createUserWithEmailAndPassword(email, password)
          .then (() =>{
            firebase.firestore().collection("users")
            .doc(firebase.auth().currentUser.uid)
            .set({
              firstName, 
              email,
            })
          })
          .catch ((error) => {
            alert(error.message)
          })
    }

  return (
    <View style={styles.container1}>
      <View style={styles.container2}>
        <View style={styles.statusTitle}>
          
          <Text
            style={{
              marginLeft: 6,
              fontSize: 10,
              fontWeight: 'bold',
            }}>
            REGISTRATE
          </Text>
        </View>

        <View style={styles.statusIn}>
          <View style={styles.inputContainer}>
            <TextInput
              labelValue={firstName}
              onChangeText={(firstName) => setFirstName(firstName)}
              placeholder="Nombre de usuario"
              placeholderTextColor="#61616d"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.input}
              numberOfLines={1}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              labelValue={email}
              onChangeText={(email) => setEmail(email)}
              placeholder="Email"
              placeholderTextColor="#61616d"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.input}
              numberOfLines={1}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              labelValue={password}
              onChangeText={(password) => setPassword(password)}
              placeholder="Contraseña"
              placeholderTextColor="#61616d"
              style={styles.input}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.nombre}>
            <Text
              style={{
                color: '#61616d',
                fontSize: 14,

                width: '100%',
                padding: 4,

                textDecorationLine: 'underline',
              }}>
              Agree to our Policy Privacy
            </Text>
          </View>
          <View style={styles.nombre}>
            <Text
              style={{
                color: '#61616d',
                fontSize: 14,

                width: '100%',
                padding: 4,

                textDecorationLine: 'underline',
              }}>
              Agree to our terms and conditional
            </Text>
          </View>
          <View style={styles.singInButton}>
            <TouchableOpacity
            onPress={()=> registerUser(email, password, firstName)}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 2.5,
                width: '100%',
                height: dimensionsH / 16,
                backgroundColor: 'black',
                marginBottom: 28,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 14,
                  fontWeight: 'bold',
                }}>
                Registrate
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.midBorder}></View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 2.5,
              width: '100%',
              height: dimensionsH / 16,
              marginBottom: 22,
            }}></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  container2: {
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 0,
    width: '95%',
    borderWidth: 1.1,
    borderColor: '#e6e6e6',
    height: dimensionsW + 140,
  },

  statusTitle: {
    alignItems: 'center',
    borderColor: '#e6e6e6',
    width: '100%',
    borderBottomWidth: 1.1,
    flexDirection: 'row',
    padding: 15,
  },
  statusIn: {
    width: '95%',

    flexDirection: 'column',
    padding: 15,
  },
  midBorder: {
    borderColor: '#e6e6e6',
    width: '100%',
    marginTop:5,
    bottom: dimensionsW / 100,
    borderBottomWidth: 1.5,
    flexDirection: 'column',
  },

  nombre: {
    marginTop: 10,
    marginBottom: 25,
  },

  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    height: dimensionsH / 20,
    borderColor: '#dddddf',
    borderBottomWidth: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    padding: 5,
    flex: 1,
    fontSize: 14,
  },
});

export default Registration