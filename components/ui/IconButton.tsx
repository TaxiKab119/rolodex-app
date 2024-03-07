import {Pressable, View, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

interface IconButtonProps {
  name: keyof typeof Ionicons.glyphMap, // Union type of all the keys of the gylphMap for Ionicons
  size: number,
  color?: string
  onPress: () => void
}

function IconButton(props : IconButtonProps) {
  const {name, size, color, onPress} = props;
  return (
    <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
      <View style={styles.buttonContainer}>
        <Ionicons name={name} size={size} color={color}/>
      </View>
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2
  },
  pressed: {
    opacity: 0.5
  }
});