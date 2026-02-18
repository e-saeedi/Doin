import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Task } from '../types/Task';

interface AddTaskScreenProps {
  navigation: any;
  onSave: (task: Task) => void;
  existingTask?: Task; 
}

const AddTaskScreen: React.FC<AddTaskScreenProps> = ({
  navigation,
  onSave,
  existingTask,
}) => {

  const [taskName, setTaskName] = useState<string>(existingTask?.name ?? '');
  const [description, setDescription] = useState<string>(existingTask?.description ?? '');
  const [dueDate, setDueDate] = useState<string>(existingTask?.date ?? '');

  useEffect(() => {
    if (existingTask) {
      setTaskName(existingTask.name);
      setDescription(existingTask.description);
      setDueDate(existingTask.date);
    }
  }, [existingTask]);

  const handleSave = () => {
    if (!taskName) return;

    const task: Task = {
      id: existingTask?.id ?? Date.now().toString(), 
      name: taskName,
      description,
      date: dueDate,
      completed: existingTask?.completed ?? false,
    };

    onSave(task);
    navigation.reset({
      index: 0,
      routes: [{ name: 'TaskList' }]
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>{existingTask ? 'Edit Task' : 'Add New Task'}</Text>

        <Text style={styles.label}>Task Name</Text>
        <TextInput
          style={styles.input}
          value={taskName}
          onChangeText={setTaskName}
          placeholder="Enter task name"
          placeholderTextColor="#aaa"
        />

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, { height: 100 }]}
          value={description}
          onChangeText={setDescription} 
          placeholder="Enter description"
          placeholderTextColor="#aaa"
          multiline
        />

        <Text style={styles.label}>Due Date</Text>
        <TextInput
          style={styles.input}
          value={dueDate}
          onChangeText={setDueDate}
          placeholder="YYYY-MM-DD"
          placeholderTextColor="#aaa"
        />

        <View style={styles.buttonGroup}>
          <Pressable style={styles.cancelBtn} onPress={() => navigation.goBack()}>
            <Text style={styles.cancelText}>Cancel</Text>
          </Pressable>

          <Pressable style={styles.saveBtn} onPress={handleSave}>
            <Text style={styles.saveText}>Save</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default AddTaskScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#151515',
    justifyContent: 'center',
  },
  box: {
    padding: 20,
    backgroundColor: '#b7b7b7',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    color: '#151515',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#151515',
    color: 'white',
    borderRadius: 15,
    padding: 10,
    marginBottom: 15,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  cancelBtn: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 25,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  cancelText: {
    color: '#151515',
    fontWeight: 'bold',
  },
  saveBtn: {
    backgroundColor: '#c00',
    padding: 12,
    borderRadius: 25,
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
  },
  saveText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
