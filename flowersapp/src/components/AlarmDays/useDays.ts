import {useEffect, useState} from 'react';
import {DayItem} from './types';

export const useDays = () => {
  const [selected, setSelected] = useState<DayItem>();
  const [days, setDays] = useState<DayItem[]>([]);

  const createDaysArray = () => {
    return ['D', 'L', 'Mar', 'Mier', 'J', 'V', 'S'].map((day, index) => ({
      desc: day,
      id: index + 1,
    }));
  };

  const onSelect = (day: DayItem) => {
    if (selected?.id === day.id) {
      setSelected(undefined);
      return;
    }

    setSelected(day);
  };

  useEffect(() => {
    setDays(createDaysArray());
  }, []);

  return {
    days,
    onSelect,
    selected,
  };
};
