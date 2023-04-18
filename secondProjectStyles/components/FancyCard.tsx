/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import {View, Text, StyleSheet, Image} from "react-native";
import React from "react";

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>FancyCard</Text>
      <Image
        source={require("../assets/images/northernLights.jpg")}
        style={styles.cardImage}
      />
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>Northern Lights</Text>
        <Text style={styles.cardLabel}>Pink City</Text>
        <Text style={styles.cardDescription}>
          An aurora (pl: auroras or aurorae), also commonly known as the polar
          lights, is a natural light display in Earth's sky, predominantly seen
          in high-latitude regions (around the Arctic and Antarctic). Auroras
          display dynamic patterns of brilliant lights that appear as curtains,
          rays, spirals, or dynamic flickers covering the entire sky
        </Text>
        <Text style={styles.cardFooter}>12 mins away</Text>
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
  cardImage: {
    height: 180,
  },
  cardBody: {},
  cardDescription: {},
  cardLabel: {},
  cardTitle: {},
  cardFooter: {},
});
