import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // Import Ionicons
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons"; // Import Material Icons

export default function MidSection() {
  return (
    <View style={styles.container}>
      {/* Wallet Section */}
      <View style={styles.walletContainer}>
        {/* Wallet Balance */}
        <View style={styles.balanceContainer}>
          <MaterialIcon
            name="wallet-outline"
            size={24}
            color="black"
            style={styles.icon}
          />
          <View style={styles.balanceTextContainer}>
            <Text style={styles.label}>Wallet balance</Text>
            <Text style={styles.amount}>Rp1.000.000</Text>
          </View>
        </View>

        {/* Top up Section */}
        <View style={styles.topUpContainer}>
          <TouchableOpacity style={styles.topUpButton}>
            <Icon
              name="add-circle-outline"
              size={24}
              color="black"
              style={styles.icon}
            />
            <View style={styles.balanceTextContainer}>
              <Text style={styles.label}>Top up balance</Text>
              <Text style={styles.amount}>Top up</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.divider}></View>
      <View>
        <Image
          source={require("../../assets/banner.jpg")}
          style={styles.image}
        ></Image>
      </View>
      <View style={styles.divider}></View>
      <View>
        <Text style={styles.category}>Shop by Category</Text>
      </View>
    </View>
  );
}

const { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#fff",
  },
  walletContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f3f4f6", // Light background for balance section
    padding: 15,
    borderRadius: 10,
  },
  balanceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  balanceTextContainer: {
    marginLeft: 10,
  },
  label: {
    fontSize: 16,
    color: "#6b7280", // Gray text color for "Wallet balance"
  },
  amount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000", // Black for the balance amount
  },
  topUpContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  topUpButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  topUpText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5,
    color: "#000",
  },
  icon: {
    marginLeft: 10,
  },
  divider: {
    height: 1,
    backgroundColor: "#e5e7eb", // Light gray divider
    marginVertical: 20,
  },
  image: {
    height: 100,
    width: width - 20,
    borderRadius: 10,
  },
  category: {
    marginLeft: 10,
    marginRight: 10,
    fontWeight: "bold",
    fontSize: 18,
  },
});
