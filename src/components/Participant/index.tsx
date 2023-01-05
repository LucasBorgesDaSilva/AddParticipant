import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface ParticipantProps {
  name: string;
  onRemove: () => void;
}

export function Participant(props: ParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        { props.name }
      </Text>

      <TouchableOpacity style={styles.button} onPress={props.onRemove}>
        <Text style={styles.buttonText}>
          -
        </Text>
      </TouchableOpacity>
    </View>
  )
}