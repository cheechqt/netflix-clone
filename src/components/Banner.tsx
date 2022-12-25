import styled, { css } from "styled-components";
import { Flex } from "components/UI/Flex";
import { sliceText } from "utils/sliceText";
import { useAppSelector } from "store/hooks";
import { baseImgURL } from "utils/constants";
import { Movie } from "types";
import { useEffect, useState } from "react";

type WrapperProps = { bgImgURL: string | undefined };

const Wrapper = styled.div<WrapperProps>`
  margin-bottom: 20px;
  padding-top: 120px;
  ${(props) =>
    props.bgImgURL
      ? css`
          background-image: url(${props.bgImgURL});
          background-position: center center;
          background-size: cover;
        `
      : css`
          background-color: #111;
        `}
`;

const Gradient = styled.div`
  height: 7.4rem;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.6),
    #111
  );
`;

const MovieTitle = styled.h2`
  max-width: 600px;
  font-size: 3rem;
  line-height: 3rem;
`;

const Button = styled.button`
  font-size: 1.05rem;
  font-weight: 700;
  color: #e6e6e6;
  background-color: rgba(51, 51, 51, 0.65);
  border-radius: 0.2vw;
  padding: 0.5rem 2rem;
  margin-top: 8px;
  &:hover {
    transition: all 0.2s;
    background-color: #e6e6e6;
    color: #111;
  }
`;

const Description = styled.p`
  max-width: 600px;
  margin-top: 8px;
  font-size: 1rem;
`;

export const Banner = () => {
  const [movie, setMovie] = useState<Movie | undefined>(undefined);
  const netflixMovies = useAppSelector(
    (state) => state.movies.netflixOriginals
  );
  console.log(movie);

  useEffect(() => {
    const randomIndex = Math.trunc(Math.random() * netflixMovies.length - 1);
    setMovie(netflixMovies[randomIndex]);
  }, [netflixMovies]);

  return (
    <Wrapper bgImgURL={baseImgURL + movie?.backdrop_path}>
      <Flex direction="column" items="start" margin="80px 0px" padding="0 20px">
        <MovieTitle>{movie?.name || movie?.original_name}</MovieTitle>
        <Flex gap="10px">
          <Button>Play</Button>
          <Button>My List</Button>
        </Flex>
        <Description>{sliceText(`${movie?.overview}`, 250)}</Description>
      </Flex>
      <Gradient />
    </Wrapper>
  );
};
