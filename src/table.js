import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default class App extends Component {
 
  constructor(props) {    
        super(props);
        this.state = {
          tableHead: ['#', 'Name', 'Course', 'Username'],
        }
  }
  render() {
    const state = this.state;
    return (
      <View style={styles.container}>

              <Table borderStyle={{borderWidth: 2, borderColor: '#C33764'}} style={{width: 350}}>

                <Row data={state.tableHead} style={styles.head} textStyle={{margin: 6, color: 'white'}}/>
                
                <Rows data={[['a', 'b', 'c', 'd']]} borderStyle={{borderWidth: 1, borderColor: '#C33764'}} style={{borderBottomWidth: 1, borderColor: '#C33764', borderRightWidth: 1, borderWidth: 1}} textStyle={styles.text}/>
              </Table>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {  },
  head: { height: 50, witdh: 200, backgroundColor: 'transparent' },
  text: { margin: 6, color: 'white' }
});