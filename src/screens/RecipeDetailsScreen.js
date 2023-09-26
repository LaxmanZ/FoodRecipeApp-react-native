import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { ScrollView } from 'react-native';

const RecipeDetailsScreen = ({ navigation, route }) => {
  const { item } = route.params;

  return (
    <View style={{ flex: 1, backgroundColor: item.color }}>
      <SafeAreaView
        style={{ flexDirection: 'row', marginHorizontal: 16, marginTop: 37 }}
      >
        <Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-circle-left" size={28} color="white" />
        </Pressable>
        <FontAwesome name="heart-o" size={28} color="white" />
      </SafeAreaView>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          marginTop: 230,
          borderTopLeftRadius: 56,
          borderTopRightRadius: 56,
          alignItems: 'center',
          paddingHorizontal: 15,
        }}
      >
        <View
          style={{ width: 300, height: 300, position: 'absolute', top: -150 }}
        >
          <Image
            style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
            source={item.image}
          />
        </View>

        <Text style={{ marginTop: 140, fontSize: 28, fontWeight: 'bold' }}>
          {item.name}
        </Text>

        <View style={{ flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={{ fontSize: 20, marginVertical: 16 }}>
              {item.description}{' '}
            </Text>

            {/* Recipe Extra Details  */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <View
                style={{
                  backgroundColor: 'rgba(255, 0, 0, 0.38)',
                  width: 100,
                  paddingVertical: 20,
                  borderRadius: 8,
                  alignItems: 'center',
                }}
              >
                <Text style={{ fontSize: 35 }}>⏰</Text>
                <Text style={{ fontSize: 20, fontWeight: '400' }}>
                  {item.time}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: 'rgba(135, 206, 235, 0.8)',
                  width: 100,
                  paddingVertical: 20,
                  borderRadius: 8,
                  alignItems: 'center',
                }}
              >
                <Text style={{ fontSize: 35 }}>🥣</Text>
                <Text style={{ fontSize: 20, fontWeight: '400' }}>
                  {item.difficulty}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: 'rgba(255, 165, 0, 0.48)',
                  width: 100,
                  paddingVertical: 20,
                  borderRadius: 8,
                  alignItems: 'center',
                }}
              >
                <Text style={{ fontSize: 35 }}>🔥</Text>
                <Text style={{ fontSize: 20, fontWeight: '400' }}>
                  {item.calories}
                </Text>
              </View>
            </View>

            {/* Recipe Ingredients  */}
            <View style={{ marginVertical: 22, alignSelf: 'flex-start' }}>
              <Text
                style={{ fontSize: 22, fontWeight: '600', marginBottom: 6 }}
              >
                Ingredients:
              </Text>

              {item.ingredients.map((ingredient, index) => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginVertical: 2,
                    }}
                    key={index}
                  >
                    <View
                      style={{
                        backgroundColor: 'red',
                        height: 10,
                        width: 10,
                        borderRadius: 5,
                      }}
                    ></View>
                    <Text style={{ fontSize: 18, marginLeft: 6 }}>
                      {ingredient}
                    </Text>
                  </View>
                );
              })}
            </View>
            {/* Recipe Steps  */}
            <View style={{ marginVertical: 22, alignSelf: 'flex-start' }}>
              <Text
                style={{ fontSize: 22, fontWeight: '600', marginBottom: 6 }}
              >
                Steps:
              </Text>

              {item.steps.map((step, index) => {
                return (
                  <Text
                    key={index}
                    style={{ fontSize: 18, marginLeft: 6, marginVertical: 4 }}
                  >{`${index + 1} ) ${step}`}</Text>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default RecipeDetailsScreen;

const styles = StyleSheet.create({});
