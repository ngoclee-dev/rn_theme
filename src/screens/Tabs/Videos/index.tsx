import * as React from 'react';
import {View, StyleSheet, Button, Dimensions} from 'react-native';
import {Video, ResizeMode} from 'expo-av';
import {useTheme} from "~hooks";

const {width} = Dimensions.get("window")

const Videos = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const {Layout, Gutters} = useTheme();
  return (
    <View style={Layout.fill}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  video: {
    width: width,
    height: 300
  }
});


export default Videos
