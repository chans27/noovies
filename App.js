import AppLoading from "expo-app-loading";
import React, {useState} from 'react';
import {Text, Image, useColorScheme} from "react-native";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Asset, useAssets } from "expo-asset";
import {NavigationContainer, DarkTheme, DefaultTheme} from "@react-navigation/native";
import {Query, QueryClient, QueryClientProvider} from "react-query";
import Root from "./navigation/Root";
import {ThemeProvider} from "styled-components/native";
import {darkTheme, lightTheme} from "./styled";

const queryClient = new QueryClient();

export default function App() {
  const [assets] = useAssets([require('./robot.jpeg')])
  const [fonts] = Font.useFonts(Ionicons.font);

  const isDark = useColorScheme() === "dark";
  if (!assets || !fonts) {
    return (
        <AppLoading/>
    );
  }
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

