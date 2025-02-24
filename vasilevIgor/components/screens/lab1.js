import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { counterSlice } from "../../store";

const Lab1 = () => {
  const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();

  return (
    <View>
      <Text style={styles.number}>{counter}</Text>
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.commonButton}
          onPress={() => {
            setCounter(counter + 1);
            dispatch(counterSlice.actions.increment());
          }}
        >
          <Text style={styles.commonText}>+1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.commonButton}
          onPress={() => {
            setCounter(0);
            dispatch(counterSlice.actions.reset());
          }}
        >
          <Text style={styles.commonText}>Clear</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.commonButton}
          onPress={() => {
            setCounter(counter - 1);
            dispatch(counterSlice.actions.decrement());
          }}
        >
          <Text style={styles.commonText}>-1</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonGroup: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },

  number: {
    fontSize: 50,
    textAlign: "center",
    width: "100%",
    padding: 20,
    marginBottom: 10,
  },
  commonButton: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    borderRadius: 4,
    backgroundColor: "pink",
    width: 200,
    height: 80,
  },
  commonText: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default Lab1;
