import React from "react";
import { View, Image, StyleSheet, Animated } from "react-native";
import LogoImage from "./assets/Logo.png";

class PulseAnimation extends React.Component {
  constructor() {
    super();
    this.state = {
      opacityValue: new Animated.Value(1),
    };
  }

  componentDidMount() {
    this.startPulseAnimation();
  }

  startPulseAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.opacityValue, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.opacityValue, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  render() {
    const { opacityValue } = this.state;

    return (
      <Animated.View style={{ opacity: opacityValue }}>
        {this.props.children}
      </Animated.View>
    );
  }
}

export default function LoadingScreen() {
  return (
    <View style={styles.imageContainer}>
      <PulseAnimation>
        <Image source={LogoImage} style={styles.image} />
      </PulseAnimation>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FDA7DF",
  },
});
