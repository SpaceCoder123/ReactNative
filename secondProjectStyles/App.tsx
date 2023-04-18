/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import {SafeAreaView, ScrollView} from "react-native";
import React from "react";
import FlatCard from "./components/flatCard";
import ElevatedCards from "./components/ElevatedCards";
import FancyCard from "./components/FancyCard";

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <ElevatedCards />
        <FancyCard/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
