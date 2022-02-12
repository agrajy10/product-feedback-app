import styled from 'styled-components';

import breakpoints from '../../styles/breakpoints';

const Wrapper = styled.div`
  position: relative;
  padding-left: 3.5rem;
  margin-bottom: 1rem;
`;

const AuthorAvatar = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AuthorName = styled.h3`
  font-size: 0.8125rem;
  margin: 0;
  @media (min-width: ${breakpoints.md}px) {
    font-size: 0.875rem;
  }
`;

function CommentAuthor({ name, email, profilePhoto }) {
  return (
    <Wrapper>
      <AuthorAvatar>
        <img src={profilePhoto} alt="Anner profile picture" />
      </AuthorAvatar>
      <AuthorName>{name}</AuthorName>
    </Wrapper>
  );
}

export default CommentAuthor;
