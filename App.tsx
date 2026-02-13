import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './src/screens/WelcomeScreen';
import AddTaskScreen from './src/screens/AddTaskScreen';
import Navbar from './src/components/Navbar';
import Footer from './src/components/Footer';

export type RootStackParamList = {
  Welcome: undefined;
  AddTask: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome">
            {({ navigation }) => (
              <>
                <Navbar onAddTaskClick={() => navigation.navigate('AddTask')} />
                <WelcomeScreen
                  onAddTaskPress={() => navigation.navigate('AddTask')}
                />
                <Footer />
              </>
            )}
          </Stack.Screen>

          <Stack.Screen name="AddTask">
            {({ navigation }) => (
              <>
                <Navbar onAddTaskClick={() => navigation.navigate('AddTask')} />
                <AddTaskScreen navigation={navigation} />
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

// import React, { useState } from 'react';
// import { SafeAreaView, StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import WelcomeScreen from './src/screens/WelcomeScreen';
// import Navbar from './src/components/Navbar';
// import Footer from './src/components/Footer';

// const App: React.FC = () => {
//   const [showAddTask, setShowAddTask] = useState(false);

//   const handleAddTaskPress = () => {
//     setShowAddTask(true);
//     console.log('Add Task Pressed!');
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Navbar onAddTaskClick={handleAddTaskPress} />
//       <WelcomeScreen onAddTaskPress={handleAddTaskPress} />
//       <Footer />
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#121212',
//   },
// });
