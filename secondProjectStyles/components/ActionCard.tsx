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
          <Text style={styles.headerContainer}>
            Nebula is an important feature in space
          </Text>
        </View>
        <Image
          source={require("../assets/images/northernLights.jpg")}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text numberOfLines={3} style={styles.cardDescription}>
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
            style={styles.footerContainer}
          >
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openWebsite("https://www.linkedin.com/in/mohan-ram-tr/")
            }
          >
            <Text style={styles.socialLinks}>Follow me for more</Text>
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
  card: {
    width: 300,
    height: 390,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  headingContainer: {},
  headerContainer: {},
  cardElevation: {
    backgroundColor: "#FFFFFF",
    color: "#000000",
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    width: "100%",
    marginBottom: 8,
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardDescription: {
    color: "#242B2E",
    fontSize: 12,
    marginBottom: 8,
    textAlign: "justify",
  },
  footerContainer: {},
  socialLinks: {},
});
