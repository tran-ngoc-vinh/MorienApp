import {
    StyleSheet
}from 'react-native';
const Styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
   up: {
       flex: 3,
       flexDirection:'column',
       justifyContent:'center',
        alignItems:'center',
       
   },
   down: {
       flex: 7,
       flexDirection:'column',
       justifyContent:'flex-start',
       alignItems:'center',
       
   },
   logo:{
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
    width: 320,
    height:100,
   },
   textInputContainer:{
    paddingHorizontal:10,
    backgroundColor:'rgba(0,0,0,0.2)',
    borderRadius:10,
    marginBottom:20,
   },
   textInput:{
       width:280,
       height:45,
   },
   loginButton:{
       width:300,
       height:45,
       paddingHorizontal:10,
        backgroundColor:'#009900',
        borderRadius:10,
        flexDirection:'column',
       justifyContent:'center',
   },
   loginButtonTitle:{
    textAlign: 'center',
    color :'white',
    fontWeight: 'bold',
    fontSize: 20
   }
})

 export default Styles