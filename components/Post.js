import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Post extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Iam Post screen</Text>
            </View>
        )
    }
}

export default Post;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  