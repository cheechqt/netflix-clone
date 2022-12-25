import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { Flex } from "./UI/Flex";

interface NavWrapperProps {
  black: boolean;
  children: React.ReactNode;
}

const NavWrapper = styled.div<NavWrapperProps>`
  position: fixed;
  z-index: 1;
  padding: 30px 20px;
  width: 100%;
  transition: all 0.5s;
  ${(props) =>
    props.black &&
    css`
      background-color: #111;
    `};
`;

const NavImage = styled.img`
  position: fixed;
  object-fit: contain;
`;

const Logo = styled(NavImage)`
  left: 20px;
  transform: translateY(-50%);
  width: 80px;
`;

const UserImg = styled(NavImage)`
  right: 20px;
  width: 30px;
  border-radius: 2px;
`;

export const Nav = () => {
  const [isBgShown, setIsBgShown] = useState(false);

  const handleScroll = () => {
    window.scrollY > 100 ? setIsBgShown(true) : setIsBgShown(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavWrapper black={isBgShown}>
      <Flex justify="space-between" items="center">
        <Link to="/">
          <Logo
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt="logo"
          />
        </Link>
        <UserImg src="https://loremflickr.com/320/240/dog" alt="user img" />
      </Flex>
    </NavWrapper>
  );
};
