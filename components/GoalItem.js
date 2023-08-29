import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ text, id, onDeleteItem }) => {
  // this is alternative way of handling instead of binding 'id' to onDeleteItem fn

  //   const onDeleteItemHandler = () => {
  //     onDeleteItem(id);
  //   };
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={onDeleteItem.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 8,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
