import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft } from 'lucide-react-native';
import { useColorScheme, getColors } from '../../hooks/useColorScheme';
import { router } from 'expo-router';
import TrainerClientsScreen from '../../components/trainers/TrainerAnalyticsView';
import TrainerAnalyticsView from '../../components/trainers/TrainerAnalyticsView';

export default function TrainerAnalyticsScreen() {
  const colorScheme = useColorScheme();
  const colors = getColors(colorScheme);
  const styles = createStyles(colors);

  return (
    <SafeAreaView style={styles.container}>
      <TrainerAnalyticsView />
    </SafeAreaView>
  );
}

const createStyles = (colors: any) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  backButton: {
    padding: 4,
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: colors.text,
  },
});