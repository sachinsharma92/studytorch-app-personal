import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Dimensions, Animated, StyleSheet, Image, } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { StyleConstants } from "../../styles/style-constants";
import Title from "../../components/Typography/Title";


export const TabBar = ({ state, descriptors, navigation, }: BottomTabBarProps) => {

  const [translateValue] = useState(new Animated.Value(0));
  const totalWidth = Dimensions.get("window").width;
  const tabWidth = totalWidth / state.routes.length;

  const animateSlider = (index: number) => {
    Animated.spring(translateValue, {
      toValue: index * tabWidth,
      velocity: 10,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animateSlider(state.index);
  }, [state.index]);

  return (
    <View style={[style.tabContainer, { width: totalWidth }]}>
      <View style={{ flexDirection: "row" }}>
        <Animated.View
          style={[
            style.slider,
            {
              transform: [{ translateX: translateValue }],
              width: tabWidth - 20,
            },
          ]}
        />

        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }

            animateSlider(index);
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityStates={isFocused ? ["selected"] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 10, }}
              key={index}
            >
              {options.tabBarIcon({ color: isFocused ? StyleConstants.COLOR_PRIMARY : StyleConstants.COLOR_TEXT_LIGHT, })}
              <Title style={{color: isFocused ? StyleConstants.COLOR_PRIMARY : StyleConstants.COLOR_TEXT_LIGHT, marginBottom: 15, marginTop: 5, fontSize: 12 }}>{label}</Title>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  tabContainer: {
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.0,
    backgroundColor: "white",
    elevation: 10,
    position: "absolute",
    bottom: 0,
  },
  slider: {
    height: 5,
    position: "absolute",
    bottom: 0,
    left: 10,
    flex: 1,
    backgroundColor: StyleConstants.COLOR_PRIMARY,
    borderTopEndRadius: StyleConstants.BORDER_RADIUS,
    borderTopStartRadius: StyleConstants.BORDER_RADIUS,
  },
});