import { StyleSheet, Image, Text, SafeAreaView,View, Button,FlatList } from 'react-native';
import {Audio} from 'expo-av';
import {sounds} from './src/sounds';
import { TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';


export default function App() {
 
  return (
    
    <SafeAreaView style={styles.container}>
      <Appbar.Header>
      <Appbar.Content title="SONS ILEGAIS ATUALIZADO 2022"/>
    </Appbar.Header>
      {sounds.map((item, index) => (
        <View key={index} style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => onPress(index)} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{item.title}</Text>
          </TouchableOpacity>

        </View>

      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  appButtonContainer: {
    margin:10,
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

 const onPress = (index)=>{
    handlePlaySound(index)
 }

 const handlePlaySound = async (index) =>{
   const soundObj = new Audio.Sound()
  
   try{
     let source = sounds[index].sound
     await soundObj.loadAsync(source)
     await soundObj.playAsync().then(
       
      async playbackStatus => {
        setTimeout(()=>{
          soundObj.unloadAsync()
        }, playbackStatus.playableDurationMillis)
        }).catch(error=>{
          console.log(error)
        })
      }
    
   catch(error){
     console.log(error)
   }
 }



