import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Footer: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftGroup}>
        <Text style={styles.linkText}>Contact</Text>
        <Text style={styles.linkText}>Privacy Policy</Text>
      </View>
      <Text style={styles.rightText}>@2025 SimpleTask</Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",       
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#b7b7b7",
  },
  leftGroup: {
    flexDirection: "row",
    gap: 15,                     
  },
  linkText: {
    color: "black",
    fontSize: 14,
  },
  rightText: {
    color: "black",
    fontSize: 14,
  },
});
