import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

const services = [
  {
    id: "1",
    title: "Smartphone Samsung",
    image: require("../assets/smartphone.jpg"),
    description:
      "Double SIM - Ecran 6.6' Full HD+ (1080 x 2408 px) - Processeur : Exynos 1330 Octo-Core (2.2GHz , 2GHz) - RAM 4 Go - Mémoire 128 Go - Android 13 - Caméra arrière Quad 50 MP + 2.0 MP + 2.0 MP, Caméra frontale 13 MP - Lecteur d'empreintes Digitales - 4G - Bluetooth 5.2 - GPS - Wifi - Batterie 5000 mAh - avec charge rapide 15W - Couleur Vert - Garantie 1 an",
  },
  {
    id: "2",
    title: "TV Sony",
    image: require("../assets/tv_sony.png"),
    description:
      "Our BRAVIA XR™ TV takes vision and sound to the next level with the ingenious Cognitive Processor XR. It understands how humans see and hear, providing a whole new experience that immerses you completely in the scene.",
  },
  {
    id: "3",
    title: "Smartwatch Realme",
    image: require("../assets/Smartwatch.png"),
    description:
      "3.5cm (1.4') Large Color Touchscreen with a high resolution of 320 x 320 pixels can display vivid and lifelike visuals which are so captivating that you'll never want to look away. Its responsive touch lets you effortlessly control the watch.",
  },
  {
    id: "4",
    title: "Tablete Nokia",
    image: require("../assets/Nokia.png"),
    description:
      "Nokia T20 Tablet 4GB price in Albania (Tirana, Durrës, Elbasan) starts from LEK 23,896. 4 GB RAM / 64 GB internal storage, Deep Ocean color, 8 MP Single rear camera and 5 MP selfie camera, Processor Unisoc T610 4G, OS Android 11, Battery Capacity 8200mAh, Nokia Tab T20 4G tab 6.5 inch display.",
  },
];

const HomeScreen = ({ navigation }) => {
  const handleLogout = () => {
    // Implement your logout logic here
    console.log("User logged out");
    navigation.navigate("Log in");
  };

  const handleServicePress = (service) => {
    // Handle service selection here, e.g., navigate to a specific service screen
    console.log("Selected Product:", service);
    // Example navigation to a service screen:
    navigation.navigate("Product screen", { service });
  };

  const renderServiceItem = ({ item }) => (
    <TouchableOpacity
      style={styles.serviceItem}
      onPress={() => handleServicePress(item)}
    >
      <Text style={styles.serviceTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to the Home Screen!</Text>
      <Text>products list:</Text>
      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={renderServiceItem}
        style={styles.serviceList}
      />
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 16,
  },
  welcomeText: {
    fontSize: 20,
    marginBottom: 20,
  },
  serviceList: {
    width: "100%",
    marginTop: 12,
  },
  serviceItem: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  serviceDescription: {
    fontSize: 14,
    color: "#666",
  },
  logoutButton: {
    width: "100%",
    height: 40,
    backgroundColor: "#FF0000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    marginTop: 12,
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HomeScreen;
