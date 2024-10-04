import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // Import vector icons

const { width } = Dimensions.get("window"); // Get screen width

export default function Header() {
  return (
    <View style={styles.container}>
      {/* Top Row: Logo and Right Icons */}
      <View style={styles.topRow}>
        <Text style={styles.logo}>Sport Shoes</Text>
        <View style={styles.iconsContainer}>
          <TouchableOpacity>
            <Icon name="heart-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="cart-outline"
              size={24}
              color="black"
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="notifications-outline"
              size={24}
              color="black"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Full-Width Search Bar Below the Header */}
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search items" />
        <TouchableOpacity style={styles.searchIcon}>
          <Icon name="search-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%", // Ensure the container takes full screen width
    padding: 10,
    backgroundColor: "#fff",
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#f97316", // Orange color for logo
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginLeft: 15,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f4f6", // Light background for the search bar
    borderRadius: 10,
    padding: 5,
    marginTop: 15, // Space between header and search bar
    width: width - 20, // Full width minus padding
    alignSelf: "center", // Center the search bar horizontally
  },
  searchInput: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 16,
  },
  searchIcon: {
    backgroundColor: "#f97316", // Orange search button
    padding: 10,
    borderRadius: 8,
  },
});
