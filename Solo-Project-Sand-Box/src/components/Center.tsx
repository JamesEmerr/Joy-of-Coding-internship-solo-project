import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/pluto-view.jpg";

const Center = () => {
  return (
    <HStack>
      <Image src={logo} />
    </HStack>
  );
};

export default Center;
