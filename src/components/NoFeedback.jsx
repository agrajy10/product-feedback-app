import styled from 'styled-components';
import { motion } from 'framer-motion';

import Button from './Button';

import breakpoints from '../styles/breakpoints';

import IllustrationEmpty from '../assets/suggestions/illustration-empty.svg';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.white};
  padding: 76px 25px;
  border-radius: 10px;
  text-align: center;
  img {
    width: 100%;
    max-width: 129px;
    margin-bottom: 29px;
  }
  .h3 {
    @media (min-width: ${breakpoints.md}px) {
      font-size: 24px;
    }
  }
  p {
    max-width: 410px;
    font-size: 13px;
    margin: 0 auto 24px auto;
    @media (min-width: ${breakpoints.md}px) {
      font-size: 16px;
      margin-bottom: 48px;
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
