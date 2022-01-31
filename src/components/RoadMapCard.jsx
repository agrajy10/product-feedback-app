import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  background-color: #ffffff;
  padding: 24px;
  border-radius: 10px;
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
  font-size: 13px;
  font-weight: 600;
  color: #4661e6;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`;

const RoadMapList = styled.ul`
  margin: 24px 0 0 0;
  padding: 0;
  list-style: none;
  line-height: 1;
  li {
    position: relative;
    padding: 0 22px;
    font-size: 16px;
    color: ${({ theme }) => theme.color};
    margin-bottom: 12px;
    &::before {
      content: '';
      display: inline-block;
      position: absolute;
      width: 8px;
      height: 8px;
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
          Planned <span>2</span>
        </li>
        <li>
          In-Progress <span>3</span>
        </li>
        <li>
          Live <span>1</span>
        </li>
      </RoadMapList>
    </Wrapper>
  );
}

export default RoadMapCard;
