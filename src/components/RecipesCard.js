import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native';
import { colors, recipeList } from '../Constant';
import { Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Pressable } from 'react-native';

const RecipesCard = () => {
  return (
    <View>
      <FlatList
        data={recipeList}
        renderItem={({ item, index }) => (
          <Pressable
            style={{
              backgroundColor: colors.COLOR_LIGHT,
              marginVertical: 16,
              borderRadius: 16,
              paddingVertical: 26,
              paddingHorizontal: 10,
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 7,
            }}
          >
            <Image
              style={{ width: 150, height: 150, resizeMode: 'center' }}
              source={item.image}
            />
            <Text key={index}>{item.name}</Text>
            <View style={{ flexDirection: 'row', marginTop: 8 }}>
              <Text>{item.time}</Text>
              <Text> | </Text>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ marginRight: 4 }}>{item.rating}</Text>
                <FontAwesome
                  name="star"
                  size={16}
                  color={colors.COLOR_PRIMARY}
                />
              </View>
            </View>
          </Pressable>
        )}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default RecipesCard;

const styles = StyleSheet.create({});
