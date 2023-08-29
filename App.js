import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoal) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoal, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          modalIsVisible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancelAddGoal={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              paddingTop: 25,
            }}
          >
            <Text style={styles.goalsText}>Goals</Text>
          </View>
          {courseGoals.length === 0 && (
            <View style={styles.noAddedGoalsTextContainer}>
              <Text style={styles.noAddedGoalsText}>No added Goals yet!</Text>
            </View>
          )}
          <FlatList
            alwaysBounceVertical={false}
            data={courseGoals}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
  noAddedGoalsTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  noAddedGoalsText: {
    color: "whitesmoke",
    marginTop: 50,
    fontSize: 14,
  },
  goalsText: {
    color: "whitesmoke",
    fontSize: 18,
  },
});
