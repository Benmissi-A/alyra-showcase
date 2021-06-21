import { Box, Heading, Container, SimpleGrid, Text } from "@chakra-ui/react";

const Grid = () => {
  return (
    <>
      <Box py="50" bg="#3C415C" color="white">
        <Container maxW="container.xl">
          <SimpleGrid columns={[1, null, 3]} gap="10">
            <Box border="1px solid white">
              <Box
                w="100%"
                h="150"
                bgImage="url('/images/flower2.jpg')"
                backgroundSize="cover"
                bgPosition="center"
                bgRepeat="no-repeat"
              ></Box>
              <Box py="10" px="4">
                <Heading as="h2" textAlign="center" mb="5" fontSize="xl">
                  Open yout mind
                </Heading>
                <Text>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </Text>
              </Box>
            </Box>
            <Box border="1px solid white">
              <Box
                w="100%"
                h="150"
                bgImage="url('/images/flower3.jpg')"
                backgroundSize="cover"
                bgPosition="center"
                bgRepeat="no-repeat"
              ></Box>
              <Box py="10" px="4">
                <Heading as="h2" textAlign="center" mb="5" fontSize="xl">
                  See the Beauty
                </Heading>
                <Text>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </Text>
              </Box>
            </Box>
            <Box border="1px solid white">
              <Box
                w="100%"
                h="150"
                bgImage="url('/images/flower4.jpg')"
                backgroundSize="cover"
                bgPosition="center"
                bgRepeat="no-repeat"
              ></Box>
              <Box py="10" px="4">
                <Heading as="h2" textAlign="center" mb="5" fontSize="xl">
                  Just relax
                </Heading>
                <Text>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </Text>
              </Box>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
};
export default Grid;
