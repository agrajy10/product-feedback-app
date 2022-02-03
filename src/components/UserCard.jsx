import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import Button from './Button';

import { logoutUser } from '../features/auth/authThunk';

import Avatar from '../assets/user-images/image-ryan.jpg';

const Wrapper = styled.div`
  background-color: #ffffff;
  padding: 24px;
  border-radius: 10px;
  button {
    width: 100%;
  }
  a {
    display: block;
  }
  a:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const UserAvatar = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 auto 10px auto;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const UserDisplayName = styled.p`
  font-size: 15px;
  font-weight: 700;
  margin: 0;
  color: ${({ theme }) => theme.text.body};
  text-align: center;
`;

const UserEmail = styled.p`
  font-size: 13px;
  text-align: center;
  margin: 0 0 10px 0;
  color: ${({ theme }) => theme.text.color1};
`;

function UserCard() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      {user ? (
        <>
          <UserAvatar>
            <img src={Avatar} alt={`Profile picture of ${user.displayName}`} />
          </UserAvatar>
          <UserDisplayName>{user.displayName}</UserDisplayName>
          <UserEmail>{user.email}</UserEmail>
          <Button onClick={() => dispatch(logoutUser())}>Logout</Button>
        </>
      ) : (
        <>
          <Button href="/login">Login</Button>
          <Button href="/register" variant="secondary">
            Register
          </Button>
        </>
      )}
    </Wrapper>
  );
}

export default UserCard;
