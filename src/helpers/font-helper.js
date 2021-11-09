import _ from "lodash";

// use post script names for font families
const Monsterrat = {
  "100": { fontFamily: "MontserratAlternates-Thin" },
  "100italic": { fontFamily: "MontserratAlternates-ThinItalic" },
  "200": { fontFamily: "MontserratAlternates-ExtraLight" },
  "200italic": { fontFamily: "MontserratAlternates-ExtraLightItalic" },
  "300": { fontFamily: "MontserratAlternates-Light" },
  "300italic": { fontFamily: "MontserratAlternates-LightItalic" },
  "400": { fontFamily: "MontserratAlternates-Regular" },
  "400italic": { fontFamily: "MontserratAlternates-Italic" },
  "500": { fontFamily: "MontserratAlternates-Medium" },
  "500italic": { fontFamily: "MontserratAlternates-MediumItalic" },
  "600": { fontFamily: "MontserratAlternates-SemiBold" },
  "600italic": { fontFamily: "MontserratAlternates-SemiBoldItalic" },
  "700": { fontFamily: "MontserratAlternates-Bold" },
  "700italic": { fontFamily: "MontserratAlternates-BoldItalic" },
  bold: { fontFamily: "MontserratAlternates-Bold" },
  bolditalic: { fontFamily: "MontserratAlternates-BoldItalic" },
  "800": { fontFamily: "MontserratAlternates-Black" },
  "800italic": { fontFamily: "MontserratAlternates-BlackItalic" },
  "900": { fontFamily: "MontserratAlternates-ExtraBold" },
  "900italic": { fontFamily: "MontserratAlternates-ExtraBoldItalic" },
};

const FONTS = {
  Monsterrat,
};

/*
  Helper class for cross-platform font styles
*/
class FontHelper {
  static font(fontParams) {
    let { fontFamily, fontWeight, fontStyle } = fontParams;
    fontFamily = fontFamily || "Monsterrat";
    fontWeight = fontWeight || "400";
    fontStyle = fontStyle || "";

    const styles = {
      ..._.omit(fontParams, ["fontFamily", "fontWeight", "fontStyle"]),
      ...FONTS[fontFamily][fontWeight + fontStyle],
    };

    return styles;
  }
}

export { FontHelper };
