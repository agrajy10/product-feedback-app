import styled from 'styled-components';

import breakpoints from '../styles/breakpoints';

import { ReactComponent as IconArrowUp } from '../assets/shared/icon-arrow-up.svg';

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0 10px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: -0.13px;
  line-height: 1;
  padding: 8px 13px;
  border-radius: 10px;
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
    padding: 13px 10px;
  }
`;

function UpVoteButton({ className, upvotes }) {
  return (
    <Button className={className} type="button">
      <IconArrowUp />
      {upvotes}
    </Button>
  );
}

export default UpVoteButton;
