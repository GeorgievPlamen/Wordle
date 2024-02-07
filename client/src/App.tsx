import { Box } from "@mui/material";
import "./styles.css";
import TestGetWord from "./App/Components/TestGetWord";

function App() {
  return (
    <>
      <Box
        display={"flex"}
        width={"100vw"}
        height={"100vh"}
        margin={"auto"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <h1>Hello World</h1>
        <TestGetWord />
      </Box>
    </>
  );
}

export default App;
