import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
  width: 100%;
  height: 325px;
  background-color: ${({ theme }) => theme.colors.header};
  justify-content: center;
  padding: 25px;
  padding-top: ${getStatusBarHeight() + 40}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo_bold};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(34)}px;
  margin-top: 12px;
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo_regular};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(20)}px;
  margin-top: 12px;
`;