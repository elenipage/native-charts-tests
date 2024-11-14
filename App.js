import { StyleSheet, Text, View } from "react-native";
import CalendarHeatmap from "react-native-calendar-heatmap";
import contributionData from "./Data/contributionData";

export default function App() {
  return (
    <View style={styles.container}>
      <CalendarHeatmap
        endDate={new Date("2017-04-30")}
        numDays={30}
        values={contributionData}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
