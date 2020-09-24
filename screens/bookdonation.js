import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from 'firebase';
import db from '../config'
import Myheader from '../components/myheader';



export default class Bookdonation extends Component{
    constructor(){
        super();
        this.state = {
          requestedbooklist:[],
          
        }
        this.requestref = null
    }
    getbooklist=()=>{
      this.requestRef = db.collection("requestbooks")
      .onSnapshot((snapshot)=>{
        var requestedbooklist= snapshot.docs.map(document => document.data());
        this.setState({
          requestedbooklist :  requestedbooklist
        });
      })
    }
  
      componentDidMount(){
          this.getbooklist()
      }
      componentWillUnmount(){
          this.requestref()
      }
      keyExtractor = (item, index) => index.toString()

      renderItem = ( {item, i} ) =>{
        return (
          <ListItem
            key={i}
            title={item.bookname}
            subtitle={item.reasonofrequest}
            titleStyle={{ color: 'red', fontWeight: 'bold' }}
            rightElement={
                <TouchableOpacity style={styles.button}>
                  <Text style={{color:'#ffff'}}>View</Text>
                </TouchableOpacity>
              }
            bottomDivider
          />
        )
      }
      render(){
        return(
          <View style={{flex:1}}>
            <Myheader title="donatebooks"/>
            <View style={{flex:1}}>
              {
                this.state. requestedbooklist.length === 0
                ?(
                  <View style={styles.subContainer}>
                    <Text style={{ fontSize: 20}}>List Of All Requested Books</Text>
                  </View>
                )
                :(
                  <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state. requestedbooklist}
                    renderItem={this.renderItem}
                  />
                )
              }
            </View>
          </View>
        )
      }
    }
const styles = StyleSheet.create({
  subContainer:{
    flex:1,
    fontSize: 20,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    width:100,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8
     }
  }
})