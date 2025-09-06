import { useColorScheme } from '@/hooks/useColorScheme';
import { Stack } from 'expo-router';
import React from 'react';
import { StatusBar } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
   <>
    <StatusBar hidden={true} />
    <Stack
      screenOptions={{
        headerShown:false
      }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="search"
        options={{
          title: 'search'
        }}
        
      />
    </Stack>
   </>
  );
}
