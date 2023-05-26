import React, { useState } from "react";
import { ScrollView, StatusBar, View } from "react-native";
import styled from "styled-components/native";
import { withTheme } from "styled-components/native";
import TextField from "../../../component/TextField";
import FillBtn from "../../../component/FillBtn";
import { useTheme } from "styled-components/native";
import AwesomeAlert from "react-native-awesome-alerts";

const ReportMistake = () => {
  const { colors } = useTheme();
  const [showalert, setShowAlert] = useState(false);
  const [cancelable, setCancelable] = useState(true);

  return (
    <ScrollView style={{ backgroundColor: colors.pankantiBC }}>
      <MainWrapper>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.secondary}
        />
        <TextField
          accessibilityLabel="Thuk"
          placeholder="Placeholder"
          autoCapitalize={"none"}
        />
        <TextField
          accessibilityLabel="Ang"
          placeholder="Placeholder"
          keyboardType="numeric"
          autoCapitalize={"none"}
        />
        <TextField
          accessibilityLabel="Audio Track Name"
          placeholder="Audio Track Name here"
          autoCapitalize={"none"}
        />
        <TextField
          accessibilityLabel="Audio Track Time Stamp"
          placeholder="00:00"
          autoCapitalize={"none"}
        />
        <TextWrapper>Screenshot Attached</TextWrapper>
        <ImageWrapper></ImageWrapper>
        <TextField
          accessibilityLabel="Message"
          placeholder="Can type custom message here…"
          autoCapitalize={"none"}
          multiline={true}
        />
        <AwesomeAlert
          show={showalert}
          showProgress={false}
          title="Thank you for reporting this mistake! Our sevadaars will review
          it shortly."
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          confirmButtonColor="#2451A0"
          confirmText="Close"
          onConfirmPressed={() => {
            setShowAlert(false);
          }}
        />

        <FillBtn
          btntext={"Report Mistake"}
          onPress={() => {
            setShowAlert(true);
          }}
        />
      </MainWrapper>
    </ScrollView>
  );
};

export default withTheme(ReportMistake);

const ImageWrapper = styled.Image`
  height: 100px;
  width: 100px;
  margin-top:16px
  border-radius: 10px;
  background-color: white;
`;

const TextWrapper = styled.Text`
  font-weight: 600;
  margin-top: 16px;
  font-size: ${({ theme }: any) => theme.fontSize[0].cardTitle};
  color: ${({ theme }: any) => theme.colors.text};
`;

const MainWrapper = styled.View`
  flex: 1;
  height: 100%;
  padding: 16px;
  background-color: ${({ theme }: any) => theme.colors.pankantiBC};
`;
