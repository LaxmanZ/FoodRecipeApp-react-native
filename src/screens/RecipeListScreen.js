import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import SearchFilter from '../components/SearchFilter';
import CategoriesFilter from '../components/CategoriesFilter';
import RecipesCard from '../components/RecipesCard';

const RecipeListScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
      {/* Render Header  */}
      <Header headerText={'Hi, Zoro'} headerIcon={'bell-o'} />

      {/* Search Filter  */}
      <SearchFilter icon="search" placeHolder={'Search Recipe Here'} />

      {/* Category Filter  */}
      <View style={{ marginTop: 15 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Categories</Text>
        {/* Categories List  */}
        <CategoriesFilter />
      </View>

      {/* Recipes Filter  */}
      <View style={{ flex: 1, marginTop: 15, marginBottom: 30 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Recipes</Text>
        {/* Recipe List  */}
        <RecipesCard />
      </View>
    </SafeAreaView>
  );
};

export default RecipeListScreen;

const styles = StyleSheet.create({});
