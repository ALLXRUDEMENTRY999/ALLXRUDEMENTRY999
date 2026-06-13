import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

export default function App() {
  const [clouds, setClouds] = useState([]);

  const handleCreateCloud = () => {
    const newCloud = {
      id: Date.now(),
      name: `Cloud ${clouds.length + 1}`,
      createdAt: new Date().toLocaleDateString(),
    };
    setClouds([...clouds, newCloud]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>☁️ CloudVault</Text>
        <Text style={styles.subtitle}>Your Personal Cloud Storage</Text>
      </View>

      <ScrollView style={styles.content}>
        {clouds.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>No clouds yet</Text>
            <Text style={styles.emptySubtext}>Create your first cloud to get started</Text>
          </View>
        ) : (
          clouds.map((cloud) => (
            <View key={cloud.id} style={styles.cloudCard}>
              <Text style={styles.cloudName}>{cloud.name}</Text>
              <Text style={styles.cloudDate}>{cloud.createdAt}</Text>
            </View>
          ))
        )}
      </ScrollView>

      <TouchableOpacity
        style={styles.createButton}
        onPress={handleCreateCloud}
      >
        <Text style={styles.createButtonText}>+ Create Cloud</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#007AFF',
    padding: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 14,
    color: '#e0e0e0',
    marginTop: 5,
  },
  content: {
    flex: 1,
    padding: 15,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  emptySubtext: {
    fontSize: 14,
    color: '#999',
    marginTop: 10,
  },
  cloudCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  cloudName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  cloudDate: {
    fontSize: 12,
    color: '#999',
    marginTop: 5,
  },
  createButton: {
    backgroundColor: '#007AFF',
    margin: 15,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  createButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
