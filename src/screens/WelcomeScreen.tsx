import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

interface WelcomeScreenProps {
  onAddTaskPress: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onAddTaskPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Greetings from SimpleTask</Text>

      <Text style={styles.subtitle}>
        Manage your tasks effortlessly with our intuitive platform.
      </Text>

      <Pressable style={styles.button} onPress={onAddTaskPress}>
        <Text style={styles.buttonText}>Add Task</Text>
      </Pressable>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "#151515",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#cccccc"
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
    color: "#cccccc"
  },
  button: {
    backgroundColor: "#ff4d5a",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});