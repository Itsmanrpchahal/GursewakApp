// @ts-ignore
import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { StyleSheet, TouchableOpacity } from "react-native";
import { withTheme } from "styled-components/native";
// @ts-ignore
import { useActions } from "@root/hooks/useActions";
import CheckBox from "react-native-check-box";
import navigationStrings from "../../../navigations/navigationStrings";
import Video from "react-native-video";

const MainScreen = ({ navigation }) => {
  const { getHome } = useActions();
  const [checked, setChecked] = useState(false);
  const video = React.useRef(null);
  useEffect(() => {
    getHome({}).then((res) => {
      console.log(JSON.stringify(res));
    });
  }, []);

  // @ts-ignore
  return (
    <MainWrapper>
      {/* <Video
        source={require("../../../utils/vedio.mp4")}
        style={styles.video}
      /> */}
      <BottomWrapper>
        <CheckBox
          style={{ width: "65%" }}
          onClick={() => {
            setChecked(!checked);
          }}
          checkBoxColor="white"
          rightTextStyle={{ color: "white", fontSize: 19 }}
          isChecked={checked}
          rightText={"Don’t show me intro again"}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(navigationStrings.SPLASH_WITH_SEARCH);
          }}
        >
          <BottomText>Skip Intro</BottomText>
        </TouchableOpacity>
      </BottomWrapper>
    </MainWrapper>
  );
};

export default withTheme(MainScreen);

const styles = StyleSheet.create({
  video: {
    width: 300,
    height: 500,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
  },
});

const BottomText = styled.Text`
  color: ${({ theme }: any) => theme.colors.accentColor};
  font-size: 19px;
`;

const BottomWrapper = styled.View`
  flex: 1;
  width: 400px;
  justify-content: flex-end;
  align-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const MainWrapper = styled.View`
  align-items: center;
  flex: 1;
  background-color: ${({ theme }: any) => theme.colors.primary};
`;
