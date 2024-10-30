import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, TextInput, ActivityIndicator,ScrollView} from 'react-native';
import { useRecoilState, useRecoilValue } from 'recoil';
import { todoListState, filteredTodoListState } from './recoilState';
import { fetchTodos, createTodo, updateTodo, deleteTodo } from './api';

const TodoApp = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const filteredTodoList = useRecoilValue(filteredTodoListState);
  const [loading, setLoading] = useState(true);
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [updateTodoId, setUpdateTodoId] = useState(null);
  const [updateTodoTitle, setUpdateTodoTitle] = useState('');

  useEffect(() => {
    const loadTodos = async () => {
      const todos = await fetchTodos();
      setTodoList(todos);
      setLoading(false);
    };
    loadTodos();
  }, [setTodoList]);

  const handleCreate = async () => {
    const newTodo = await createTodo({ title: newTodoTitle, completed: false });
    setTodoList((oldTodoList) => [...oldTodoList, newTodo]);
    setNewTodoTitle('');
  };

  const handleUpdate = async () => {
    if (updateTodoId) {
      const updatedTodo = await updateTodo(updateTodoId, { title: updateTodoTitle });
      setTodoList((oldTodoList) =>
        oldTodoList.map((todo) => (todo.id === updateTodoId ? updatedTodo : todo))
      );
      setUpdateTodoId(null);
      setUpdateTodoTitle('');
    }
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    setTodoList((oldTodoList) => oldTodoList.filter((todo) => todo.id !== id));
  };

  const handleEdit = (item) => {
    setUpdateTodoId(item.id);
    setUpdateTodoTitle(item.title);
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <ScrollView style={{width:"100%"}}>
      <TextInput
        placeholder="Todo Title"
        value={updateTodoId ? updateTodoTitle : newTodoTitle}
        onChangeText={updateTodoId ? setUpdateTodoTitle : setNewTodoTitle}
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
      />
      <Button
        title={updateTodoId ? "Update" : "Create"}
        onPress={updateTodoId ? handleUpdate : handleCreate}
      />

      <FlatList
        data={filteredTodoList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, borderWidth: 1, borderRadius: 10 }}>
            <Text>{item.title}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Button title="Edit" onPress={() => handleEdit(item)} />
              <Button title="Delete" onPress={() => handleDelete(item.id)} />
            </View>
          </View>
        )}
      />
    </ScrollView>
  );
};

export default TodoApp;