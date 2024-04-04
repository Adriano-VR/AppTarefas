import { useRoute } from "@react-navigation/native";
import React, { useContext } from "react";
import { Button, FlatList, Image, Text, View,StyleSheet } from "react-native";
import { Task } from "../types/Task";
import { TaskContext } from "../contexts/TaskContext";
import { colors } from "../Colors/colors";
import { categories } from "../utils/data/data";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";



const TaskDetails = () => {
  const route = useRoute<any>();
  const { takePhoto, pickImage, images } = useContext(TaskContext);
  const { id, title, completed, category, date, image } = route.params as Task;

  // const categoryColor = categories.find((cat) => cat.value === category)
  

  const handleTakePhoto = () => {
    takePhoto(id);
  };

  const handlePickImage = () => {
    pickImage(id);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: colors.cor2,
       
      }}
    >
      <View      
        style={{
        borderWidth: 1,
          borderRadius: 10,
          padding: 15,
          borderColor: completed === 1 ? "green" : "red",
          backgroundColor: colors.cor3,
          alignSelf: "center",
          justifyContent: "space-between",
          height: '90%',
          width: `90%`,
          alignItems: "center",
        }}
      
>
 
        <View style={{flexDirection:'row',justifyContent:'center'}}>
        
          <Text
            style={{
              color: "white",
              fontSize: 35,
              textTransform: "capitalize",
              alignSelf: "center",
              paddingBottom: 25,
            }}
          >
           {title}
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 25,
            
            }}
          >
            {/* {completed === 1 ? (
              <FontAwesome name="check" size={40} color="green" />
            ) : (
              <FontAwesome name="close" size={40} color="red" />
            )} */}
          </Text>
        </View>

        {/* <Text
          style={{
            color: "white",
            fontSize: 25,
            textTransform: "capitalize",
            alignSelf: "center",
          }}
        >
         Estilo: {category}
        </Text> */}

        {/* <Text>{image}</Text> */}

        <FlatList 
          data={images}
          renderItem={({ item }) => (
         
            <Image
              style={{ height: 80, width: 80,borderWidth: 1,borderColor: "gray",}}
              source={{ uri: "data:image/jpeg;base64," + item }}
            />
        
           
           
          )}
          keyExtractor={(item, index) => index.toString()}
          numColumns={4}
        />

        <View
          style={{
            flexDirection: "row",
            gap: 15,
            justifyContent: "space-between",
          }}
        >
          <View style={{flex:1, flexDirection: "row", gap: 20,justifyContent: "space-between"}}> 
          <View>
            <Text
              style={{
                color: "white",
                fontSize: 15,
              }}
            >
              {date}
            </Text>
          </View>

          <View style={{ flexDirection: "row", gap: 20 }}>
            <TouchableOpacity onPress={handleTakePhoto}>
              <MaterialIcons name="add-a-photo" size={24} color="white" />
            </TouchableOpacity>

            <TouchableOpacity onPress={handlePickImage}>
              <FontAwesome name="file-photo-o" size={24} color="white" />
            </TouchableOpacity>
          </View>
          </View>
        </View>
      </View>
    </View>
  );
};

 

  

export default TaskDetails;
