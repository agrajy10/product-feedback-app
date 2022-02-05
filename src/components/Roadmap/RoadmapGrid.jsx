import styled from 'styled-components';
import { useSelector } from 'react-redux';

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
  const planned = useSelector((state) =>
    state.feedbackList.feedbackList.filter((item) => item.status === 'planned')
  );
  const inProgress = useSelector((state) =>
    state.feedbackList.feedbackList.filter((item) => item.status === 'in-progress')
  );
  const live = useSelector((state) =>
    state.feedbackList.feedbackList.filter((item) => item.status === 'live')
  );

  return (
    <Wrapper>
      <RoadmapList
        title={`Planned (${planned.length})`}
        desc="Features currently being planned"
        list={planned}
      />
      <RoadmapList
        title={`In Progress (${inProgress.length})`}
        desc="Features currently in progress"
        list={inProgress}
      />
      <RoadmapList title={`Live (${live.length})`} desc="Features currently live" list={live} />
    </Wrapper>
  );
}

export default RoadmapGrid;
