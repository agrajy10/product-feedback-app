import styled from 'styled-components';

import CategoriesCard from './CategoriesCard';
import RoadMapCard from './RoadMapCard';

import breakpoints from '../styles/breakpoints';

import tableHeaderBg from '../assets/suggestions/tablet/background-header.png';
import desktopHeaderBg from '../assets/suggestions/desktop/background-header.png';

const Wrapper = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 0 0 40px 0;
  @media (min-width: ${breakpoints.lg}px) {
    align-items: flex-start;
    justify-content: flex-start;
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 0;
  }
`;

const LogoWrapper = styled.div`
  background: url(${tableHeaderBg}) no-repeat center;
  background-size: cover;
  border-radius: 10px;
  min-height: 178px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 24px;
  @media (min-width: ${breakpoints.lg}px) {
    min-height: 137px;
  }
`;

const Logo = styled.h1`
  font-size: 20px;
  color: #ffffff;
  letter-spacing: -0.25px;
  margin: 0;
  span {
    display: block;
    font-size: 15px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.75);
  }
`;

function Header() {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo>
          Frontend Mentor <span>Feedback Board</span>
        </Logo>
      </LogoWrapper>
      <CategoriesCard />
      <RoadMapCard />
    </Wrapper>
  );
}

export default Header;
