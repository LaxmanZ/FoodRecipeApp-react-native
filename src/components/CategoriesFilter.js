import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { categories, colors } from '../Constant';

const CategoriesFilter = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => {
          return (
            <View
              style={{
                backgroundColor:
                  index === 0 ? colors.COLOR_PRIMARY : colors.COLOR_LIGHT,
                marginRight: 30,
                borderRadius: 8,
                paddingHorizontal: 16,
                paddingVertical: 12,
                marginVertical: 16,

                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 7,
              }}
              key={index}
            >
              <Text
                key={index}
                style={{
                  color: index === 0 && colors.COLOR_LIGHT,
                  fontSize: 18,
                }}
              >
                {category.category}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CategoriesFilter;

const styles = StyleSheet.create({});
