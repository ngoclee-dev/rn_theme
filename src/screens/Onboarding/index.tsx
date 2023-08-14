import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import Buttons from "~theme/components/Buttons";
import {useTheme} from "~hooks";

const Onboarding = () => {
  const {
    Common,
    Fonts,
    Gutters,
    Layout,
    Images,
    darkMode: isDark,
  } = useTheme();


  return (
    <View style={Layout.fill}>
      <View style={{...Layout.colCenter, flex: 4}}>
        <Text>Onboarding</Text>
      </View>
    </View>
  )
}


export default Onboarding
