import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>FLora!</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{ color: 'blue'}}>Go To Profile</Link>
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
 }
});
