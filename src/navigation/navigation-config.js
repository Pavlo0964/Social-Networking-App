import { Animated, Easing } from "react-native";

const transitionConfig = () => ({
  transitionSpec: {
    duration: 350,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing,
    useNativeDriver: true,
  },
});

export default {
  transitionConfig,
};
