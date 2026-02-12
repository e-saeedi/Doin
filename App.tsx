import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import WelcomeScreen from './src/screens/WelcomeScreen';
import Navbar from './src/components/Navbar';


const App: React.FC = () => {
  const [showAddTask, setShowAddTask] = useState(false);

  const handleAddTaskPress = () => {
    // اینجا بعداً Modal یا صفحه AddTask رو می‌خوای باز کنی
    setShowAddTask(true);
    console.log("Add Task Pressed!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Navbar onAddTaskClick={handleAddTaskPress} />
      <WelcomeScreen onAddTaskPress={handleAddTaskPress} />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
});