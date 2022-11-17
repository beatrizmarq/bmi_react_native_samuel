import { StyleSheet, View } from "react-native";
import { colors } from "../constants";

export const Card = (props) => {
  const { children } = props;

  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.shape,
    borderColor: colors.blackMedium,
    borderWidth: 1,
    padding: 16,
    borderRadius: 8,
    margin: 16,
    width: "90%",
  },
});
