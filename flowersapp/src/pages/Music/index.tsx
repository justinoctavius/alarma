import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Spotify from '../../assets/svgs/spotify.svg';
import YoutubeMusicIcon from '../../assets/svgs/youtube_music_icon.svg';
import AmazonMusicIcon from '../../assets/svgs/amazon_music.svg';
import {styles} from './styles';

const Music = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.musicContainer}>
        <Spotify width={32} height={32} style={styles.musicIcon} />
        <Text style={styles.musicText}>Spotify</Text>
      </View>

      <View style={styles.musicContainer}>
        <YoutubeMusicIcon width={32} height={32} style={styles.musicIcon} />
        <Text style={styles.musicText}>Youtube Music</Text>
      </View>

      <View style={styles.musicContainer}>
        <AmazonMusicIcon width={32} height={32} style={styles.musicIcon} />
        <Text style={styles.musicText}>Amazon Music</Text>
      </View>
    </ScrollView>
  );
};

export default Music;
