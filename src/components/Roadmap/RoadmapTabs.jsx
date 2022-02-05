import { Fragment } from 'react';
import styled from 'styled-components';
import { Tab } from '@headlessui/react';
import { useSelector } from 'react-redux';

import RoadmapList from './RoadmapList';

const TabList = styled(Tab.List)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  border-bottom: 1px solid rgba(151, 151, 151, 0.25);
  margin: 0 -24px;
`;

const TabButton = styled.button`
  position: relative;
  font-size: 13px;
  font-weight: 700;
  line-height: 1;
  color: ${({ theme }) => theme.color};
  opacity: ${({ selected }) => (selected ? 1 : 0.4)};
  padding: 20px 0;
  background: transparent;
  text-align: center;
  cursor: pointer;
  user-select: none;
  border: none;
  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 4px;
    opacity: ${({ selected }) => (selected ? 1 : 0)};
  }
  &.planned::after {
    background-color: ${({ theme }) => theme.roadmap.planned};
  }
  &.in-progress::after {
    background-color: ${({ theme }) => theme.roadmap.inProgress};
  }
  &.live::after {
    background-color: ${({ theme }) => theme.roadmap.live};
  }
`;

const TabPanel = styled(Tab.Panel)`
  padding: 24px 0;
`;

function RoadmapTabs() {
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
    <Tab.Group>
      <TabList>
        <Tab as={Fragment} className="planned">
          {({ selected }) => <TabButton selected={selected}>Planned ({planned.length})</TabButton>}
        </Tab>
        <Tab as={Fragment} className="in-progress">
          {({ selected }) => (
            <TabButton selected={selected}>In Progress ({inProgress.length})</TabButton>
          )}
        </Tab>
        <Tab as={Fragment} className="live">
          {({ selected }) => <TabButton selected={selected}>Live ({live.length})</TabButton>}
        </Tab>
      </TabList>
      <Tab.Panels>
        <TabPanel>
          <RoadmapList
            title={`Planned (${planned.length})`}
            desc="Features currently being planned"
            list={planned}
          />
        </TabPanel>
        <TabPanel>
          <RoadmapList
            title={`In Progress (${inProgress.length})`}
            desc="Features currently in progress"
            list={inProgress}
          />
        </TabPanel>
        <TabPanel>
          <RoadmapList title={`Live (${live.length})`} desc="Features currently live" list={live} />
        </TabPanel>
      </Tab.Panels>
    </Tab.Group>
  );
}

export default RoadmapTabs;
