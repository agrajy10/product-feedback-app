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
    padding-top: 3.5rem;
  }
  @media (min-width: ${breakpoints.lg}px) {
    padding-top: 4.875rem;
  }
`;

const Header = styled.header`
  background-color: #373f68;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 -1.5rem;
  @media (min-width: ${breakpoints.md}px) {
    padding: 2rem;
    margin: 0 0 2rem 0;
    border-radius: 0.625rem;
  }
  @media (min-width: ${breakpoints.lg}px) {
    margin: 0 0 3rem 0;
  }
`;

const Heading = styled.h1`
  margin: 0;
  font-size: 1.125rem;
  color: #fff;
  @media (min-width: ${breakpoints.md}px) {
    font-size: 1.5rem;
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
