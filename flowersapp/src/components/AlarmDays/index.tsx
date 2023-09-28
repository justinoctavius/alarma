import React, {useEffect} from 'react';
import {View, Text, Pressable} from 'react-native';
import {useDays} from './useDays';
import {Props} from './types';
import {statusStyles, styles} from './styles';

export const AlarmDays = ({onSelectDay}: Props) => {
  const {days, onSelect, selected} = useDays();

  const dayStyles = (isSelected: boolean) => ({
    ...styles.day,
    ...(isSelected ? statusStyles.selected : statusStyles.default),
  });

  const dayTextStyles = (isSelected: boolean) => ({
    ...styles.text,
    ...(isSelected ? statusStyles.selectedText : statusStyles.defaultText),
  });

  useEffect(() => {
    if (selected) {
      onSelectDay(selected.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return (
    <View style={styles.container}>
      {days.map(day => (
        <Pressable
          key={`day-${day}`}
          onPress={() => onSelect(day)}
          style={dayStyles(selected?.id === day.id)}>
          <Text style={dayTextStyles(selected?.id === day.id)}>{day.desc}</Text>
        </Pressable>
      ))}
    </View>
  );
};
