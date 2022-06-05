import { StyleSheet, Image, Text, View, Button } from 'react-native';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Image source={require('./src/img/cavalo-paraguaio.jpg')} style={styles.img}/>
      <Button onPress={TocaSom("Aqui Fera")}>Aqui</Button>
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
  img :{
    flex: 1,    
    aspectRatio: 1.5, 
    resizeMode: 'contain' 
  }
});

function TocaSom(msg){
  return <Text></Text>
}
