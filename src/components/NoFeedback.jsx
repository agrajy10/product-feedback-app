import styled from 'styled-components';
import { motion } from 'framer-motion';

import Button from './Button';

import breakpoints from '../styles/breakpoints';

import IllustrationEmpty from '../assets/suggestions/illustration-empty.svg';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.white};
  padding: 4.75rem 1.5625rem;
  border-radius: 0.625rem;
  text-align: center;
  img {
    width: 100%;
    max-width: 8.0625rem;
    margin-bottom: 1.8125rem;
  }
  .h3 {
    @media (min-width: ${breakpoints.md}px) {
      font-size: 1.5rem;
    }
  }
  p {
    max-width: 25.625rem;
    font-size: 0.8125rem;
    margin: 0 auto 1.5rem auto;
    @media (min-width: ${breakpoints.md}px) {
      font-size: 1rem;
      margin-bottom: 3rem;
    }
  }
`;

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0
  }
};

function NoFeedback() {
  return (
    <Wrapper as={motion.div} variants={containerVariants} initial="hidden" animate="visible">
      <img src={IllustrationEmpty} alt="" />
      <h2 className="h3">There is no feedback yet.</h2>
      <p>
        Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to
        improve our app.
      </p>
      <Button href="/create-feedback">+ Add Feedback</Button>
    </Wrapper>
  );
}

export default NoFeedback;
