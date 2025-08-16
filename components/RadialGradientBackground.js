import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Defs, RadialGradient, Stop, Rect } from 'react-native-svg';
import { COLORS } from '../constants/colors';

const RadialGradientBackground = () => {
  return (
    <View style={StyleSheet.absoluteFillObject}>
      <Svg height="100%" width="100%" style={StyleSheet.absoluteFillObject}>
        <Defs>
          <RadialGradient
            id="grad"
            cx="50%"
            cy="0%"
            rx="70%"
            ry="50%"
            gradientUnits="userSpaceOnUse"
          >
            <Stop offset="0" stopColor={COLORS.primary} stopOpacity="0.6" />
            <Stop offset="1" stopColor={COLORS.background} stopOpacity="1" />
          </RadialGradient>
        </Defs>
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
      </Svg>
    </View>
  );
};

export default RadialGradientBackground;