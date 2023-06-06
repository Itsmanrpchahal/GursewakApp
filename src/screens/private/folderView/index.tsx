import React, { useEffect } from "react";
import { withTheme } from "styled-components/native";
import TableViewFolder from "../tableViewFolder";
import ListViewFolder from "../listViewFolder";

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
const FolderView = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({ title: "Name of folder" });
  }, []);
  return <ListViewFolder></ListViewFolder>;
};

export default withTheme(FolderView);
