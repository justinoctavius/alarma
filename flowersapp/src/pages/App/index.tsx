import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeIcon from '../../assets/svgs/home_icon.svg';
import ProfileIcon from '../../assets/svgs/profile_icon.svg';
import MusicIcon from '../../assets/svgs/music_icon.svg';
import CategoryIcon from '../../assets/svgs/category_icon.svg';
import CalendarIcon from '../../assets/svgs/calendar.svg';

import Home from '../Home';

import {RootStackParamList} from './types';
import Profile from '../Profile';
import {styles} from './styles';
import Music from '../Music';
import Categories from '../Categories';
import {Calendar} from '../Calendar';

const Tab = createMaterialTopTabNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarItemStyle: styles.tabBarItemStyle,
          tabBarIconStyle: styles.tabBarIconStyle,
          tabBarStyle: styles.tabBarStyle,
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => <HomeIcon width={43} height={43} />,
            tabBarLabel: '',
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: () => <ProfileIcon width={43} height={43} />,
            tabBarLabel: 'Perfil',
          }}
        />
        <Tab.Screen
          name="Music"
          component={Music}
          options={{
            tabBarIcon: () => <MusicIcon width={43} height={43} />,
            tabBarLabel: 'Musica',
          }}
        />
        <Tab.Screen
          name="Categories"
          component={Categories}
          options={{
            tabBarIcon: () => <CategoryIcon width={43} height={43} />,
            tabBarLabel: 'Categorias',
          }}
        />
        <Tab.Screen
          name="Calendar"
          component={Calendar}
          options={{
            tabBarIcon: () => <CalendarIcon width={43} height={43} />,
            tabBarLabel: 'Calendario',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
