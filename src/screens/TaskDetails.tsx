import { useRoute } from "@react-navigation/native"
import React, { useContext } from "react"
import { Button, FlatList, Image, Text, View } from "react-native"
import { Task } from "../types/Task"
import { TaskContext } from "../contexts/TaskContext"

const TaskDetails = () => {
    const route = useRoute<any>()
    const { takePhoto, pickImage, images } = useContext(TaskContext);
    const { 
        id,
        title,
        completed,
        category,
        date,
        image, 
    } = route.params as Task

    const handleTakePhoto = () => {
        takePhoto(id);
    }

    const handlePickImage = () => {
        pickImage(id);
    }

    return (
        <View>
            <Text>
                { title }
            </Text>
            <Text>
                { completed }
            </Text>
            <Text>
                { category }
            </Text>
            <Text>
                { date }
            </Text>
            <Text>
                { image }
            </Text>
            <Button 
            onPress={handleTakePhoto}
            title="Tirar foto"
            />
            <Button 
            onPress={handlePickImage}
            title="Tirar foto"
            />
            <FlatList
            data={images} 

            renderItem={({ item }) => (
                <Image source={{uri: "data:image/jpeg;base64," + item}}/>
              )}
            keyExtractor={(item, index) => index.toString()}
            />
            
        </View>
    )
}

export default TaskDetails