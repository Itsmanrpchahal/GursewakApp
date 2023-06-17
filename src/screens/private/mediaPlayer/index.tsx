import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Button,
  Switch,
  FlatList,
  Dimensions,
  Animated,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import { withTheme } from "styled-components/native";
import {
  icBack,
  icBackSong,
  icCanada,
  icNextBlue,
  icNextSong,
  icPauseBlue,
  icPauseYellow,
  icPlay,
  icPlayBlue,
  icRepeatBlue,
  icRepeatYellow,
  icRewindBlue,
  icRewindYellow,
  icSettingBlue,
  icSettingYellow,
} from "../../../assets";
import Slider from "@react-native-community/slider";
import { useTypedSelector } from "@root/hooks/useTypedSelector";
import { useTheme } from "styled-components";
import songs from "../../../component/data";
import TrackPlayer, {
  Capability,
  Event,
  RepeatMode,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from "react-native-track-player";
import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";

const setUpPlayer = async () => {
  try {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.Stop,
      ],

      notificationCapabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.Stop,
      ],

      compactCapabilities: [
        Capability.Pause,
        Capability.Play,
        Capability.Stop,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
      ],
    });
    await TrackPlayer.add(songs);
  } catch (error) {
    console.log(error);
  }
};

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = Math.floor(seconds % 60);
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainderSeconds).padStart(2, "0");
  return `${formattedMinutes}:${formattedSeconds}`;
};

const tooglePayBack = async (playbackState) => {
  if (
    playbackState === State.Paused ||
    playbackState === State.Ready ||
    playbackState === State.Buffering ||
    playbackState === State.Connecting ||
    playbackState === State.Stopped
  ) {
    await TrackPlayer.play();
  } else {
    await TrackPlayer.pause();
  }
};

const MediaPlayer = () => {
  const playBackState = usePlaybackState();
  const { modeState } = useTypedSelector((state) => state.mode);
  const { colors }: any = useTheme();
  const { width, height } = Dimensions.get("window");
  const [currentSong, setCurrentSong] = useState(0);
  const [repeatTrack, setRepeatTrack] = useState("off");
  const progress = useProgress();
  const scrollX = useRef(new Animated.Value(0)).current;
  const [songIndex, setSongIndex] = useState(0);
  const ref = useRef<FlatList>(null);
  const [visible, setVisible] = useState(false);
  const hideMenu = () => setVisible(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  useEffect(() => {
    scrollX.addListener(({ value }) => {
      // console.log(value);
      const index = Math.round(value / width);

      setSongIndex(index);
      // console.log("Index", index);
    });
    return () => {
      scrollX.removeAllListeners();
    };
  }, []);

  useEffect(() => {
    setUpPlayer();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      ref.current.scrollToIndex({
        animated: true,
        index: currentSong,
      });
    }, 1);
  }, []);

  const renderSongs = ({ item, index }) => {
    return (
      <ImageItem width={width}>
        <ImageWrapper source={item.artwork}></ImageWrapper>
      </ImageItem>
    );
  };

  const changeRepeatMode = () => {
    if (repeatTrack === "off") {
      TrackPlayer.setRepeatMode(RepeatMode.Track);
      setRepeatTrack("track");
    }
    if (repeatTrack === "track") {
      TrackPlayer.setRepeatMode(RepeatMode.Queue);
      setRepeatTrack("repeat");
    }
    if (repeatTrack === "repeat") {
      TrackPlayer.setRepeatMode(RepeatMode.Off);
      setRepeatTrack("off");
    }
  };
  return (
    <MainWrapper1>
      <MainWrapper>
        <TitleTrack>{songs[songIndex].title}</TitleTrack>
        <TitleDesc>{songs[songIndex].artist}</TitleDesc>
      </MainWrapper>
      <Animated.FlatList
        renderItem={renderSongs}
        ref={ref}
        data={songs}
        keyExtractor={(item) => item.id}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        scrollEnabled={false}
        onScrollToIndexFailed={(info) => {
          const wait = new Promise((resolve) => setTimeout(resolve, 1));
          wait.then(() => {
            ref.current?.scrollToIndex({ index: info.index, animated: true });
          });
        }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: { x: scrollX },
              },
            },
          ],
          { useNativeDriver: true }
        )}
      ></Animated.FlatList>

      <SeekWrapper>
        <HorizonatalWrapper>
          <TimeTExt>{formatTime(progress.position)}</TimeTExt>
          <TimeTExt>{formatTime(progress.duration)}</TimeTExt>
        </HorizonatalWrapper>
        <Slider
          value={progress.position}
          style={{ width: "90%", marginBottom: 12 }}
          minimumValue={0}
          maximumValue={progress.duration}
          trackStyle={{ height: 5, backgroundColor: colors.primary }}
          minimumTrackTintColor={colors.yellow}
          maximumTrackTintColor={colors.yelloDull}
          onValueChange={async (value) => await TrackPlayer.seekTo(value)}
          onScrollToIndexFailed={(info) => {
            const wait = new Promise((resolve) => setTimeout(resolve, 1));
            wait.then(() => {
              ref.current?.scrollToIndex({ index: info.index, animated: true });
            });
          }}
          renderIt
          onSlidingComplete={async (value) => {
            await TrackPlayer.seekTo(value);
          }}
          onScroll={async (e) => {
            const x = e.nativeEvent.contentOffset.x / width;
            setCurrentSong(parseInt(x.toFixed(0)));
            await TrackPlayer.skip(parseInt(x.toFixed(0)));
            tooglePayBack(playBackState);
          }}
        />

        <VerticleWrapper>
          <HorizonatalWrapper>
            <TouchableOpacity onPress={changeRepeatMode}>
              <ImageWrapper1
                source={modeState ? icRepeatYellow : icRepeatBlue}
              ></ImageWrapper1>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={async () => {
                if (currentSong > 0) {
                  setCurrentSong(currentSong - 1);
                  ref.current.scrollToIndex({
                    animated: true,
                    index: parseInt(currentSong) - 1,
                  });
                  await TrackPlayer.skip(parseInt(currentSong) - 1);
                  tooglePayBack(playBackState);
                }
              }}
            >
              <ImageWrapper1
                source={modeState ? icRewindYellow : icRewindBlue}
              ></ImageWrapper1>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={async () => {
                tooglePayBack(playBackState);
              }}
            >
              <ImageWrapper1
                style={{ height: 26, width: 22 }}
                source={
                  modeState
                    ? playBackState === State.Playing
                      ? icPauseYellow
                      : icPlay
                    : playBackState === State.Playing
                    ? icPauseBlue
                    : icPlayBlue
                }
              ></ImageWrapper1>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={async () => {
                if (songs.length - 1 > currentSong) {
                  setCurrentSong(currentSong + 1);
                  ref.current.scrollToIndex({
                    animated: true,
                    index: parseInt(currentSong) + 1,
                  });
                  await TrackPlayer.skip(parseInt(currentSong) + 1);

                  tooglePayBack(playBackState);
                }
              }}
            >
              <ImageWrapper1
                source={modeState ? icNextSong : icNextBlue}
              ></ImageWrapper1>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setVisible(!visible);
              }}
            >
              <ImageWrapper1
                source={modeState ? icSettingYellow : icSettingBlue}
              ></ImageWrapper1>
              <Menu
                style={{
                  backgroundColor: modeState ? colors.darkBlue : colors.primary,
                  width: 300,
                }}
                visible={visible}
                onRequestClose={hideMenu}
              >
                <MenuWrapper1
                  backgroundColor={modeState ? colors.darkBlue : colors.primary}
                >
                  <NoteText>Audio Speed</NoteText>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <Slider
                      value={50}
                      style={{ width: "90%", marginBottom: 12 }}
                      minimumValue={0}
                      maximumValue={100}
                      minimumTrackTintColor={colors.textWhite}
                      maximumTrackTintColor={colors.textWhite}
                      thumbImage={colors.yellow}
                      renderIt
                      thumbTintColor={colors.yellow}
                    />

                    <TextWrapper>2x</TextWrapper>
                  </View>

                  <View style={{ flexDirection: "row" }}>
                    <NoteText>Auto Scroll</NoteText>
                    <Switch
                      trackColor={{ false: "#767577", true: colors.yellow }}
                      thumbColor={isEnabled ? colors.textWhite : "#f4f3f4"}
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={toggleSwitch}
                      value={isEnabled}
                      style={{
                        transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }],
                        marginTop: -5,
                        marginLeft: 10,
                      }}
                    />
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <Slider
                      value={50}
                      style={{ width: "90%", marginBottom: 12 }}
                      minimumValue={0}
                      maximumValue={100}
                      minimumTrackTintColor={colors.textWhite}
                      maximumTrackTintColor={colors.textWhite}
                      thumbImage={colors.yellow}
                      renderIt
                      thumbTintColor={colors.yellow}
                    />

                    <TextWrapper>2</TextWrapper>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <NoteText>Repeat</NoteText>
                      <Switch
                        trackColor={{ false: "#767577", true: colors.yellow }}
                        thumbColor={isEnabled ? colors.textWhite : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        style={{
                          transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }],
                          marginTop: -5,
                          marginLeft: 10,
                        }}
                      />
                    </View>
                    <TextWrapper>10x</TextWrapper>
                  </View>
                </MenuWrapper1>
              </Menu>
            </TouchableOpacity>
          </HorizonatalWrapper>
        </VerticleWrapper>
      </SeekWrapper>
    </MainWrapper1>
  );
};

export default withTheme(MediaPlayer);

type Porps = {
  width: string;
  backgroundColor: string;
};

const TextWrapper = styled.Text`
  color: ${({ theme }: any) => theme.colors.textWhite};
  font-size: ${({ theme }: any) => theme.fontSize[0].cardDate};
  justify-items: center;
  text-align: center;
  margin-top: 10px;
  margin-left: 5px;
`;

const DividerNoteView = styled.View<Porps>`
  height: 1px;
  opacity: 0.2;
  margin-top:10px
  margin-bottom:10px;
  margin-right:-14px
  margin-left:-14px
  background-color: ${({ backgroundColor }: any) => backgroundColor};
`;

const NoteText = styled.Text`
  color: ${({ theme }: any) => theme.colors.yellow};
  font-size: ${({ theme }: any) => theme.fontSize[0].cardDate};
`;

const MenuWrapper1 = styled.View<Porps>`
  padding: 16px;
  border-radius:10px
  background-color: ${({ backgroundColor }: any) => backgroundColor};
`;
const VerticleWrapper = styled.View`
  width: 100%;
  height: 60px;
  align-items: center;
  margin-top: -10px;
  margin-bottom: 10px;
`;

const TimeTExt = styled.Text`
  color: ${({ theme }: any) => theme.colors.blueYellow};
  font-size: ${({ theme }: any) => theme.fontSize[0].cardDate};
  margin-bottom: -10px;
`;

const ImageWrapper1 = styled.Image``;

const HorizonatalWrapper = styled.View`
  flex-direction: row;
  margin-top:10px;
  width:90%
  align-items:center;
  justify-content: space-between;
`;

const SeekWrapper = styled.View`
  width: 100%;
  align-items: center;
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

const ImageItem = styled.View`
  align-items:center
  align-content:center;
  justify-content:center;
  width:${({ width }: any) => width};
`;

const MainWrapper1 = styled.View`
  height: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }: any) => theme.colors.pankantiBC};
`;

const MainWrapper = styled.View`
  align-items: center;
  width: 100%;
  background-color: ${({ theme }: any) => theme.colors.pankantiBC};
`;
