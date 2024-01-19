import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { PickerItem } from './src/Picker';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.areaMoeda}>
        <Text style={styles.titulo}>Selecione sua moeda</Text>
        <PickerItem/>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101215',
    paddingTop: 40,
    alignItems: 'center'
  },
  areaMoeda: {
    backgroundColor: '#f9f9f9',
    width: '90%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    padding: 8,
  },
  titulo: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
    paddingLeft: 5,
    paddingTop: 5,
  }
});
