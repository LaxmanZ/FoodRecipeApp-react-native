import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import SearchFilter from '../components/SearchFilter';

const RecipeListScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
      {/* Render Header  */}
      <Header headerText={'Hi, Zoro'} headerIcon={'bell-o'} />
      <SearchFilter icon="search" placeHolder={'Search Recipe Here'} />
    </SafeAreaView>
  );
};

export default RecipeListScreen;

const styles = StyleSheet.create({});
