import React from "react";
import { FlatList, Text, View } from "react-native";
import styled from "styled-components/native";
import { withTheme } from "styled-components/native";
import { icDragMove, icblueDots, icshareYellow } from "../../../assets";
import { data } from "../../../utils/constants";
import { useTypedSelector } from "@root/hooks/useTypedSelector";
import * as Progress from "react-native-progress";

const HomeTab = () => {
  const { modeState } = useTypedSelector((state) => state.mode);

  return (
    <MainWrapper>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={(item) => {
          return (
            <ItemWrapper
              style={{
                shadowOffset: { width: -2, height: 4 },
                shadowColor: "#52006A",
                shadowOpacity: 0.2,
                shadowRadius: 7,
              }}
            >
              <HorizontalWrapper>
                <TitleWrapper>DAILY DOSE</TitleWrapper>
                <ImageWrapper
                  source={modeState ? icshareYellow : icblueDots}
                ></ImageWrapper>
              </HorizontalWrapper>
              {item.index === 4 ? (
                <View>
                  <TitleWrapper style={{ margin: 10 }}>
                    Mool Mantar Jaap
                  </TitleWrapper>
                  <Progress.Bar
                    indeterminate={true}
                    progress={0.5}
                    height={10}
                    style={{ width: "90%", marginLeft: 10 }}
                  />

                  <TitleWrapper style={{ margin: 10 }}>
                    Name of Sehaj Paath
                  </TitleWrapper>
                  <Progress.Bar
                    indeterminate={true}
                    progress={0.5}
                    height={10}
                    style={{ width: "90%", marginLeft: 10 }}
                  />

                  <TitleWrapper style={{ margin: 10 }}>
                    Counter Name
                  </TitleWrapper>
                  <Progress.Bar
                    indeterminate={true}
                    progress={0.5}
                    height={10}
                    style={{ width: "90%", marginLeft: 10 }}
                  />
                </View>
              ) : (
                <TitleWrapper1>
                  Baba jee’s latest bachan can go here. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis
                </TitleWrapper1>
              )}

              <ImageView>
                <ImageWrapper source={icDragMove}></ImageWrapper>
              </ImageView>
            </ItemWrapper>
          );
        }}
      ></FlatList>
    </MainWrapper>
  );
};

export default withTheme(HomeTab);

const ImageView = styled.View`
  align-items: flex-end;
  padding: 10px;
`;

const ImageWrapper = styled.Image``;

const HorizontalWrapper = styled.View`
  background-color: ${({ theme }: any) => theme.colors.primaryYellow};
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const TitleWrapper1 = styled.Text`
padding:10px
  font-size: ${({ theme }: any) => theme.fontSize[0].cardDate};
  color: ${({ theme }: any) => theme.colors.blueWhite};
`;

const TitleWrapper = styled.Text`
  font-size: ${({ theme }: any) => theme.fontSize[0].cardDate};
  color: ${({ theme }: any) => theme.colors.blueYellow};
`;

const ItemWrapper = styled.View`
  background-color: ${({ theme }: any) => theme.colors.secondaryWhite};
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 10px;
`;

const MainWrapper = styled.View`
  flex: 1;
  height: 100%;
  padding: 16px;
  background-color: ${({ theme }: any) => theme.colors.pankantiBC};
`;
