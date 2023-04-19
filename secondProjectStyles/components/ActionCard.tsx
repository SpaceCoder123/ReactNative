/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import {
  View,
  Text,
  Linking,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

const ActionCard = () => {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View style={styles.card}>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.headingText, styles.cardElevation]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            Nebula is an important feature in space
          </Text>
        </View>
        <Image
          source={require("../assets/images/northernLights.jpg")}
          style={styles.cardImage}
        />
        <View>
          <Text numberOfLines={6} style={styles.cardDescription}>
            A nebula is a giant cloud of dust and gas in space. Some nebulae
            (more than one nebula) come from the gas and dust thrown out by the
            explosion of a dying star, such as a supernova. Other nebulae are
            regions where new stars are beginning to form. For this reason, some
            nebulae are called "star nurseries."
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => openWebsite("https://en.wikipedia.org/wiki/Nebula")}
          >
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openWebsite("https://www.linkedin.com/in/mohan-ram-tr/")
            }
          >
            <Text style={styles.socialLinks}>Follow me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
  headerText: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
  },
  card: {
    width: 300,
    height: 400,

    marginVertical: 12,
    marginHorizontal: 16,
  },

  cardElevation: {
    color: "#FFFFFF",
    elevation: 5,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: "#333",
    backgroundColor: "purple",
    borderRadius: 6,
  },

  headingContainer: {
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  cardImage: {
    height: 180,
    width: "100%",
    marginBottom: 8,
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
  },
  cardDescription: {
    color: "white",
    fontSize: 12,
    marginBottom: 8,
    textAlign: "justify",
  },
  footerContainer: {
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  socialLinks: {
    fontSize: 12,
    color: "#000000",
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 6,
  },
});
