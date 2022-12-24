import { FC } from "react";
import { useAppSelector } from "store/hooks";
import styled, { css } from "styled-components";
import { MovieCard } from "./MovieCard";

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
  padding: 10px 0px;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

interface TitleProps {
  children: React.ReactNode;
  uppercase?: boolean;
}

const Title = styled.h3<TitleProps>`
  font-weight: 500;
  font-size: 1.3rem;
  color: #fff;
  ${(props) =>
    props.uppercase &&
    css`
      text-transform: uppercase;
    `}
`;

interface MovieRowProps {
  title: string;
  section: string;
}

export const MovieRow: FC<MovieRowProps> = ({ title, section }) => {
  const movies = useAppSelector((state) => state.movies[section]);
  return (
    <>
      <Title uppercase={section === "netflixOriginals"}>{title}</Title>
      <Row>
        {movies.map((movie) => {
          return <MovieCard {...movie} key={movie.id} />;
        })}
      </Row>
    </>
  );
};
