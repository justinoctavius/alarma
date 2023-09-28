import React from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';
import {styles} from './styles';

const Categories = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryText}>Gym</Text>
        <View style={styles.categoryTextContainer}>
          <Text style={styles.categoryText}>When We Were Young, Adelle</Text>
        </View>
      </View>

      <View style={styles.categoryContainer}>
        <Text style={styles.categoryText}>Escuela</Text>
        <View style={styles.categoryTextContainer}>
          <Text style={styles.categoryText}>Easy on me, Adelle</Text>
        </View>
      </View>

      <Pressable style={styles.logoutBtn}>
        <Text>Nueva categoria</Text>
      </Pressable>
    </ScrollView>
  );
};

export default Categories;
