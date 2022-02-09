import styled from 'styled-components';

import breakpoints from '../../styles/breakpoints';

const Wrapper = styled.div`
  position: relative;
  padding-left: 56px;
  margin-bottom: 16px;
`;

const AuthorAvatar = styled.div`
  width: 40px;
  height: 40px;
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
  font-size: 13px;
  margin: 0;
  @media (min-width: ${breakpoints.md}px) {
    font-size: 14px;
  }
`;

const AuthorUserName = styled.span`
  display: block;
  font-size: 13px;
  color: ${({ theme }) => theme.text.color1};
  @media (min-width: ${breakpoints.md}px) {
    font-size: 14px;
  }
`;

function CommentAuthor({ name, email, profilePhoto }) {
  return (
    <Wrapper>
      <AuthorAvatar>
        <img src={profilePhoto} alt="Anner profile picture" />
      </AuthorAvatar>
      <AuthorName>{name}</AuthorName>
      <AuthorUserName>{email}</AuthorUserName>
    </Wrapper>
  );
}

export default CommentAuthor;
