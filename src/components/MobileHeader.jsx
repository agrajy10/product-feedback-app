import styled from 'styled-components';
import { Popover } from '@headlessui/react';

import CategoriesCard from './CategoriesCard';
import RoadMapCard from './RoadMapCard';

import headerBg from '../assets/suggestions/mobile/background-header.png';
import IconHamburger from '../assets/shared/mobile/icon-hamburger.svg';
import IconClose from '../assets/shared/mobile/icon-close.svg';

const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background: url(${headerBg}) no-repeat center;
  background-size: cover;
  color: #ffffff;
  margin: 0 -24px;
  z-index: 9899;
`;

const Logo = styled.h1`
  font-size: 15px;
  letter-spacing: -0.19px;
  margin: 0;
  span {
    display: block;
    font-size: 13px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.75);
  }
`;

const MenuToggler = styled(Popover.Button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  user-select: none;
`;

const MenuWrapper = styled(Popover.Panel)`
  position: fixed;
  bottom: 0;
  right: 0;
  gap: 24px;
  width: 100%;
  height: calc(100% - 72px);
  overflow: hidden auto;
  max-width: 270px;
  padding: 24px;
  background-color: #f7f8fd;
  z-index: 9830;
  & > div:not(:last-child) {
    margin-bottom: 24px;
  }
`;

const Overlay = styled(Popover.Overlay)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 72px);
  background-color: #000000;
  opacity: 0.5;
  z-index: 9800;
`;

function MobileHeader() {
  return (
    <Header>
      <Logo>
        Frontend Mentor <span>Feedback Board</span>
      </Logo>
      <Popover>
        {({ open }) => (
          <>
            <MenuToggler aria-label={open ? 'Close menu' : 'Open menu'}>
              <img src={open ? IconClose : IconHamburger} alt="" />
            </MenuToggler>
            <Overlay />
            <MenuWrapper>
              <CategoriesCard />
              <RoadMapCard />
            </MenuWrapper>
          </>
        )}
      </Popover>
    </Header>
  );
}

export default MobileHeader;
