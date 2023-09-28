import React from 'react';
import {View, Image, Text, ScrollView, Pressable} from 'react-native';
import ProfilePicture from '../../assets/images/profile.png';
import Spotify from '../../assets/svgs/spotify.svg';
import {styles} from './styles';

const Profile = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profilePicture}>
        <Image source={ProfilePicture} />
        <Text style={styles.name}>David Lyon</Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <Text style={styles.infoText}>Servicio de Música</Text>
          <Spotify width={24} height={24} />
        </View>
        <View style={styles.info}>
          <Text style={styles.infoText}>Usuario</Text>
          <Text style={styles.email}>user@domain.com</Text>
        </View>
      </View>

      <Pressable style={styles.logoutBtn}>
        <Text>Salir</Text>
      </Pressable>
    </ScrollView>
  );
};

export default Profile;
