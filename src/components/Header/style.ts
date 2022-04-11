import styled from 'styled-components/native';


export const Container = styled.View `
  align-items: center;
  padding: 40px 0 30px;
`;

export const TopContent = styled.View `
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const Logo = styled.Image ``;

export const User = styled.Text `
  color: ${({theme}) => theme.colors.textColor};
  font-weight: bold;
  font-size: 18px;

  margin-left: 8px;
`;
