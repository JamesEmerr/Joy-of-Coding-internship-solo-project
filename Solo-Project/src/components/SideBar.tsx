import { Button, VStack } from "@chakra-ui/react"; 

const SideBar = () => {
  return (
     
      <VStack spacing={5} direction="row" align="left">
        align="stretch"
        <Button
          colorScheme="blue"
          size="xl"
          variant="outline"
          onClick={() => console.log("Clicked")}
        >
         About
        </Button>
     <Button colorScheme="blue" size="xl" variant="outline">
          Task List
        </Button>
        <Button colorScheme="blue" size="xl" variant="outline">
          Calendar
        </Button>
        <Button colorScheme="blue" size="xl" variant="outline">
          MCX Board
        </Button>
        </VStack>
  );
}
//    <>
//      <Button>
//        {/* This is the alias of BrowserRouter i.e. Router */}
//        <Router>
//          <Routes>
//            {/* This route is for about component 
//		with exact path "/about", in component 
//		props we passes the imported component*/}
//					<Route
//						path="/components/about"
//						element={<About />}
//					/>					
//		    </Routes>
//		</Router>
//        About
//        </Button>
        
//	</>
//	);



  //*****************************************************}
  // Working SideBar
  //  return (
  //    <VStack spacing={5} direction="row" align="left">
  //      align="stretch"
  //      <Button
  //        colorScheme="blue"
  //        size="xl"
  //        variant="outline"
  //        onClick={() => console.log("Clicked")}
  //      >
  //       About
  //      </Button>
  //   <Button colorScheme="blue" size="xl" variant="outline">
  //        Task List
  //      </Button>
  //      <Button colorScheme="blue" size="xl" variant="outline">
  //        Calendar
  //      </Button>
  //      <Button colorScheme="blue" size="xl" variant="outline">
  //        MCX Board
  //      </Button>
  //      </VStack>
  //  );

export default SideBar;
