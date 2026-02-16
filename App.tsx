import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './src/screens/WelcomeScreen';
import AddTaskScreen from './src/screens/AddTaskScreen';
import TaskListScreen from './src/screens/TaskListScreen';
import Navbar from './src/components/Navbar';
import Footer from './src/components/Footer';
import { Task } from './src/types/Task';

export type RootStackParamList = {
  Welcome: undefined;
  AddTask: { existingTask?: Task } | undefined;
  TaskList: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleSaveTask = (task: Task) => {
    setTasks(prevTasks => {
      const index = prevTasks.findIndex(t => t.id === task.id);
      if (index !== -1) {
        // ویرایش تسک
        const newTasks = [...prevTasks];
        newTasks[index] = task;
        return newTasks;
      }
      // اضافه کردن تسک جدید
      return [...prevTasks, task];
    });
  };

  const handleDelete = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const handleComplete = (id: string) => {
    setTasks(prev =>
      prev.map(task => (task.id === id ? { ...task, completed: true } : task)),
    );
  };

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* Welcome Screen */}
          <Stack.Screen name="Welcome">
            {({ navigation }) => (
              <>
                <Navbar onAddTaskClick={() => navigation.navigate('AddTask')} />
                <WelcomeScreen onAddTaskPress={() => navigation.navigate('AddTask')} />
                <Footer />
              </>
            )}
          </Stack.Screen>

          {/* Add Task Screen */}
          <Stack.Screen name="AddTask">
            {({ navigation, route }) => (
              <>
                <Navbar onAddTaskClick={() => navigation.navigate('AddTask')} />
                <AddTaskScreen
                  navigation={navigation}
                  onSave={handleSaveTask}
                  existingTask={route.params?.existingTask}
                />
              </>
            )}
          </Stack.Screen>

          {/* Task List Screen */}
          <Stack.Screen name="TaskList">
            {({ navigation }) => (
              <>
                <Navbar onAddTaskClick={() => navigation.navigate('AddTask')} />
                <TaskListScreen
                  tasks={tasks}
                  onDelete={handleDelete}
                  onComplete={handleComplete}
                  onEdit={task => navigation.navigate('AddTask', { existingTask: task })}
                />
              </>
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
});
