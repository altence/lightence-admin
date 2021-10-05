import styled from 'styled-components';
import { Typography } from 'antd';
import { hexToRGB } from 'helpers/hexToRGB';

interface StatusProps {
  color: string;
}

export const Header = styled.div`
  padding: 1.5rem 3.5rem;
  display: flex;
  align-items: center;

  background-color: ${(props) => props.theme.colors.back.lightGray};
`;

export const AvatarWrapper = styled.div`
  width: 2rem;
  margin-right: 1.25rem;
`;

export const Text = styled(Typography.Text)`
  font-weight: 600;
`;

export const ContentWrapper = styled.div`
  padding: 1rem 2rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 1px;

    background-color: ${(props) => hexToRGB(props.theme.colors.main.primary, 0.3)};
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  &:nth-last-of-type(1) {
    margin-bottom: 0;
  }
`;

export const Subtite = styled(Typography.Text)`
  font-weight: 500;
  font-size: 0.75rem;

  color: ${(props) => props.theme.colors.main.primary};
`;

export const Status = styled.div<StatusProps>`
  padding: 0.375rem 1.25rem;
  font-weight: 500;
  min-width: 7.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme.colors.text.secondary};

  background-color: ${(props) => props.theme.colors.main[props.color]};

  border-radius: ${(props) => props.theme.border.radius};
`;

export const DetailsWrapper = styled.div`
  padding: 0.8rem;
  text-align: center;
`;
