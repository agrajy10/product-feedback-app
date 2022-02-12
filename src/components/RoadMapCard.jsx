import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Wrapper = styled.div`
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 0.625rem;
`;

const HeadingandLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  h2 {
    margin: 0;
    color: ${({ theme }) => theme.color};
  }
`;

const ViewAll = styled(Link)`
  display: inline-block;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #4661e6;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`;

const RoadMapList = styled.ul`
  margin: 1.5rem 0 0 0;
  padding: 0;
  list-style: none;
  line-height: 1;
  li {
    position: relative;
    padding: 0 1.375rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.text.color1};
    margin-bottom: 0.75rem;
    &::before {
      content: '';
      display: inline-block;
      position: absolute;
      width: 0.5rem;
      height: 0.5rem;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      border-radius: 50%;
    }
    span {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      font-weight: 700;
    }
  }
  li:last-child {
    margin-bottom: 0;
  }
  li:nth-child(1) {
    &::before {
      background-color: ${({ theme }) => theme.roadmap.planned};
    }
  }
  li:nth-child(2) {
    &::before {
      background-color: ${({ theme }) => theme.roadmap.inProgress};
    }
  }
  li:nth-child(3) {
    &::before {
      background-color: ${({ theme }) => theme.roadmap.live};
    }
  }
`;

function RoadMapCard() {
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
      <HeadingandLink>
        <h2 className="h3">Roadmap</h2>
        <ViewAll to="/roadmap" aria-label="View roadmap">
          View
        </ViewAll>
      </HeadingandLink>
      <RoadMapList>
        <li>
          Planned <span>{planned.length}</span>
        </li>
        <li>
          In-Progress <span>{inProgress.length}</span>
        </li>
        <li>
          Live <span>{live.length}</span>
        </li>
      </RoadMapList>
    </Wrapper>
  );
}

export default RoadMapCard;
