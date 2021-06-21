import { Box, Heading, Center } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <Center
        as="header"
        bgImage="url('/images/flower.jpeg')"
        backgroundSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        minH="70vh"
      >
        <Box p="50" border="1px solid white">
          <Heading as="h1" color="white" >Life is like Flower</Heading>
        </Box>
      </Center>
    </>
  );
};
export default Header;
