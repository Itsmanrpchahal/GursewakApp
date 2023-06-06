import React from "react";
import { FlatList, Text, View } from "react-native";
import { useTheme } from "styled-components";
import styled from "styled-components/native";
import { withTheme } from "styled-components/native";

const data = [
  {
    title: "a",
  },
  {
    title: "a",
  },
  {
    title: "a",
  },
];
const TableViewFolder = () => {
  const { colors }: any = useTheme();
  return (
    <MainWrapper>
      <HeaderView>
        <HeaderText color={colors.textWhite} width={15} textAlign={"center"}>
          AMg
        </HeaderText>
        <VericleDivider
          height={30}
          backgroundColor={colors.primary}
        ></VericleDivider>
        <HeaderText color={colors.textWhite} width={15} textAlign={"center"}>
          pMgqI
        </HeaderText>
        <VericleDivider
          height={30}
          backgroundColor={colors.primary}
        ></VericleDivider>
        <HeaderText color={colors.textWhite} width={70} textAlign={"start"}>
          Note Preview
        </HeaderText>
      </HeaderView>

      <VerticleWrapper>
        <HeaderText style={{ padding: 10 }} color={colors.yellow} width={100}>
          DASAM SRI GURU GRANTH SAHIB JI
        </HeaderText>
        <FlatList
          data={data}
          renderItem={(item) => {
            return (
              <ItemWrapper>
                <HeaderText
                  color={colors.blueWhite}
                  width={15}
                  textAlign={"center"}
                >
                  834
                </HeaderText>
                <VericleDivider
                  height={48}
                  backgroundColor={colors.textWhite}
                ></VericleDivider>
                <HeaderText
                  color={colors.blueWhite}
                  width={15}
                  textAlign={"center"}
                >
                  14
                </HeaderText>
                <VericleDivider
                  height={48}
                  backgroundColor={colors.textWhite}
                ></VericleDivider>
                <HeaderText
                  color={colors.blueWhite}
                  numberOfLines={3}
                  height={48}
                  width={60}
                  textAlign={"start"}
                >
                  A preview of the note can be seen here and you can click on it
                  to get the full ver…
                </HeaderText>
              </ItemWrapper>
            );
          }}
        ></FlatList>
      </VerticleWrapper>
    </MainWrapper>
  );
};

export default withTheme(TableViewFolder);

type TextProps = {
  height: string;
  backgroundColor: string;
  width: string;
  color: string;
  textAlign: string;
};

const VerticleWrapper = styled.View``;

const ItemWrapper = styled.View`
  flex-direction: row;
  padding: 5px;
  margin-top: -10px;
  display: flex;
  align-items: center;
`;

const VericleDivider = styled.View`
  height: ${({ height }: any) => height};
  width: 1px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: ${({ backgroundColor }: any) => backgroundColor};
`;

const HeaderText = styled.Text<TextProps>`
  width: ${({ width }: any) => width}%;
  text-align: ${({ textAlign }: any) => textAlign};
  color: ${({ color }: any) => color};
  fontsize: ${({ theme }: any) => theme.fontSize[0].cardDate};
`;

const HeaderView = styled.View`
  height: 30px;
  padding: 5px;
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: ${({ theme }: any) => theme.colors.header};
`;

const MainWrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }: any) => theme.colors.primary};
`;
