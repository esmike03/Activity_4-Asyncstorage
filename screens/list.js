import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import React,{ useState } from 'react';
import { Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { Table, Row, Rows } from 'react-native-table-component';
import TableData from '../src/table';

export default function List({ navigation }) {

    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
      }, [navigation]);

      

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
      style={{ width: 380, height: 140 }}
      source={require('../assets/txt2v2.png')}
      />
        <View>
            <TableData/>
        </View>

      <Button icon="plus" mode="contained" buttonColor='#C33764' onPress={() => navigation.goBack()}>
      ADD STUDENT
      </Button>

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
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    width: '100%'
  },
  head: { height: 40, backgroundColor: '#FF8F8F' },
});