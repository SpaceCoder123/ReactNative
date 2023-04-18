/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import {View, Text, StyleSheet, Image} from "react-native";
import React from "react";

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>FancyCard</Text>
      <View style={[styles.card, styles.cardElevation]}>
        <Image
          source={require("../assets/images/northernLights.jpg")}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Northern Lights</Text>
          <Text style={styles.cardLabel}>Sweden</Text>
          <Text style={styles.cardDescription}>
            An aurora (pl: auroras or aurorae), also commonly known as the polar
            lights, is a natural light display in Earth's sky, predominantly
            seen in high-latitude regions (around the Arctic and Antarctic).
            Auroras display dynamic patterns of brilliant lights that appear as
            curtains, rays, spirals, or dynamic flickers covering the entire sky
          </Text>
          <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCard;
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
  cardLabel: {color: "#000000", fontSize: 14, marginBottom: 6},
  cardTitle: {
    color: "#000000",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 4,
  },
  cardFooter: {color: "#000000", fontSize: 10, marginBottom: 4},
});
