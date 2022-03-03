import styled from 'styled-components';

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 0.2px solid ${(props) => props.theme.colors.border.nft};
  padding-bottom: 0.875rem;
`;

// TODO refactor typings
export const h1 = styled.h1`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0;
`;

export const ViewAll = styled.div`
  padding: 0 15px;
  border-bottom: 0.2px solid #a3a3b3;
`;

export const ViewAllLink = styled.a`
  font-family: Lato;
  font-weight: 400;
  font-size: 12px;
  color: #475164;
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.5rem 0;
  width: 100%;
  gap: 1.25rem;
`;
