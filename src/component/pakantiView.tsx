import React from "react";
import { View } from "react-native";
import { withTheme } from "styled-components/native";
import styled from "styled-components/native";

const PankatiView = ({ item, navigation }) => {
  return (
    <MainWrapper>
      <TitleWrapper>
        ਵਾਹਿ ਵਾਹਿ ਬਾਣੀ ਨਿਰੰਕਾਰ ਹੈ।ਬਾਣੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦੀ ਰੂਪ ਵਿਚ ਹੈ।
      </TitleWrapper>
      <TItleDesc>
        ਵਾਹਿ ਵਾਹਿ ਬਾਣੀ ਨਿਰੰਕਾਰ ਹੈ।ਬਾਣੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦੀ ਰੂਪ ਵਿਚ ਹੈ।
      </TItleDesc>
      <TItleDesc1>
        ਵਾਹਿ ਵਾਹਿ ਬਾਣੀ ਨਿਰੰਕਾਰ ਹੈ।ਬਾਣੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦੀ ਰੂਪ ਵਿਚ ਹੈ।
      </TItleDesc1>
      <Raag>
        ਵਾਹਿ ਵਾਹਿ ਬਾਣੀ ਨਿਰੰਕਾਰ ਹੈ।ਬਾਣੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦੀ ਰੂਪ ਵਿਚ ਹੈ।
      </Raag>
    </MainWrapper>
  );
};

export default withTheme(PankatiView);

const Raag = styled.Text`
  color: ${({ theme }: any) => theme.colors.raagColor};
  margin-top: 4px;
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].cardDate}px;
`;

const TItleDesc1 = styled.Text`
  color: ${({ theme }: any) => theme.colors.text};
  margin-top: 4px;
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].cardDate}px;
  opacity: 0.5;
`;

const TItleDesc = styled.Text`
  color: ${({ theme }: any) => theme.colors.text};
  margin-top: 4px;
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].cardSubTitle}px;
`;

const TitleWrapper = styled.Text`
  color: ${({ theme }: any) => theme.colors.text};
  margin-top: 10px;
  font-size: ${({ theme, fontSize }: any) => theme.fontSize[0].cardTitle}px;
`;

const MainWrapper = styled.View`
  padding: 16px;
`;
