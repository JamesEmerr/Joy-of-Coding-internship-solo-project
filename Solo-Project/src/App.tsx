import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Center from "./components/Center";
import "./App.css";
import About from "./components/About";
import { useState } from "react";

// showstate, usesetState


function App() {

//  const [showAbout, setShowAbout] = useState(true)

  return (
       <Grid templateAreas={'"nav nav" "aside main"'}>
      <Grid
        templateAreas={{
          base: '"nav" "main"', //Mobile devices
          lg: '"nav nav" "aside main"', //Larger than 1024px
        }}
      />
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="aside">
        <SideBar />  
      </GridItem>
      <GridItem area="main">
        <Center />
{/*        <if (showAbout) {<About} : setShowAbout */}
      </GridItem>
    </Grid>
  );
}
//    <>
//      {/* This is the alias of BrowserRouter i.e. Router */}
//      <Router>
//        <Routes>
//          {/* This route is for home component 
//		with exact path "/", in component props 
//		we passes the imported component*/}
//          <Route path="/" element={<TestHome />} />

//          {/* This route is for about component 
//		with exact path "/about", in component 
//		props we passes the imported component*/}
//          <Route path="/about" element={<TestAbout />} />

//          {/* This route is for contactus component
//		with exact path "/contactus", in 
//		component props we passes the imported component*/}
//          <Route path="/contactus" element={<TestContactUs />} />

//          {/* If any route mismatches the upper 
//		route endpoints then, redirect triggers 
//		and redirects app to home component with to="/" */}
//          {/* <Redirect to="/" /> */}
//          <Route path="*" element={<Navigate to="/" />} />
//        </Routes>
//      </Router>
//    </>
//  );
//}

export default App;







// Working Grid.........................
//import { Grid, GridItem } from "@chakra-ui/react";
//import NavBar from "./components/NavBar";
//import SideBar from "./components/SideBar";
//import Center from "./components/Center";

//function App() {
//  return (
//    <Grid templateAreas={'"nav nav" "aside main"'}>
//      <Grid
//        templateAreas={{
//          base: '"nav" "main"', //Mobile devices
//          lg: '"nav nav" "aside main"', //Larger than 1024px
//        }}
//      />
//      <GridItem area="nav">
//        <NavBar />
//      </GridItem>
//      <GridItem area="aside">
//        <SideBar />
//      </GridItem>
//      <GridItem area="main">
//        <Center />
//      </GridItem>
//    </Grid>
//  );
//}

//export default App;

//******************************************************************** */
// working link to About
//function App() {
//  return (
//    <About />
//  )
//}

//export default App;
