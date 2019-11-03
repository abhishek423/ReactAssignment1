import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';

export default class Playground extends Component {

    constructor(props) {
        super(props)
        
        this.state = { 
            color : "red" ,
            width: (window.screen.width )/2,
            height: (window.screen.height)/2
        }
    }

    onToggle(color){

        if(color==="red"){
            this.setState({color : "green"});
        }else{
            this.setState({color : "red"});
        }
        
   }

    render(){
        
        return(
                <View style={{
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: (this.state.color === "red") ? "#e67f7f" : "green" ,
                    height : this.state.height,
                    width:this.state.width
                }}>
                </View> 
        )
    }
}

const styles = StyleSheet.create({
    redContainer: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "red",
      //height : this.state.height,
      //width:this.state.width
    },
    greenContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "green",
        //height : this.state.height,
        //width:this.state.width
      }
});