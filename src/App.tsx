import { Flex } from "components/UI/Flex";
import { requests, baseURL } from "utils/constants";
import { useEffect } from "react";
import { useAppDispatch } from "store/hooks";
import { getMovies } from "store/reducers/getMovies";
import styled from "styled-components";

export const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: darkcyan;
`;

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getMovies(baseURL + requests.fetchActionMovies));
  }, [dispatch]);
  return (
    <AppWrapper>
      <Flex justify="center">Hello React</Flex>
    </AppWrapper>
  );
}

export default App;
