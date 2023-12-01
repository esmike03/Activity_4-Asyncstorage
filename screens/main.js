import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, ToastAndroid, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import React,{ useState, Component, useEffect } from 'react';
import { Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../Style/styles';

export default function Main({ navigation }) {

  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  const [selected, setSelected] = React.useState(["-"]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [userData, setUserData] = useState([]);
  const newId = userData.length > 0 ? Math.max(...userData.map((item) => item.id)) + 1 : 1;

    useEffect(() => {
      loadData();
    }, []);

    const loadData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('userData');
        if (storedData !== null) {
          setUserData(JSON.parse(storedData));
        }
      } catch (error) {
        console.error('Error loading data from AsyncStorage:', error);
      }
    };

    const saveData = async (newData) => {
      try {
        await AsyncStorage.setItem('userData', JSON.stringify(newData));
      } catch (error) {
        console.error('Error saving data to AsyncStorage:', error);
      }
    };

    const addStudent = () => {
      if (fname && lname && username && password) {
        const newData = { newId, fname, lname, selected, username, password };
        const updatedStudents = [...userData, newData];
        setUserData(updatedStudents);
        saveData(updatedStudents);

        ToastAndroid.show('Data Saved Successfully!', ToastAndroid.SHORT);
        console.log('Saved');
        setFname('');
        setLname('');
        setSelected('-');
        setUsername('');
        setPassword('');
      } else {
        console.log('Error');
        ToastAndroid.show('Input all fields!', ToastAndroid.SHORT);
      }
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
        style={{ width:  '100%', height: '100%', position: 'absolute' }}
        blurRadius={0}
        source={require('../assets/pixel2.png')}
        />

        <Image
          style={{ width: 350, height: 120 }}
          source={require('../assets/txtv2.png')}
        />

        

        <View style={styles.cont}>

          <TextInput
          style={styles.inBorder}
          placeholder="Firstname"
          placeholderTextColor="#fff9" 
          onChangeText={(text) => setFname(text)}
          value={fname}
          />

          <TextInput
          style={styles.inBorder}
          placeholder="Lastname"
          placeholderTextColor="#fff9" 
          onChangeText={(text) => setLname(text)}
          value={lname}
          />

          <SelectList 
          boxStyles={{backgroundColor: '#8A2387', width: 240, borderColor: 'purple', color: 'white'}}
          inputStyles={{color: 'white'}}
          placeholder='Select Course'
          dropdownStyles={{backgroundColor: 'white', height: 130}}
          setSelected={(val)=> setSelected(val)} 
          data={list} 
          save="value"
          />
        </View>

        <View style={styles.cont}>
          <TextInput
          style={styles.inBorder}
          placeholder="Username"
          placeholderTextColor="#fff9" 
          onChangeText={(text) => setUsername(text)}
          value={username}
          />

          <TextInput
          style={styles.inBorder}
          placeholder="Password"
          placeholderTextColor="#fff9" 
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          />
        </View>

        <View style={styles.cont}>
          <Button icon="plus" mode="contained" buttonColor='#8A2387' onPress={addStudent} >
            ADD STUDENT
          </Button>

          <Button icon="eye" mode="contained" buttonColor='#8A2387' onPress={()=> navigation.navigate('List', { passedData: userData })}>
            STUDENTS LIST
          </Button>

        </View>

        <StatusBar style="auto" />
      </View>
  );
}

