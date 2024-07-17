import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Quiz from "../Quiz";
import Leaderboard from "../Leaderboard";

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Quiz">
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="Leaderboard" component={Leaderboard} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
