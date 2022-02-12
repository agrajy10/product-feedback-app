import styled from 'styled-components';
import { motion } from 'framer-motion';

import breakpoints from '../styles/breakpoints';

const Wrapper = styled.div`
  width: 100%;
  max-width: 72.375rem;
  padding: 1.5rem 1.5rem 5.5rem 1.5rem;
  margin: 0 auto;
  @media (min-width: ${breakpoints.md}px) {
    padding-top: 3.5rem;
    padding-bottom: 7.5rem;
  }
  @media (min-width: ${breakpoints.lg}px) {
    padding-top: 5rem;
    padding-bottom: 8.125rem;
  }
`;

const containerVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween'
    }
  },
  exit: {
    y: 100,
    opacity: 0
  }
};

function Container({ className, children }) {
  return (
    <Wrapper
      className={className}
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit">
      {children}
    </Wrapper>
  );
}

export default Container;
