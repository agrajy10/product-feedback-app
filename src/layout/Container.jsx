import styled from 'styled-components';
import { motion } from 'framer-motion';

import breakpoints from '../styles/breakpoints';

const Wrapper = styled.div`
  width: 100%;
  max-width: 72.375rem;
  padding-top: 24px;
  padding-bottom: 88px;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin: 0 auto;
  @media (min-width: ${breakpoints.md}px) {
    padding-top: 56px;
    padding-bottom: 120px;
  }
  @media (min-width: ${breakpoints.lg}px) {
    padding-top: 80px;
    padding-bottom: 130px;
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
      animate="visible">
      {children}
    </Wrapper>
  );
}

export default Container;
