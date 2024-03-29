
import { useContext, useEffect, useState } from "react";
import { View, StyleSheet, FlatList,Image } from "react-native";
import { Task } from "../types/Task";
import { categories } from "../utils/data/data";
import CategoryItem from "../components/CategoryItem";
import ItemCard from "../components/ItemCard";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { colors } from "../Colors/colors";
import { UserContext } from "../contexts/UserContext";
import { Text } from "react-native";
import Animated from "react-native-reanimated";
import { FlipInYRight, FlipOutYRight } from "react-native-reanimated";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import { LuckiestGuy_400Regular } from "@expo-google-fonts/luckiest-guy";
import { TaskContext } from "../contexts/TaskContext";

const Home = () => {
  const {
    taskList,
    selectedCategory,
    handleSelectCategory,
    handleRemoveTask,
    handleDoneTask,
    getTasks,
    db
  } = useContext(TaskContext);

  const {user} = useContext(UserContext);


  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists tasks (id integer primary key not null, completed int, title text, category text, date text);"
      );
    });
    getTasks();
  }, []);



  let [fontsLoaded, fontError] = useFonts({
    Inter_900Black,
    LuckiestGuy_400Regular,
  });

  console.log(taskList);
  

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <SafeAreaView style={{ backgroundColor: colors.cor2, flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 25,
          width: "95%",
          alignSelf: "center",
          alignItems: "center",
          padding: 10,
          borderRadius: 10,
          backgroundColor: colors.cor3,
        }}
      >
        <View>
          <Text
            style={{
              color: "white",
              fontFamily: "Inter_900Black",
              fontSize: 17,
            }}
          >
            Bem-vindo de Volta,{" "}
          </Text>

          <Text
            style={{
              color: "white",
              fontFamily: "Inter_900Black",
              fontSize: 19,
            }}
          >
            { user.name }
          </Text>
        </View>

        { <Image style={{ height: 80, width: 80 }} source={{ uri: user.image }} /> }
      </View>

      <View>
        <FlatList
          horizontal
          data={categories}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <CategoryItem
              handleSelectCategory={handleSelectCategory}
              item={item}
              selectedCategory={selectedCategory}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>

      <Animated.FlatList
        entering={FlipInYRight}
        exiting={FlipOutYRight}
        data={taskList}
        ListEmptyComponent={
          <Animated.View   entering={FlipInYRight}   exiting={FlipOutYRight}>
            <Text style={{ color: "white", alignSelf: "center" }}>
              Não há tarefas disponíveis.
            </Text>
          </Animated.View>
        }
        renderItem={({ item }) => {
          if (selectedCategory === "done" && !item.completed) {
            return null;
          }
          if (selectedCategory !== "done" && item.completed) {
            return null;
          }
          return (
            <ItemCard
              handleDoneTask={handleDoneTask}
              handleRemoveTask={handleRemoveTask}
              task={item}
            />
          );
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textinput: {
    width: "95%",
    alignSelf: "center",
    gap: 15,
    marginBottom: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderTopWidth: 1,

    width: "100%",
    paddingLeft: 15,
    borderRadius: 4,
    height: 50,
    borderColor: colors.cor6,
    borderStyle: "solid",

    fontWeight: "800",
    fontSize: 17,
    color: colors.cor6,
  },
});

export default Home;