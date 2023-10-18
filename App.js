import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import LoginContainer from './src/components/pages/login'
import { appstyles } from './src/UI/style';
import NavigationPage from './src/navigation';


export default function App() {
  //    <SafeAreaView style={styles.safeAreaStyle}> inline style 
  return (
    <SafeAreaView style={appstyles.safeAreaStyle}>
        <NavigationPage/>
    </SafeAreaView>
  );
}

//internal style
// const styles = StyleSheet.create(
//   {
//     safeAreaStyle:{
//       flex:1
//     }
//   }
// );