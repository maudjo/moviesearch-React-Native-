import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../store/store";
import { StyleSheet, Text, View } from "react-native";
import { CheckBox } from "react-native-elements";
import RadioForm from "react-native-simple-radio-button";
import { useDispatch } from "react-redux";
import { updateSort } from "../store/store";

function SortComponent() {
  const dispatch = useDispatch();
  const sort: string = useSelector((state: AppState) => state.sort);

  const radio_props = [
    { label: "Ratings", value: 0 },
    { label: "Year", value: 1 },
    { label: "starRating", value: 2 },
  ];

  const [state, setState] = useState(radio_props.findIndex((item) => item.label === sort )); 

  const initiateSort = (e: any) => {
    let label: string = radio_props[e].label;
    dispatch(updateSort(label));
    setState(e);
    
  };


  return (
    <View style={styles.radioButton}>
      <RadioForm
        initial={state}
        radio_props={radio_props}
        buttonColor={"#7e57c2"}
        //buttonSize={30}
        buttonWrapStyle={{ margin: 10000 }}
        selectedButtonColor="#7e57c2"
        onPress={(e: any) => {
          initiateSort(e);
          
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  radioButton: {
    padding: 30,
  },
});

export default SortComponent;
