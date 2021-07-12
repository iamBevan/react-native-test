import React, {useEffect} from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const DetailsScreen = ( {navigation, route} ) => {
    const movie = route.params.movie;

    useEffect(() => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", "http://www.omdbapi.com/?apikey=cc456efe&t=Star+Wars&y=1977");
      xhr.send();

      xhr.onload = () => {
        if(xhr.status == 200){
          console.log(xhr.responseText);
        }else{
          console.log(`HTTP Request Failed ${xhr.status}`);
        }
      };
      xhr.onerror = () => {
        console.log("onerror Event");
      };
      
    }, []);

    return (
      <View style={styles.mainView}>
        
      </View>
    )
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});

export default DetailsScreen;