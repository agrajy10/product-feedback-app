import { Fragment } from 'react';
import styled from 'styled-components';
import { Tab } from '@headlessui/react';

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
  return (
    <Tab.Group>
      <TabList>
        <Tab as={Fragment} className="planned">
          {({ selected }) => <TabButton selected={selected}>Planned (2)</TabButton>}
        </Tab>
        <Tab as={Fragment} className="in-progress">
          {({ selected }) => <TabButton selected={selected}>In Progress (3)</TabButton>}
        </Tab>
        <Tab as={Fragment} className="live">
          {({ selected }) => <TabButton selected={selected}>Live (1)</TabButton>}
        </Tab>
      </TabList>
      <Tab.Panels>
        <TabPanel>
          <RoadmapList title="Planned (2)" desc="Features currently being planned" />
        </TabPanel>
        <TabPanel>
          <RoadmapList title="In Progress (3)" desc="Features currently in progress" />
        </TabPanel>
        <TabPanel>
          <RoadmapList title="Live (1)" desc="Features currently live" />
        </TabPanel>
      </Tab.Panels>
    </Tab.Group>
  );
}

export default RoadmapTabs;
