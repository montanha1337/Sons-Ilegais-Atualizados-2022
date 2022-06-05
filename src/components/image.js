import { StyleSheet, Image} from 'react-native';

export default function img() {
  return (
    <View style={styles.container}>
      <Image source={require('./src/img/cavalo-paraguaio.jpg')} style={styles.img}/>
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