/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import {SafeAreaView, ScrollView} from "react-native";
import React from "react";
import FlatCard from "./components/flatCard";
import ElevatedCards from "./components/ElevatedCards";

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <ElevatedCards/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
