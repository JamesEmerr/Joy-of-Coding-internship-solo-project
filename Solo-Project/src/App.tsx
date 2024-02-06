import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  return<Grid templateAreas={'"nav nav" "aside main"'}>
    <GridItem area='nav' bg='coral'>Navigation Bar</GridItem>
    <GridItem area='aside' bg='grey'>Side Panel</GridItem>
    <GridItem area='main' bg='blue'>Main</GridItem>
  </Grid>
}

export default App;
