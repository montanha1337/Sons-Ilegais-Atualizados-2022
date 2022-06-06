import { StyleSheet, Image, Text, View, Button } from 'react-native';
import {Audio} from 'expo-av';
import {sounds} from './src/sounds';
import { TouchableOpacity } from 'react-native';


export default function App() {

  return (
    <View style={styles.container}>
      {/* <Image source={require('./src/img/cavalo-paraguaio.jpg')} style={styles.img} /> */}
      {/* <Button
        title="click me"
        style={{ fontSize: 20, color: 'green' }}
        styleDisabled={{ color: 'red' }}
        onPress={() => this.TocaSom()}>
      </Button> */
      }
     
      {sounds.map((item,index) => (
       <View key ={index} style={styles.buttonContainer}>
          <TouchableOpacity
        style={styles.button}
        onPress={() => onPress(index)}
      >
        <Text>{item.title}</Text>
      </TouchableOpacity>
          
       </View> 
   
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer:{
    height: 40,
    margin: 5
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    flex: 1,
    aspectRatio: 1.5,
    resizeMode: 'contain'
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