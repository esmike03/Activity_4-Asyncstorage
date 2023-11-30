import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import React,{ useState, Component } from 'react';
import { Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Main({ navigation }) {

    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
      }, [navigation]);

  const [selected, setSelected] = React.useState("");
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [token, setToken] = useState(null);

  const onAdd = async() => {
    setFname(fname);
    try{
      await AsyncStorage.setItem('userkey', username);
      await AsyncStorage.setItem('token', password);
      await AsyncStorage.setItem('fnamekey', fname);
      await AsyncStorage.setItem('token', lname);
      await AsyncStorage.setItem('token', selected);
      console.log('Saved Successfully');
      setFname('');
    } catch(e){
      console.log("Error");
    }

  }

  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('fnamekey');
      if (value !== null) {
        // We have data!!
        console.log(value);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const Save = () => {
    setFname(fname);
  };
  
  const list = [
      {key:'1', value:'BSIT'},
      {key:'2', value:'BSCS'},
      {key:'3', value:'BSCRIM'},
      {key:'4', value:'BSELEC'},
      {key:'5', value:'BSELEX'},
      {key:'6', value:'BSIT-FPSM'},
  ]

  return (
    <View style={styles.container}>

      <LinearGradient
      colors={['#0f0c29', '#302b63', '#24243e', 'transparent']}
      style={styles.background}
      />
    
     <Image
      style={{ width: '100%', height: '100%', position: 'absolute' }}
      blurRadius={1}
      source={require('../assets/pixel.png')}
      />

      <Image
        style={{ width: 350, height: 120 }}
        source={require('../assets/txtv2.png')}
      />

      <View style={styles.cont}>

        <TextInput
        style={{height: 40, width: 240, borderColor: 'black', backgroundColor: 'transparent', borderWidth: 2, borderColor: 'purple', borderRadius: 8, paddingLeft: 18, color: 'white'}}
        placeholder="Firstname"
        placeholderTextColor="#fff9" 
        onChangeText={(text) => setFname(text)}
        value={fname}
        />

        <TextInput
        style={{height: 40, width: 240, borderColor: 'black', backgroundColor: 'transparent', borderWidth: 2, borderColor: 'purple', borderRadius: 8, paddingLeft: 18, color: 'white'}}
        placeholder="Lastname"
        placeholderTextColor="#fff9" 
        />

        <SelectList 
        boxStyles={{backgroundColor: '#C33764', width: 240, borderColor: 'purple', color: 'white'}}
        placeholder='Select Course'
        dropdownStyles={{backgroundColor: 'white', height: 130}}
        setSelected={(val) => setSelected(val)} 
        data={list} 
        save="value"
        />
      </View>

      <View style={styles.cont}>
        <TextInput
        style={{height: 40, width: 240, borderColor: 'black', backgroundColor: 'transparent', borderWidth: 2, borderColor: 'purple', borderRadius: 8, paddingLeft: 18, color: 'white'}}
        placeholder="Username"
        placeholderTextColor="#fff9" 
        />

        <TextInput
        style={{height: 40, width: 240, borderColor: 'black', backgroundColor: 'transparent', borderWidth: 2, borderColor: 'purple', borderRadius: 8, paddingLeft: 18, color: 'white'}}
        placeholder="Password"
        placeholderTextColor="#fff9" 
        />
      </View>

      <View style={styles.cont}>
        <Button icon="plus" mode="contained" buttonColor='#C33764' onPress={onAdd} >
          ADD STUDENT
        </Button>

        <Button icon="eye" mode="contained" buttonColor='#C33764' onPress={()=> navigation.navigate('List')}>
          STUDENTS LIST
        </Button>

      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001524',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40
  },
  cont: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    width: '100%'
  },
});
