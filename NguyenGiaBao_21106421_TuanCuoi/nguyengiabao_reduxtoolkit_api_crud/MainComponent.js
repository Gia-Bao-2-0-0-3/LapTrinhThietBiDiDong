// MainComponent.js
import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, ActivityIndicator, TextInput,ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, createData, updateData, deleteData } from './apiSlice';

const MainComponent = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.api);
  const [newItemTitle, setNewItemTitle] = useState('');
  const [updateItemId, setUpdateItemId] = useState(null);
  const [updateItemTitle, setUpdateItemTitle] = useState('');

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleCreate = () => {
    dispatch(createData({ title: newItemTitle }));
    setNewItemTitle('');
  };

  const handleUpdate = () => {
    if (updateItemId) {
      dispatch(updateData({ id: updateItemId, updatedData: { title: updateItemTitle } }));
      setUpdateItemId(null);
      setUpdateItemTitle('');
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteData(id));
  };

  const handleEdit = (item) => {
    setUpdateItemId(item.id);
    setUpdateItemTitle(item.title);
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <ScrollView style={{width:"100%"}}>
      <TextInput
        placeholder="Item Title"
        value={updateItemId ? updateItemTitle : newItemTitle}
        onChangeText={updateItemId ? setUpdateItemTitle : setNewItemTitle}
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
      />
      <Button
        title={updateItemId ? "Update" : "Create"}
        onPress={updateItemId ? handleUpdate : handleCreate}
      />

      <FlatList
        data={data}
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

export default MainComponent;