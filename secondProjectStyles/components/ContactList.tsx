/* eslint-disable prettier/prettier */
/* eslint-disable quotes */

import {View, Text, StyleSheet, ScrollView, Image} from "react-native";
import React from "react";

const ContactList = () => {
  const contacts = [
    {
      uid: 1,
      name: "Hitesh Choudhary",
      status: "Just an extraordinary Teacher",
      imageUrl:
        "https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg",
    },
    {
      uid: 2,
      name: "Code With Harry",
      status: "A Genius",
      imageUrl:
        "https://yt3.googleusercontent.com/ytc/AGIKgqPmVT6_YQd7RIhhoy9So5Jk9Iqw8pzivKCfLPm_Yg=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      uid: 3,
      name: "Shwetabh Gangwar",
      status: "The Khatta meetha teacher",
      imageUrl:
        "https://yt3.googleusercontent.com/oVSuJbeBX7sTZz3CuQNRO5Gm-sZsBxp6sGMF5e8WjVjJdUiUMOFRzfVLMyRtHru_ysUEiEhDHqY=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      uid: 4,
      name: "Aman Dhattarwal",
      status: "Mindblowing Teacher",
      imageUrl:
        "https://wikibio.in/wp-content/uploads/2022/08/Aman-Dhattarwal.jpg",
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image source={{uri: imageUrl}} style={styles.userImage} />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  userCard: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 3,
    backgroundColor: "#8D3DAF",
    padding: 8,
    borderRadius: 10,
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    marginRight: 14,
  },
  userName: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
  userStatus: {
    color: "white",
  },
});
