import React, { useState } from "react";
import { View } from "react-native";
import { Image, Text, Touchable, ProgressBar } from "@components";
import LinearGradient from "react-native-linear-gradient";
import Swiper from "react-native-deck-swiper";
import ProfileDetails from "./profile-details";
import { GRADIENT } from "@config";

import styles from "./swipe.style";

function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

const Swipe: () => React$Node = props => {
  const [cards] = useState([...range(1, 50)]);
  const [setSwiprAllCards] = useState(false);
  // const [swipeDirection] = useState("");
  const [cardIndex] = useState(0);

  const renderCard = (card, index) => {
    return (
      <View style={styles.card}>
        <Image
          resizeMode={"cover"}
          source={{ uri: "https://placeimg.com/640/640/any" }}
          style={styles.cardImage}
        />
      </View>
    );
  };

  const onSwipedAllCards = () => {
    setSwiprAllCards(true);
  };

  const onSwiped = type => {
    console.log(`on swiped ${type}`);
  };

  const swipeLeft = () => {
    // this.swiper.swipeLeft();
  };

  return (
    <LinearGradient
      colors={GRADIENT.SCREEN_BACKGROUND}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <View style={styles.contentContainer}>
        <Swiper
          ref={swiper => {
            // this.swiper = swiper;
          }}
          onSwiped={() => onSwiped("general")}
          onSwipedLeft={() => onSwiped("left")}
          onSwipedRight={() => onSwiped("right")}
          onSwipedTop={() => onSwiped("top")}
          onSwipedBottom={() => onSwiped("bottom")}
          onTapCard={swipeLeft}
          cards={cards}
          cardIndex={cardIndex}
          cardVerticalMargin={0}
          cardHorizontalMargin={0}
          backgroundColor={"transparent"}
          renderCard={renderCard}
          onSwipedAll={onSwipedAllCards}
          stackSize={3}
          stackSeparation={15}
          overlayLabels={{
            bottom: {
              title: "BLEAH",
              style: {
                label: {
                  backgroundColor: "black",
                  borderColor: "black",
                  color: "white",
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                },
              },
            },
            left: {
              title: "NOPE",
              style: {
                label: {
                  backgroundColor: "black",
                  borderColor: "black",
                  color: "white",
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                  marginTop: 30,
                  marginLeft: -30,
                },
              },
            },
            right: {
              title: "LIKE",
              style: {
                label: {
                  backgroundColor: "black",
                  borderColor: "black",
                  color: "white",
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  marginTop: 30,
                  marginLeft: 30,
                },
              },
            },
            top: {
              title: "SUPER LIKE",
              style: {
                label: {
                  backgroundColor: "black",
                  borderColor: "black",
                  color: "white",
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                },
              },
            },
          }}
          animateOverlayLabelsOpacity
          animateCardOpacity
          swipeBackCard
        />

        <LinearGradient
          colors={GRADIENT.FADE}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.topActions}
        >
          <ProgressBar />
          <View style={[styles.topActionRow, styles.topRowMargin]}>
            <Text style={styles.topBarName}>Lara Cruse</Text>
            <LinearGradient
              colors={GRADIENT.BUTTON}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={styles.onlineStatus}
            />
            <Text style={styles.topBarName}>21</Text>
            <View style={styles.flexSpace} />
            <Image source={require("@assets/images/swipe-screen/info.png")} />
          </View>
          <View style={[styles.topActionRow, styles.topRowMarginSmall]}>
            <Image source={require("@assets/images/swipe-screen/location.png")} />
            <Text style={styles.topBarLocation}>LOS ANGELES, CALIFORNIA</Text>
          </View>
        </LinearGradient>
        <ProfileDetails />
        {/*<View style={styles.bottomActions}>
          <View style={[styles.buttonRow]}>
            <Touchable>
              <Image
                style={styles.buttonSmall}
                source={require("@assets/images/swipe-screen/swipe-refresh.png")}
              />
            </Touchable>
            <Touchable>
              <Image
                style={styles.buttonSmall}
                source={require("@assets/images/swipe-screen/swipe-rocket.png")}
              />
            </Touchable>
          </View>
          <View style={[styles.buttonRow, styles.buttonRowMargin]}>
            <Touchable>
              <Image source={require("@assets/images/swipe-screen/swipe-cross.png")} />
            </Touchable>
            <Touchable>
              <Image source={require("@assets/images/swipe-screen/swipe-star.png")} />
            </Touchable>
            <Touchable>
              <Image source={require("@assets/images/swipe-screen/swipe-heart.png")} />
            </Touchable>
          </View>
        </View>
        */}
      </View>
    </LinearGradient>
  );
};

export default Swipe;
