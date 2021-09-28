import React from "react";
import { Image } from "@components";
import styles from "./avatar.style";

const Avatar: () => React$Node = props => {
  // const {
  //   currentMessage: { user },
  // } = props;

  // return <Image style={styles.container} source={{ uri: user.avatar }} />;/
  return (
    <Image
      style={styles.container}
      source={require("@assets/images/message-image.png")}
    />
  );
};

export default Avatar;
