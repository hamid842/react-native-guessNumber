import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Game Is Over !</Text>
      <Text>Number of rounds : {props.roundsNumber}</Text>
      <Text>Selected Number Was {props.userNumber}</Text>
      <Button title="New game" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default GameOverScreen;
