import { NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./AuthRoutes";

import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { AppRoutes } from "./AppRoutes";

export const Routes = () => {
 const { getToken, token } = useContext(UserContext);

 
  return (
    

    <NavigationContainer>
    
      {token ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
 
  
  );
};