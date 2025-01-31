import {
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  View
} from "react-native";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserContext } from "../contexts/UserContext";
import { Input, Block } from "galio-framework";
import { Button} from "galio-framework";
import { colors } from "../Colors/colors";
import { Container } from "../styledComponents/styled";
import Animated from 'react-native-reanimated';
import { ZoomOut } from 'react-native-reanimated';
import { StretchInX, StretchOutY } from 'react-native-reanimated';
import { LightSpeedInRight, LightSpeedOutLeft } from 'react-native-reanimated';
import { FlipInEasyX, FlipOutEasyX } from 'react-native-reanimated';

import { BounceIn, BounceOut } from 'react-native-reanimated';
import { ButtonFunction } from "../components/Button";






const Login = () => {
  const { login,googleSignIn } = useContext(UserContext);
  const [username, setUsername] = useState("gremio");
  const [password, setPassword] = useState("campeao");
  

  return (
    <Container style={{ backgroundColor: "black" }}>
    
    <Image 
    style={{height:'50%',width:'80%'}}
    source={require("../../assets/campeao.png")}

    />


      <Input
        style={styles.inputContainer}
        placeholder="Username"
        right
        icon="user"
        family="Feather"
        iconSize={15}
        iconColor={colors.cor4}
        onChangeText={setUsername}
        value={username}
      />

      <Input
        style={styles.inputContainer}
        placeholder="Password"
        password
        viewPass
        value={password}
        onChangeText={setPassword}
        iconColor={colors.cor4}
      />


  
      
     
     
      <Button
        textStyle={{ color: "black" }}
        color={colors.cor5}
         onPress={() => login(username, password)}
      style={styles.btn}
      >LOGIN
      </Button>

      <ButtonFunction
        onPress={() => googleSignIn() }
        title="Login com Google"
        icon="google"
        />
    
      
    </Container>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: "80%",
    alignItems:'center'
  },
  title: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
  },
  inputContainer: {
    width: "80%",
  },
});

export default Login;
