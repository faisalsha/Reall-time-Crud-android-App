import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Blog extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Iam blog screen</Text>
            </View>
        )
    }
}

export default Blog;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  