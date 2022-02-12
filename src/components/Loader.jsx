import styled from 'styled-components';

import IconLoader from '../assets/shared/icon-loader.svg';

const Wrapper = styled.div`
  width: 100%;
  height: 18.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 3.125rem;
    height: 3.125rem;
  }
`;

function Loader() {
  return (
    <Wrapper>
      <img src={IconLoader} alt="" />
    </Wrapper>
  );
}

export default Loader;
