import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import Playground from './Playground';

 
export default class Parent extends Component {

    constructor(props) {
        super(props);
        this.playgroundRef = React.createRef(); 
        this.state = { 
            color : "red", 
            press : false
        }
        
    }  

    componentDidMount(){
       // console.log(this.state.color);
        
    } 

    onAction() {

        this.playgroundRef.current.onToggle(this.state.color); 
        
        if(this.state.color === "red"){ 
            this.setState({color : "green"});
        } 
        else{
            this.setState({color : "red"});
        }

        this.setState({press : true});
    
    }

    render(){
        
        return(
            <View style={[styles.container,{
                width: window.screen.width,
                height: window.screen.height
            }]}>
                <View
                style={{
                    left :-(window.screen.width * 0.28),
                    width:100,
                    height:100,
                    zIndex:1,
                    overflow:"visible"
                }}> 
                    {this.renderHello(1)}
                    {this.renderHello(2)}
                    {this.renderHello(3)}
                    {this.renderHello(4)}
                </View>
               
                <Playground 
                    style={{
                        alignSelf : "center"
                    }} 
                    ref={this.playgroundRef}/>
                
                <TouchableOpacity
                    style={[styles.button,{
                        margin: window.screen.height * 0.01,
                        height: window.screen.height * 0.05,
                        width: window.screen.width * 0.05,
                        alignItems:"center",
                        justifyContent : "center"
                    }]}
                    onPress = {()=> this.onAction()}  >
                    <Text style={styles.button,{
                    }}>
                        Press
                    </Text>

                </TouchableOpacity>

                {this.state.press ? 
                (
                    <Text > 
                        Button clicked! Color is now {this.state.color}
                    </Text>
                )
                :
                    null
                }  
               
            </View>
            
        )
    }

    renderHello = (length) => {
        let data = [];
        for(let i=0;i<length; i++){
            data.push(
                    <View>
                        <Text style={{
                            paddingLeft: window.screen.width * 0.006,
                            fontSize : window.screen.width * 0.02
                        }}>
                            Hello
                        </Text>
                    </View>
                    
                )
            }
          return (
              <View style={{
                  flexDirection :"row"
              }}>
                  {data}
              </View>
            )
    }
}

const styles = StyleSheet.create({
    container: {
      width:"100%",
      height:"100%",
      justifyContent: "center",
      alignItems: "center"
    },
    welcome: {
      fontSize: 20,
      textAlign: "center",
      margin: 10
    },
    instructions: {
      textAlign: "center",
      color: "#333333",
      marginBottom: 5
    },
    button :{
      backgroundColor: "red",
      color:"white"
    }
  });