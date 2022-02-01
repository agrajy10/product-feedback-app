import styled from 'styled-components';

import RoadmapList from './RoadmapList';

import breakpoints from '../../styles/breakpoints';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  @media (min-width: ${breakpoints.lg}px) {
    gap: 30px;
  }
`;

function RoadmapGrid() {
  return (
    <Wrapper>
      <RoadmapList title="Planned (2)" desc="Features currently being planned" />
      <RoadmapList title="In Progress (3)" desc="Features currently in progress" />
      <RoadmapList title="Live (1)" desc="Features currently live" />
    </Wrapper>
  );
}

export default RoadmapGrid;
