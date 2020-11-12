import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import axios from "axios";
import HomeScreen from "./HomeScreen";
import Movies from "./Movies";
import MovieInfo from "./MovieInfo";
import { useSelector } from "react-redux";
import { AppState } from "../store/store";

type RootStackParamList = {
  MovieSelector: undefined;
  Movies: undefined;
  MovieInfo: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MovieSelector"
          component={HomeScreen}
          options={{
            headerTintColor: "#ffffff",
            headerStyle: {
              backgroundColor: "#7e57c2",
              borderBottomColor: "#7e57c2",
              borderBottomWidth: 3,
            },
          }}
        />
        <Stack.Screen
          name="Movies"
          component={Movies}
          options={{
            headerTintColor: "#ffffff",
            headerStyle: {
              backgroundColor: "#7e57c2",
              borderBottomColor: "#7e57c2",
              borderBottomWidth: 3,
            },
          }}
        />
        <Stack.Screen
          name="MovieInfo"
          component={MovieInfo}
          options={{
            headerTintColor: "#ffffff",
            headerStyle: {
              backgroundColor: "#7e57c2",
              borderBottomColor: "#7e57c2",
              borderBottomWidth: 3,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Routes;
