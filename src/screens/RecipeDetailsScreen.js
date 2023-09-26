import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Pressable } from 'react-native';

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

        <Text style={{ fontSize: 20, marginVertical: 16 }}>
          {item.description}{' '}
        </Text>

        {/* Recipe Extra Details  */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
          <View
            style={{
              backgroundColor: 'rgba(255, 0, 0, 0.38)',
              paddingHorizontal: 16,
              paddingVertical: 20,
              borderRadius: 8,
              alignItems: 'center',
            }}
          >
            <Text style={{ fontSize: 35 }}>⏰</Text>
            <Text style={{ fontSize: 20, fontWeight: '400' }}>{item.time}</Text>
          </View>
          <View
            style={{
              backgroundColor: 'rgba(135, 206, 235, 0.8)',
              paddingHorizontal: 16,
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
              paddingHorizontal: 16,
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
      </View>
    </View>
  );
};

export default RecipeDetailsScreen;

const styles = StyleSheet.create({});
