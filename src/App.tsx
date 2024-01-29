import styled from "@emotion/styled";
import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import Search from "./pages/Search/indx";
import Header from "./pages/components/Header";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:query" element={<Search />} />
        </Routes>
      </Container>
    </QueryClientProvider>
  );
};

const Container = styled.div``;

export default App;
