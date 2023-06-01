import React from "react";
import { View, Button } from "react-native";
import styled from "styled-components/native";
import { withTheme } from "styled-components/native";
import SoundPlayer from "react-native-sound-player";
import RNFetchBlob from "rn-fetch-blob";

const downloadSoundFile = async (url, filename) => {
  const dirs = RNFetchBlob.fs.dirs;
  const path = `${dirs.DocumentDir}/${filename}`;

  try {
    const res = await RNFetchBlob.config({ path }).fetch("GET", url);
    console.log("Sound file downloaded:", res.path());
    return res.path();
  } catch (error) {
    console.log("Error downloading sound file:", error);
    return null;
  }
};

const playSoundFromURL = async () => {
  const soundUrl =
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
  const soundFilename = "sound_file.mp3";

  const soundFilePath = await downloadSoundFile(soundUrl, soundFilename);

  if (soundFilePath) {
    try {
      SoundPlayer.playSoundFile(soundFilePath, "mp3");
    } catch (error) {
      console.log("Error playing sound:", error);
    }
  }
};
const MediaPlayer = () => {
  return (
    <MainWrapper>
      <Button title="Play Sound from URL" onPress={playSoundFromURL} />

      <TextView></TextView>
    </MainWrapper>
  );
};

export default withTheme(MediaPlayer);

const TextView = styled.View`
  height: 50px;
  background: white;
  margin:10px
  border-radius:10px;
  shadow-color: gray};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.3;
  shadow-radius: 15px;
  elevation: 9;
`;

const MainWrapper = styled.View`
  flex: 1;x
  height: 100%;
  background-color: ${({ theme }: any) => theme.colors.pankantiBC};
`;
