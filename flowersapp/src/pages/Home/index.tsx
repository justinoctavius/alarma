import React, {useState} from 'react';
import {View, ScrollView, Text, Pressable, TextInput} from 'react-native';
import {AlarmCard} from '../../components/AlarmCard';
import {AlarmsList} from '../../constants/data';
import AddAlarmIcon from '../../assets/svgs/add_alarm_icon.svg';
import CloseIcon from '../../assets/svgs/close_icon.svg';
import SpotifyIcon from '../../assets/svgs/spotify.svg';
import ArrowDownIcon from '../../assets/svgs/arrow_down_icon.svg';
import ArrowUpIcon from '../../assets/svgs/arrow_up_icon.svg';
import {addAlarmStyles, counterStyles, styles} from './styles';
import {AlarmDays} from '../../components/AlarmDays';

const AlarmDashboard = ({onAddPress}: {onAddPress: () => void}) => {
  return (
    <>
      <ScrollView>
        {AlarmsList.map(alarm => {
          return (
            <AlarmCard
              category={alarm.category}
              date={alarm.date}
              name={alarm.name}
              songName={alarm.songName}
              isAlarmActive={alarm.isActive}
            />
          );
        })}
      </ScrollView>
      <Pressable style={styles.addAlarmIconContainer} onPress={onAddPress}>
        <AddAlarmIcon width={50} height={50} />
      </Pressable>
    </>
  );
};

const Counter = ({maxCount}: {maxCount: number}) => {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    if (count >= maxCount) {
      setCount(0);
      return;
    }

    setCount(count + 1);
  };

  const onDecrement = () => {
    if (count <= 0) {
      setCount(maxCount);
      return;
    }

    setCount(count - 1);
  };

  return (
    <View style={counterStyles.container}>
      <Pressable onPress={onIncrement} style={counterStyles.counterBtn}>
        <ArrowUpIcon width={24} height={24} />
      </Pressable>
      <View style={counterStyles.counter}>
        <Text style={counterStyles.counterText}>{count}</Text>
      </View>
      <Pressable onPress={onDecrement} style={counterStyles.counterBtn}>
        <ArrowDownIcon width={24} height={24} />
      </Pressable>
    </View>
  );
};

const AddAlarm = ({onClosePress}: {onClosePress: () => void}) => {
  return (
    <ScrollView contentContainerStyle={addAlarmStyles.container}>
      <View style={addAlarmStyles.form}>
        <View>
          <Pressable style={addAlarmStyles.header} onPress={onClosePress}>
            <CloseIcon width={33} height={33} />
            <Text style={addAlarmStyles.title}>Nueva Alarma</Text>
          </Pressable>
          <View style={addAlarmStyles.textInputContainer}>
            <TextInput
              placeholder="Nombre..."
              style={addAlarmStyles.textInput}
            />
            <TextInput
              placeholder="Categoria..."
              style={addAlarmStyles.textInput}
            />
            <AlarmDays onSelectDay={() => {}} />
            <View style={addAlarmStyles.musicInputContainer}>
              <TextInput
                placeholder="Musica..."
                style={addAlarmStyles.musicInput}
              />
              <SpotifyIcon width={24} height={24} />
            </View>
          </View>
          <View style={addAlarmStyles.counterContainer}>
            <Counter maxCount={24} />
            <Counter maxCount={59} />
          </View>
        </View>
        <View style={styles.logoutBtnContainer}>
          <Pressable style={styles.logoutBtn} onPress={onClosePress}>
            <Text>Salir</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const Home = () => {
  const [isAddAlarm, setIsAddAlarm] = useState(false);

  return isAddAlarm ? (
    <AddAlarm onClosePress={() => setIsAddAlarm(false)} />
  ) : (
    <AlarmDashboard onAddPress={() => setIsAddAlarm(true)} />
  );
};

export default Home;
