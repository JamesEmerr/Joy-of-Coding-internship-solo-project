import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Center from "./components/Center";

function App() {
  return (
    //    <Grid templateAreas={'"nav nav" "aside main"'}>
    <Grid
      templateAreas={{
        base: '"nav" "main"', // Mobile devices//
        lg: '"nav nav" "aside main"', //larger than 1024px //
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="aside">
        <SideBar />
      </GridItem>
      <GridItem area="main">
        <Center />
      </GridItem>
    </Grid>
  );
}

export default App;
