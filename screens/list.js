import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, Modal } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import React,{ useState } from 'react';
import { Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { Table, Row, Rows } from 'react-native-table-component';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../Style/styles';

export default function List({ navigation, route }) {

  const { passedData } =route.params;

  const [modalVisible, setModalVisible] = useState(false);
  const tableData = passedData.map((student, index) => [index + 1,`${student.lname}, ${student.fname}`, student.selected, student.username]);
  const [selectedRow, setSelectedRow] = useState(null);

  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  const renderStudentTable = (index) => {
    const tableHead = ['#', 'Name', 'Course', 'Username'];
  
  const handleRowPress = (index) => {
      // Update the selected row when a row is pressed
    setSelectedRow(index);
    modal();
  };
    const modal = () =>{
          setModalVisible(true);

    }
    return (
      <Table borderStyle={{ borderWidth: 2, borderColor: '#8A2387' }}>
        <Row data={tableHead} style={{ height: 40, backgroundColor: '#8A2387', width: 330 }} textStyle={{color: 'white'}} />

            {tableData.map((rowData, index) => (
              <TouchableOpacity key={index} onPress={() => handleRowPress(index)}>
                  <Row 
                  key={index} 
                  data={rowData}
                  borderStyle={{borderWidth: 1, borderColor: '#8A2387' }}
                  textStyle={{color: 'white'}} 
                  style={{backgroundColor: 'transparent', borderColor: 'black' }} 
                  />
              </TouchableOpacity>
            ))}

      </Table>
    );
  };

  return(
    <View style={styles.containerList}>

      <LinearGradient
      colors={['#0f0c29', '#302b63', '#24243e', 'transparent']}
      style={styles.backgroundList}
      />

        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.container1List}>
          <View style={styles.modalViewList}>
            <Text style={[styles.modalTextList, {marginBottom: 20}]}>STUDENTS INFORMATION</Text>       
            {selectedRow !== null && (
              <Text style={styles.modalText1List}>{passedData[selectedRow].fname}</Text>
            )}        
            <Text style={[styles.modalText2, {marginBottom: 20}]}>First Name</Text>
            {selectedRow !== null && (
              <Text style={styles.modalText1List}>{passedData[selectedRow].lname}</Text>
            )}
            <Text style={[styles.modalText2, {marginBottom: 20}]}>Last Name</Text>
            {selectedRow !== null && (
              <Text style={styles.modalText1List}>{passedData[selectedRow].selected}</Text>
            )}
            <Text style={[styles.modalText2, {marginBottom: 20}]}>Course</Text>
            {selectedRow !== null && (
              <Text style={styles.modalText1List}>{passedData[selectedRow].username}</Text>
            )}
            <Text style={[styles.modalText2, {marginBottom: 20}]}>Username</Text>
            {selectedRow !== null && (
              <Text style={styles.modalText1List}>{passedData[selectedRow].password}</Text>
            )}
            <Text style={[styles.modalText2, {marginBottom: 20}]}>Password</Text>
            <Button mode="contained" buttonColor='#8A2387' onPress={() => setModalVisible(!modalVisible)}>
            Close
            </Button>
          </View>
        </View>
      </Modal>

      <Image
      style={{ width:  '100%', height: '100%', position: 'absolute' }}
      source={require('../assets/pixel2.png')}
      />

      <Image
      style={{ width: 380, height: 140 }}
      source={require('../assets/txt2v2.png')}
      />
        <View>
          {renderStudentTable()}
        </View>

      <Button icon="plus" mode="contained" buttonColor='#8A2387' onPress={() => navigation.goBack()}>
      ADD STUDENT
      </Button>

      <StatusBar style="auto" />
    </View>
  );
}
