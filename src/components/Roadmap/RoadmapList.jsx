import styled from 'styled-components';

import RoadmapItem from './RoadmapItem';

import breakpoints from '../../styles/breakpoints';

const RoadmapListWrapper = styled.div`
  & > article:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const Title = styled.h2`
  font-size: 18px;
  margin: 0 0 5px 0;
  @media (min-width: ${breakpoints.md}px) {
    font-size: 14px;
  }
  @media (min-width: ${breakpoints.lg}px) {
    font-size: 18px;
  }
`;

const Desc = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.text.color1};
  margin: 0 0 24px 0;
  @media (min-width: ${breakpoints.md}px) {
    font-size: 14px;
  }
  @media (min-width: ${breakpoints.lg}px) {
    font-size: 16px;
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
