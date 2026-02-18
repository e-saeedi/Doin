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
        const newTasks = [...prevTasks];
        newTasks[index] = task;
        return newTasks;
      }
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
          <Stack.Screen name="Welcome">
            {({ navigation }) => (
              <>
                <Navbar
                  onAddTaskClick={() => navigation.navigate('AddTask')}
                  onHomePageClick={() =>
                    navigation.reset({
                      index: 0,
                      routes: [{ name: 'Welcome' }],
                    })
                  }
                  onTaskListClick={() => navigation.navigate('TaskList')}
                />
                <WelcomeScreen
                  onAddTaskPress={() => navigation.navigate('AddTask')}
                />
                <Footer />
              </>
            )}
          </Stack.Screen>

          <Stack.Screen name="AddTask">
            {({ navigation, route }) => (
              <>
                <Navbar
                  onAddTaskClick={() => navigation.navigate('AddTask')}
                  onHomePageClick={() =>
                    navigation.reset({
                      index: 0,
                      routes: [{ name: 'Welcome' }],
                    })
                  }
                  onTaskListClick={() => navigation.navigate('TaskList')}
                />
                <AddTaskScreen
                  navigation={navigation}
                  onSave={handleSaveTask}
                  existingTask={route.params?.existingTask}
                />
              </>
            )}
          </Stack.Screen>

          <Stack.Screen name="TaskList">
            {({ navigation }) => (
              <>
                <Navbar
                  onAddTaskClick={() => navigation.navigate('AddTask')}
                  onHomePageClick={() =>
                    navigation.reset({
                      index: 0,
                      routes: [{ name: 'Welcome' }],
                    })
                  }
                  onTaskListClick={() => navigation.navigate('TaskList')}
                />
                <TaskListScreen
                  tasks={tasks}
                  onDelete={handleDelete}
                  onComplete={handleComplete}
                  onEdit={task =>
                    navigation.replace('AddTask', { existingTask: task })
                  }
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
