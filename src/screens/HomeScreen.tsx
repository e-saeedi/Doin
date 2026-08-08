import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TaskList } from '../types';


const mockLists: TaskList[] = [
  { id: '1', title: 'Work', color: '#4CAF50', taskCount:5, completedCount: 2 },
  { id: '2', title: 'Personal', color: '#2196F3', taskCount: 3, completedCount: 1 },
];

type RootStackParamList = {
  Home: undefined;
  ListDetail: { listId: string };
  AddList: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const renderList = ({ item }: { item: TaskList }) => (
    <TouchableOpacity
      style={{
        backgroundColor: item.color + '20',
        padding: 16,
        borderRadius:10,
        marginVertical: 8,
      }}
      onPress={() => navigation.navigate('ListDetail', { listId: item.id })}
    >
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
      <Text style={{ marginTop: 4 }}>
        {item.completedCount} / {item.taskCount} completed
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>
        Your Lists
      </Text>
      <FlatList data={mockLists} renderItem={renderList} keyExtractor={(item) => item.id} />
      <TouchableOpacity
        style={{
          backgroundColor: '#6200EE',
          padding: 16,
          borderRadius: 8,
          alignItems: 'center',
          marginTop: 20,
        }}
        onPress={() => navigation.navigate('AddList')}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Create New List</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
