import React from "react";
import { View, Button, Text } from "react-native";
import styled from "styled-components/native";
import { withTheme } from "styled-components/native";
import SoundPlayer from "react-native-sound-player";
import RNFetchBlob from "rn-fetch-blob";
import {
  icBack,
  icBackSong,
  icCanada,
  icNextBlue,
  icNextSong,
  icPlay,
  icPlayBlue,
  icRepeatBlue,
  icRepeatYellow,
  icRewindBlue,
  icSettingBlue,
  icSettingYellow,
} from "../../../assets";
import { Slider, colors } from "react-native-elements";
import { useTypedSelector } from "@root/hooks/useTypedSelector";

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

const MediaPlayer = () => {
  const { modeState } = useTypedSelector((state) => state.mode);

  return (
    <MainWrapper1>
      <MainWrapper>
        <TitleTrack>Track Name</TitleTrack>
        <TitleDesc>Track Details (can auto horizontal scroll)</TitleDesc>
      </MainWrapper>
      <ImageWrapper></ImageWrapper>
      <SeekWrapper>
        <Slider
          style={{ width: "90%" }}
          minimumValue={0}
          maximumValue={100}
          value={50}
          onValueChange={(value) => console.log(value)}
          trackStyle={{ height: 5, backgroundColor: colors.primary }}
          thumbStyle={{
            height: 20,
            width: 20,
            backgroundColor: "transparent",
          }}
        />
        <HorizonatalWrapper>
          <ImageWrapper1
            source={modeState ? icRepeatYellow : icRepeatBlue}
          ></ImageWrapper1>
          <ImageWrapper1
            source={modeState ? icBack : icRewindBlue}
          ></ImageWrapper1>
          <ImageWrapper1
            source={modeState ? icPlay : icPlayBlue}
          ></ImageWrapper1>
          <ImageWrapper1
            source={modeState ? icNextSong : icNextBlue}
          ></ImageWrapper1>
          <ImageWrapper1
            source={modeState ? icSettingYellow : icSettingBlue}
          ></ImageWrapper1>
        </HorizonatalWrapper>
      </SeekWrapper>
    </MainWrapper1>
  );
};

export default withTheme(MediaPlayer);

const ImageWrapper1 = styled.Image``;

const HorizonatalWrapper = styled.View`
  flex-direction: row;
  width:90%
  justify-content: space-between;
`;

const SeekWrapper = styled.View`
  width: 100%;
  align-items: center;
  margin-bottom: 26px;
`;

const TitleDesc = styled.Text`
  color: ${({ theme }: any) => theme.colors.blueYellow};
  font-size: ${({ theme }: any) => theme.fontSize[0].cardDate};
`;

const TitleTrack = styled.Text`
  color: ${({ theme }: any) => theme.colors.blueYellow};
  font-size: ${({ theme }: any) => theme.fontSize[0].akharText};
  margin-top: 16px;
`;
const ImageWrapper = styled.Image`
  height: 270px;
  width:270px
  background: white;
  border-radius:150px;
  shadow-color: gray;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.3;
  shadow-radius: 15px;
  elevation: 18;
`;

const MainWrapper1 = styled.View`
  height: 100%;
  justify-content:space-between
  align-items: center;
  background-color: ${({ theme }: any) => theme.colors.pankantiBC};
`;

const MainWrapper = styled.View`
  align-items: center;
  background-color: ${({ theme }: any) => theme.colors.pankantiBC};
`;
