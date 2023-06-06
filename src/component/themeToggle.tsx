import { Switch } from "react-native";
import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { withTheme } from "styled-components/native";
import { useTypedSelector } from "@root/hooks/useTypedSelector";
import { useActions } from "@root/hooks/useActions";

const ToggleScreen = (props: any) => {
  const { modeState } = useTypedSelector((state) => state.mode);
  const { getMode } = useActions();
  const [theme, setTheme] = useState<any>(modeState);
  const toggleRememberPin = (value) => {
    setTheme(value);
  };

  useEffect(() => {
    alert(JSON.stringify(modeState));
    getMode({ mode: theme });
  }, [theme]);

  return (
    <MainWrapper>
      <ModeText>Enable Mode</ModeText>
      <Switch
        trackColor={{ false: "gray", true: "yellow" }}
        onValueChange={toggleRememberPin}
        value={theme}
      />
    </MainWrapper>
  );
};

export default withTheme(ToggleScreen);

const ModeText = styled.Text`
  font-size: 20px;
  color: ${({ theme }: any) => theme.colors.text};
  margin-bottom: 20px;
`;

const MainWrapper = styled.View``;
