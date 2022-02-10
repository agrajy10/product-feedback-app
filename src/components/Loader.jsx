import styled from 'styled-components';

import IconLoader from '../assets/shared/icon-loader.svg';

const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 50px;
    height: 50px;
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
