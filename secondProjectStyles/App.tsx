/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import {SafeAreaView, ScrollView} from "react-native";
import React from "react";
import FlatCard from "./components/flatCard";

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
