import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ServiceScreen = ({ route }) => {
  const { service } = route.params;

  const handleBuyPress = () => {
    // Handle the buy action here
    console.log('Buy pressed for:', service.title);
    alert('item addes succesfolly !')
  };

  return (
    <View style={styles.container}>
      <Image source={service.image} style={styles.serviceImage} />
      <Text style={styles.serviceTitle}>{service.title}</Text>
      <Text style={styles.serviceDescription}>{service.description}</Text>
      <TouchableOpacity style={styles.buyButton} onPress={handleBuyPress}>
        <Text style={styles.buyButtonText}>Buy</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  serviceImage: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  serviceTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  serviceDescription: {
    fontSize: 16,
    textAlign: 'center',
  },
  buyButton: {
    width: '100%',
    height: 40,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginTop: 16,
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ServiceScreen;
