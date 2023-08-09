import React from "react";
import {View} from "react-native";
import WebView from "react-native-webview";


const Explore = () => {
  return (
    <View style={{flex: 1}}>
      <WebView source={{ uri: 'https://m.google.com/' }} style={{ flex: 1 }} />
    </View>
  )
}


export default Explore
