import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { downvoteFeedback, upvoteFeedback } from '../features/feedback/feedbackListThunk';

import breakpoints from '../styles/breakpoints';

import { ReactComponent as IconArrowUp } from '../assets/shared/icon-arrow-up.svg';

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0 10px;
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: -0.13px;
  line-height: 1;
  padding: 0.5rem 0.8125rem;
  border-radius: 0.625rem;
  border: none;
  cursor: pointer;
  user-select: none;
  background: ${({ theme }) => theme.upVoteButton.bg};
  color: ${({ theme }) => theme.upVoteButton.color};
  svg {
    color: ${({ theme }) => theme.upVoteButton.arrow};
  }
  &:hover {
    background: ${({ theme }) => theme.upVoteButton.hover.bg};
    color: ${({ theme }) => theme.upVoteButton.hover.color};
    svg {
      color: ${({ theme }) => theme.upVoteButton.hover.arrow};
    }
  }
  &:disabled {
    opacity: 0.5;
    cursor: auto;
  }
  &.active {
    background: ${({ theme }) => theme.upVoteButton.active.bg};
    color: ${({ theme }) => theme.upVoteButton.active.color};
    svg {
      color: ${({ theme }) => theme.upVoteButton.active.arrow};
    }
  }
  @media (min-width: ${breakpoints.md}px) {
    flex-direction: column;
    gap: 8px;
    padding: 0.8125rem 0.625rem;
  }
`;

function UpVoteButton({ id, className, upvotes }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClick = async () => {
    if (!user) {
      navigate('/login');
      return;
    }
    if (upvotes.includes(user.uid)) {
      try {
        await dispatch(downvoteFeedback({ feedbackID: id, userID: user.uid })).unwrap();
      } catch (error) {
        toast.error(error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      try {
        await dispatch(upvoteFeedback({ feedbackID: id, userID: user.uid })).unwrap();
      } catch (error) {
        toast.error(error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <Button
      className={`${className} ${upvotes.includes(user?.uid) ? 'active' : ''}`}
      type="button"
      disabled={isSubmitting}
      onClick={onClick}>
      <IconArrowUp aria-hidden="true" />
      {upvotes.length}
    </Button>
  );
}

export default UpVoteButton;
