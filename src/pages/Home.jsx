import styled from 'styled-components';

import Container from '../layout/Container';
import Header from '../components/Header';
import MobileHeader from '../components/MobileHeader';
import FeedbackList from '../components/FeedbackList';
import SortBy from '../components/SortBy';
import Button from '../components/Button';

import useWindowSize from '../hooks/useWindowSize';

import breakpoints from '../styles/breakpoints';

const SortByWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #373f68;
  margin: 0 -24px;
  padding: 8px 24px;
`;

function Home() {
  const { width } = useWindowSize();

  const pageHeader = width <= breakpoints.sm ? <MobileHeader /> : <Header />;

  return (
    <Container>
      {pageHeader}
      <SortByWrapper>
        <SortBy />
        <Button>+ Add Feedback</Button>
      </SortByWrapper>
      <FeedbackList />
    </Container>
  );
}

export default Home;
