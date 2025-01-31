import React, { useContext, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { UserContext } from "../contexts/UserContext";
import { Button } from "galio-framework";
import { colors } from "../Colors/colors";
import { Container } from "../styledComponents/styled";
import Animated from 'react-native-reanimated';
import {FlipOutYRight} from 'react-native-reanimated';

const User = () => {
  const { getUser, user, logout } = useContext(UserContext);

  useEffect(() => {
    getUser();
  }, []);

  return (
   <Container>
      <View style={styles.card}
     
      >
        
        <View style={styles.containerimg}>
        <Image style={styles.img} source={{ uri: user ? user.image : "N/A" }} />
        </View>
        <Text style={{textTransform:'capitalize',fontSize:25,color:'white'}}>{`${user ? user.firstName : "N/A"}`} </Text>
        <Text style={{fontStyle:'italic',color:'white'}}>{user ? user.username : "N/A"}</Text>
       
     
         <Button style={{marginTop:15}} color={colors.cor4} onPress={logout}>
             <Text style={{color:'white',fontSize:20}}>Logout</Text> 
        </Button> 
     

      </View>
    </Container>
  );
};

export default User;

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: '100%',
    borderRadius:250

  },
  card: {
    alignItems:'center'
  },
  containerimg:{
    borderRadius:250,
    borderWidth: 1,
    borderColor: "white",
    alignItems:'center',
    marginBottom:15,
    width: 200,
    height: 200,
  }
   

});