import styled from 'styled-components';

import Container from '../layout/Container';
import Header from '../components/Header';
import MobileHeader from '../components/MobileHeader';
import SortBy from '../components/SortBy';
import Button from '../components/Button';
import FeedbackItem from '../components/FeedbackItem';

import useWindowSize from '../hooks/useWindowSize';

import breakpoints from '../styles/breakpoints';

import IconSuggestions from '../assets/suggestions/icon-suggestions.svg';

const HomeContainer = styled(Container)`
  padding-top: 0;
  @media (min-width: ${breakpoints.md}px) {
    padding-top: 56px;
  }
  @media (min-width: ${breakpoints.lg}px) {
    display: grid;
    grid-template-columns: 255px 1fr;
    gap: 0 24px;
    align-items: flex-start;
    padding-top: 94px;
  }
`;

const SortByWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #373f68;
  margin: 0 -24px;
  padding: 8px 24px;
  @media (min-width: ${breakpoints.sm}px) {
    justify-content: flex-start;
    gap: 38px;
    margin: 0;
    padding: 12px 12px 12px 24px;
    border-radius: 10px;
  }
`;

const FeedbackCount = styled.p`
  margin: 0;
  padding-left: 35px;
  background: url(${IconSuggestions}) no-repeat left center;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.25px;
  color: #ffffff;
`;

const AddFeedbackButton = styled(Button)`
  @media (min-width: ${breakpoints.sm}px) {
    margin-left: auto;
  }
`;

const FeedbackListWrapper = styled.div`
  padding-top: 24px;
  & > article:not(:last-child) {
    margin-bottom: 16px;
  }
`;

function Home() {
  const { width } = useWindowSize();

  const pageHeader = width <= breakpoints.sm ? <MobileHeader /> : <Header />;

  return (
    <HomeContainer>
      {pageHeader}
      <main>
        <SortByWrapper>
          {width > breakpoints.md && <FeedbackCount>6 Suggestions</FeedbackCount>}
          <SortBy />
          <AddFeedbackButton>+ Add Feedback</AddFeedbackButton>
        </SortByWrapper>
        <FeedbackListWrapper>
          <FeedbackItem />
          <FeedbackItem />
          <FeedbackItem />
          <FeedbackItem />
          <FeedbackItem />
        </FeedbackListWrapper>
      </main>
    </HomeContainer>
  );
}

export default Home;
