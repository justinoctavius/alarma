import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import {AlarmDays} from '../AlarmDays';
import {Props} from './types';
import {styles} from './styles';
import ActiveIcon from '../../assets/svgs/active_icon.svg';
import ActiveSelectedIcon from '../../assets/svgs/active_selected_icon.svg';
import InactiveSelectedIcon from '../../assets/svgs/inactive_selected_icon.svg';
import InactiveIcon from '../../assets/svgs/inactive_icon.svg';
import TrashIcon from '../../assets/svgs/trash.svg';
import SpotifyIcon from '../../assets/svgs/spotify.svg';

export const AlarmCard = ({
  name,
  category,
  date,
  songName,
  isAlarmActive = true,
}: Props) => {
  const [isActive, setIsActive] = useState(isAlarmActive);

  const onActiveTogglePress = (isActive: boolean) => {
    setIsActive(isActive);
  };

  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <View style={styles.infoContainer}>
          <View style={styles.actionToogle}>
            <Pressable onPress={() => onActiveTogglePress(true)}>
              {isActive ? (
                <ActiveSelectedIcon width={24} height={24} />
              ) : (
                <ActiveIcon width={24} height={24} />
              )}
            </Pressable>
            <Pressable onPress={() => onActiveTogglePress(false)}>
              {!isActive ? (
                <InactiveSelectedIcon width={24} height={24} />
              ) : (
                <InactiveIcon width={24} height={24} />
              )}
            </Pressable>
          </View>
          <View style={styles.body}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.categoryContainer}>
              <Text>{category}</Text>
            </View>
            <View style={styles.time}>
              <Text style={styles.timeText}>
                {date.getHours()}:{date.getMinutes()}
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Pressable>
            <TrashIcon width={40} height={40} />
          </Pressable>
        </View>
      </View>
      <AlarmDays onSelectDay={() => {}} />
      <View style={styles.songContainer}>
        <Text style={styles.songText}>{songName}</Text>
        <SpotifyIcon width={24} height={24} />
      </View>
    </View>
  );
};
