import styled from 'styled-components';

import RoadmapItem from './RoadmapItem';

import breakpoints from '../../styles/breakpoints';

const RoadmapListWrapper = styled.div`
  & > article:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const Title = styled.h2`
  font-size: 1.125rem;
  margin: 0 0 0.3125rem 0;
  @media (min-width: ${breakpoints.md}px) {
    font-size: 0.875rem;
  }
  @media (min-width: ${breakpoints.lg}px) {
    font-size: 1.125rem;
  }
`;

const Desc = styled.p`
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.text.color1};
  margin: 0 0 1.5rem 0;
  @media (min-width: ${breakpoints.md}px) {
    font-size: 0.875rem;
  }
  @media (min-width: ${breakpoints.lg}px) {
    font-size: 1rem;
  }
`;

function RoadmapList({ title, desc, list }) {
  return (
    <div>
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
      {list.length > 0 && (
        <RoadmapListWrapper>
          {list.map(({ id, ...data }) => {
            return <RoadmapItem key={id} id={id} {...data} />;
          })}
        </RoadmapListWrapper>
      )}
    </div>
  );
}

export default RoadmapList;
