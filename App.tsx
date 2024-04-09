import { RootSiblingParent } from "react-native-root-siblings";
import { Routes } from "./src/routes";
import { UserContextProvider } from "./src/contexts/UserContext";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { TaskContext, TaskContextProvider } from "./src/contexts/TaskContext";
import { GoogleSignin } from "@react-native-google-signin/google-signin";



export default function App() {

const configGoogleSignIn = () => {
  GoogleSignin.configure({
    
    webClientId: 
    "1014245539458-oscc6d0us2i4m3ttm5utuck0b2a8qoqo.apps.googleusercontent.com",
    profileImageSize: 120,
  })
}

useEffect(() => {
  configGoogleSignIn()
},[]) 



  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <RootSiblingParent>
        <UserContextProvider>
          <TaskContextProvider>
           <StatusBar backgroundColor="black" style="light"/>
        
          <Routes />
          </TaskContextProvider>
        </UserContextProvider>
      </RootSiblingParent>
    </GestureHandlerRootView>
  );
}
