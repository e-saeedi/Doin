import React from 'react';
import {
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
} from 'react-native';
import { Task } from '../types/Task';

interface Props {
  tasks: Task[];
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
  onEdit: (task: Task) => void;
}

const TaskListScreen: React.FC<Props> = ({
  tasks,
  onDelete,
  onComplete,
  onEdit,
}) => {
  return (
    <FlatList
      style={styles.container}
      data={tasks}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={[styles.title, item.completed && styles.completed]}>
            {item.name}
          </Text>
          <Text style={item.completed && styles.completed}>{item.description}</Text>
          <Text style={item.completed && styles.completed}>{item.date}</Text>

          <View style={styles.buttons}>
            <Pressable onPress={() => onEdit(item)} style={styles.editBtn}>
              <Text>Edit</Text>
            </Pressable>

            <Pressable onPress={() => onDelete(item.id)} style={styles.deleteBtn}>
              <Text>Delete</Text>
            </Pressable>

            {!item.completed && (
              <Pressable onPress={() => onComplete(item.id)} style={styles.completeBtn}>
                <Text>Complete</Text>
              </Pressable>
            )}
          </View>
        </View>
      )}
    />
  );
};

export default TaskListScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#151515',
    flex: 1,
  },
  card: {
    backgroundColor: '#b7b7b7',
    padding: 15,
    margin: 10,
    borderRadius: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#555',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  editBtn: {
    backgroundColor: '#ccc',
    padding: 8,
    borderRadius: 10,
  },
  deleteBtn: {
    backgroundColor: '#f88',
    padding: 8,
    borderRadius: 10,
  },
  completeBtn: {
    backgroundColor: '#8f8',
    padding: 8,
    borderRadius: 10,
  },
});
