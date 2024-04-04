import { useRoute } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { Button, FlatList, Image, Text, View, StyleSheet, Alert, Modal, Pressable } from "react-native";
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
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // Estado para armazenar a imagem clicada


  const { id, title, completed, category, date, image } = route.params as Task;

  // const categoryColor = categories.find((cat) => cat.value === category)


  const handleTakePhoto = () => {
    takePhoto(id);
  };

  const handlePickImage = () => {
    pickImage(id);
  };

  const handleImageClick = (clickedImage: string) => {
    setSelectedImage(clickedImage);
    setModalVisible(true);
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

        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

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

            <TouchableOpacity onPress={() => handleImageClick(item)}>
              <Image
                style={{ height: 80, width: 80, borderWidth: 1, borderColor: "gray", }}
                source={{ uri: "data:image/jpeg;base64," + item }}
              />
            </TouchableOpacity>



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
          <View style={{ flex: 1, flexDirection: "row", gap: 20, justifyContent: "space-between" }}>
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

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>

          <Image
            style={{ height: '90%', width: '90%', resizeMode: 'contain' }}
            source={{ uri: "data:image/jpeg;base64," + selectedImage }}
          />

          <Pressable onPress={() => setModalVisible(false)}>
            <Text style={{ color: 'white', fontSize: 24 }}>Fechar</Text>
          </Pressable>
        </View>
      </Modal>
    </View>

  );
};


const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
  },
});


export default TaskDetails;
