import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';

export default function IdeaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your App Idea</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.subtitle}>
        Placeholder screen. Share your idea and we'll implement it here.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 12,
    lineHeight: 22,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
