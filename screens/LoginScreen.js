import React from 'react';
import { Text, View,KeyboardAvoidingView, FlatList, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native';
import db from '../config';

export default class LoginScreen extends React.component{
    constructor(){
        super();
        this.state={
            emailId: "",
            password: ""
        }
    }

    login = async(email, password)=>{
if (email && password){
    try{
        const response= firebase.auth().signInWithEmailAndPassword(email, password)
       
    }
    catch(){}
        
    }
    }
    
    render(){
        return(
            <KeyboardAvoidingView style= {{alignItems: "center", marginTop: 20 }}>
                <View> 
                  <Image source= {require("../assets/booklogo.jpg")} 
                  style= {{width:200, height: 200}}></Image>  
                  <Text style= {{textAlign: "center" , fontSize: 30}}> Willy </Text>

                </View>

                <View>
                    <TextInput placeholder= "example@gmail.com"
                    keyboardType= "email-address"
                    style= {{width: 300, height: 40, borderWidth: 1.5, fontSize: 20, margin: 10, paddingLeft: 10}}
                    onChangeText= {(text)=>{
this.setState({
    emailId: text,
    
})
                    }}></TextInput>

<TextInput placeholder= "password"
                    secureTextEntry= {true}
                    style= {{width: 300, height: 40, borderWidth: 1.5, fontSize: 20, margin: 10, paddingLeft: 10}}
                    onChangeText= {(text)=>{
this.setState({
    password: text,
    
})
                    }}></TextInput>

                </View>

                <View>
<TouchableOpacity onPress= {()=>{
    this.login(this.state.emailId, this.state.password)
}}
style= {{width:90, height: 30,borderWidth: 1, marginTop: 20, paddingTop: 5}}>
    <Text> login</Text>
</TouchableOpacity>

                </View>
            </KeyboardAvoidingView>
        )

       
    }
}