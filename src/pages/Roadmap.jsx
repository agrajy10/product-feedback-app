import styled from 'styled-components';

import Container from '../layout/Container';
import Button from '../components/Button';
import BackButton from '../components/BackButton';
import RoadmapTabs from '../components/Roadmap/RoadmapTabs';
import RoadmapGrid from '../components/Roadmap/RoadmapGrid';

import useWindowSize from '../hooks/useWindowSize';

import breakpoints from '../styles/breakpoints';

const RoadmapContainer = styled(Container)`
  padding-top: 0;
  @media (min-width: ${breakpoints.md}px) {
    padding-top: 56px;
  }
  @media (min-width: ${breakpoints.lg}px) {
    padding-top: 78px;
  }
`;

const Header = styled.header`
  background-color: #373f68;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 -24px;
  @media (min-width: ${breakpoints.md}px) {
    padding: 32px;
    margin: 0 0 32px 0;
    border-radius: 10px;
  }
  @media (min-width: ${breakpoints.lg}px) {
    margin: 0 0 48px 0;
  }
`;

const Heading = styled.h1`
  margin: 0;
  font-size: 18px;
  color: #fff;
  @media (min-width: ${breakpoints.md}px) {
    font-size: 24px;
  }
`;

function Roadmap() {
  const { width } = useWindowSize();

  return (
    <RoadmapContainer>
      <Header>
        <div>
          <BackButton variant="dark">Go Back</BackButton>
          <Heading>Roadmap</Heading>
        </div>
        <Button href="/create-feedback">+ Add Feedback</Button>
      </Header>
      <main>
        {width <= breakpoints.md && <RoadmapTabs />}
        {width > breakpoints.md && <RoadmapGrid />}
      </main>
    </RoadmapContainer>
  );
}

export default Roadmap;
