import { FlatList } from "react-native";
import styled, { DefaultTheme } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: 113px;
  background-color: ${({ theme }) => theme.colors.header};
  justify-content: flex-end;
  padding: 32px 24px;
`;

export const HeaderContent = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const TotalCars = styled.Text`
  font-family: ${({ theme }) => theme.fonts.inter_regular};
  color: ${({ theme }) => theme.colors.text};
`;

export const CarList = styled(FlatList).attrs({
  // attrs: adiciona propriedades
  contentContainerStyle: {
    padding: 24,
  },
  showVerticalScrollIndicator: false
})``;
