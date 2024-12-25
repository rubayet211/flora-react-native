import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View className='flex-1 items-center justify-center bg-primary'>
      <Text className='text-3xl'>FLora!</Text>
      <StatusBar style="auto" />
      <Link href="/(tabs)/profile" style={{ color: 'blue'}}>Go To Profile</Link>
      <Link href="/(tabs)/home" style={{ color: 'red'}}>Go To Home</Link>
    </View>
  );
}

