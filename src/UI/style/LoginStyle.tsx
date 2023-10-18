import { StyleSheet } from "react-native";
import { height, width } from "./size";

const loginStyles = StyleSheet.create({

    container:{
        padding:10,
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        

    },
    loginContainer:{
        padding:'5%',
        gap:10,
        alignItems:'center',
        borderRadius:10,
        borderWidth:1,
        borderColor:'grey',
        width:'80%',
        
    },
    image:{
       
        width:width*0.4,
        height:height*0.4
    },
    title:{
        fontSize:24,
        color:'black',
        fontWeight:"800"
    },
    
    loginButton:{
        width:'40%',
        backgroundColor:'rgb(74, 209, 255)',
        alignItems:'center',
        borderRadius:4,
        padding:8

    },
    loginText:{
        color:'white',
        fontWeight:'600'
    }
});

export default loginStyles;