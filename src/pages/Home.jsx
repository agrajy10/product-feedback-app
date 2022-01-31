import Container from '../layout/Container';
import Header from '../components/Header';
import MobileHeader from '../components/MobileHeader';
import FeedbackList from '../components/FeedbackList';
import SortBy from '../components/SortBy';
import Button from '../components/Button';

import useWindowSize from '../hooks/useWindowSize';

import breakpoints from '../styles/breakpoints';

function Home() {
  const { width } = useWindowSize();

  const pageHeader = width <= breakpoints.sm ? <MobileHeader /> : <Header />;

  return (
    <Container>
      {pageHeader}
      <SortBy />
      <FeedbackList />
      <Button>+ Add Feedback</Button>
    </Container>
  );
}

export default Home;
