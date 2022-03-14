import styled from 'styled-components';
import { Button } from '@app/components/common/buttons/Button/Button';

export const SectionContent = styled.div`
  margin: 1.5rem 0 0;

  @media only screen and ${(props) => props.theme.media.md} {
    margin: 1.625rem 0 0;
  }

  .slick-slide > div {
    display: flex;
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1.5rem 0;
  gap: 1.25rem;
`;

export const ViewAllWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardWrapper = styled.div`
  margin: 0 1rem;
`;

export const ArrowBtn = styled(Button)`
  color: ${(props) => props.theme.colors.text.nftLight};
`;
