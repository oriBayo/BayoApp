import { View, Text, Image, ImageSourcePropType } from 'react-native';
import { Tabs, Redirect } from 'expo-router';
import React from 'react';
import { icons } from '../../constants';

type TabIconProps = {
  icon: string;
  color: string;
  name: string;
  focused: boolean;
};

const TabIcon = ({ icon, color, name, focused }: TabIconProps) => {
  return (
    <View className='w-20 absolute -bottom-4 items-center justify-center gap-1'>
      <Image
        source={icon as ImageSourcePropType}
        resizeMode='contain'
        tintColor={color}
        className='w-5 h-5 '
      />
      <Text
        className={`${focused ? 'font-Oswald' : 'font-normal'} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#FFA001',
          tabBarInactiveTintColor: '#CDCDE0',
          tabBarStyle: {
            backgroundColor: '#161622',
            borderTopWidth: 1,
            borderTopColor: '#232533',
            height: 70,
          },
        }}
      >
        <Tabs.Screen
          name='home'
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                focused={focused}
                name='Home'
              />
            ),
          }}
        />

        <Tabs.Screen
          name='bookmark'
          options={{
            title: 'Bookmark',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.bookmark}
                color={color}
                focused={focused}
                name='Bookmark'
              />
            ),
          }}
        />

        <Tabs.Screen
          name='create'
          options={{
            title: 'Create',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.plus}
                color={color}
                focused={focused}
                name='create'
              />
            ),
          }}
        />

        <Tabs.Screen
          name='profile'
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                focused={focused}
                name='Profile'
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
