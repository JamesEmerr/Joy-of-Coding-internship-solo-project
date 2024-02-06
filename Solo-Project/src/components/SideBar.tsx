import { Button, HStack } from "@chakra-ui/react";

const SideBar = () => {
  return (
    <HStack>
      <Button> About</Button>
      <Button>Task List</Button>
      <Button>Calendar</Button>
      <Button>MCX Board</Button>
    </HStack>
  );
};

export default SideBar;
