import styled from 'styled-components';
import { Button } from '@app/components/common/buttons/Button/Button';

export const SectionWrapper = styled.div`
  .slick-slide > div {
    display: flex;
  }

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.md - 0.02}px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1.25rem;
    margin-bottom: 1.5rem;
  }
`;

export const ViewAllWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardWrapper = styled.div`
  margin: 0 0.625rem;
`;

export const ArrowBtn = styled(Button)`
  color: ${(props) => props.theme.colors.text.nftLight};
`;