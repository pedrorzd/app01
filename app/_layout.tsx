import { Stack } from "expo-router";
import React from "react";
import { MD3LightTheme, PaperProvider } from "react-native-paper";

const tema = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#bb4e06",
    secondary: "#021123",
    background: "#bb069d",
    surface: "#144480",
    onPrimary: "#FFFFFF",
  },

  button: {
    start: "#000000"
  }
};




export default function RootLayout() {
  return (
    <PaperProvider theme={tema}>
      <Stack />
    </PaperProvider>
  );
}
