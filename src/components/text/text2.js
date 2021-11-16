import React, { Component } from "react";
import { StyleSheet, Text as NativeText } from "react-native";
import ScaleSheet from "react-native-scalesheet";
import { FontHelper } from "@helpers";
import _ from "lodash";

class Text extends Component {
  render() {
    const { style, scale, link, children, ...rest } = this.props;
    let propsStyle;

    if (style instanceof Array) {
      propsStyle = _.map(style, s => s && FontHelper.font(StyleSheet.flatten(s)));
      propsStyle = Object.assign({}, ...propsStyle);
    } else {
      propsStyle = FontHelper.font(StyleSheet.flatten(style || {}));
    }

    const defaultStyle = { color: link ? "blue" : "black" };
    const sheet = scale ? ScaleSheet : StyleSheet;
    const styles = sheet.create({
      text: {
        ...defaultStyle,
        ...propsStyle,
      },
    });

    return (
      <NativeText {...rest} style={styles.text}>
        {children}
      </NativeText>
    );
  }
}

export { Text };
