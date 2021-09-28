import React, { useEffect, useState } from "react";
import { Animated, TextInput as RNTextInput, TouchableOpacity, View } from "react-native";
import styles from "./text-input.style.js";
const PLACEHOLDER_SMALL_POSITION = 3;
const PLACEHOLDER_SMALL_SIZE = 11;
const PLACEHOLDER_LARGE_POSITION = 11;
const PLACEHOLDER_LARGE_SIZE = 14;

const TextInput: () => React$Node = props => {
  const { onChangeText, placeholder, value } = props;
  const [text, setText] = useState(value ? value : "");
  const [hasText, setHasText] = useState(props.text ? true : false);
  const [isFocused, setIsFocused] = useState(false);
  const [placeholderFontSize] = useState(
    new Animated.Value(value ? PLACEHOLDER_SMALL_SIZE : PLACEHOLDER_LARGE_SIZE),
  );
  const [placeholderPosition] = useState(
    new Animated.Value(value ? PLACEHOLDER_SMALL_POSITION : PLACEHOLDER_LARGE_POSITION),
  );
  let inputFieldRef = null;

  const onFocusChanged = focus => {
    setIsFocused(focus);
  };

  useEffect(() => {
    setHasText(text.length > 0);
  }, [text]);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(placeholderFontSize, {
        toValue: isFocused || hasText ? PLACEHOLDER_SMALL_SIZE : PLACEHOLDER_LARGE_SIZE,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(placeholderPosition, {
        toValue:
          isFocused || hasText ? PLACEHOLDER_SMALL_POSITION : PLACEHOLDER_LARGE_POSITION,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start();
  }, [isFocused, hasText, placeholderFontSize, placeholderPosition]);

  useEffect(() => {}, [placeholderFontSize, placeholderPosition]);

  const focus = () => {
    if (inputFieldRef) inputFieldRef.focus();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={focus}
        style={styles.touchableInputContainer}
      >
        <View style={styles.inputFieldContainer}>
          <Animated.View
            style={[styles.placeholderContainer, { paddingTop: placeholderPosition }]}
          >
            <Animated.Text
              numberOfLines={1}
              style={[styles.placeholder, { fontSize: placeholderFontSize }]}
            >
              {placeholder}
            </Animated.Text>
          </Animated.View>
          <RNTextInput
            {...props}
            ref={input => {
              inputFieldRef = input;
            }}
            placeholder=''
            underlineColorAndroid='transparent'
            onFocus={() => onFocusChanged(true)}
            onBlur={() => onFocusChanged(false)}
            style={[styles.inputField]}
            onChangeText={t => {
              onChangeText && onChangeText(t);
              setText(t);
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TextInput;
