import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Coin extends React.Component{
  state = {
    face: <Head/>,
  }
  render(){
    const face = this.state.face;
    return(
      <View>
        {face}
        <Button
        title="Flip"
        onPress={this.onFlip}
        />
      </View>
    );
  }
  onFlip = () =>{
    var rand = Math.floor(Math.random() *100) + 1;
    if(rand%2==0){
      this.setState({face: <Head/>,})
    }else{
      this.setState({face: <Tail/>,})
    }
  }
  
}

const Head = () =>{
  return <View style={styles.head}><Text>H</Text></View>;
}
const Tail = () =>{
  return <View style={styles.tail}><Text>T</Text></View>;
}

export default function App() {
  return (
    <View style={styles.container}>
      <Coin/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  head: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: "red",
    justifyContent: 'center',
    alignItems: 'center',
  },
  tail: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: "green",
    justifyContent: 'center',
    alignItems: 'center',
  },
});
