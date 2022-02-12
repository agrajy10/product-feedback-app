import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import Button from './Button';

import { logoutUser } from '../features/auth/authThunk';

const Wrapper = styled.div`
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 0.625rem;
  button {
    width: 100%;
  }
  a {
    display: block;
  }
  a:not(:last-child) {
    margin-bottom: 0.625rem;
  }
`;

const UserAvatar = styled.div`
  width: 3.75rem;
  height: 3.75rem;
  margin: 0 auto 0.625rem auto;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const UserDisplayName = styled.p`
  font-size: 0.9375rem;
  font-weight: 700;
  margin: 0;
  color: ${({ theme }) => theme.color};
  text-align: center;
`;

const UserEmail = styled.p`
  font-size: 0.8125rem;
  text-align: center;
  margin: 0 0 0.625rem 0;
  color: ${({ theme }) => theme.color};
`;

function UserCard() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      {user ? (
        <>
          <UserAvatar>
            <img src={user.photoURL} alt={`Profile picture of ${user.displayName}`} />
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
