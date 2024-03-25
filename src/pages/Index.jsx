import React from "react";
import { Box, Heading, Text, Button, Stack, Container, Image } from "@chakra-ui/react";
import { FaDog, FaHeart } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Container maxW="container.lg" py={16}>
        <Stack spacing={8} align="center" textAlign="center">
          <FaDog size={48} color="gray.500" />
          <Heading as="h1" size="2xl">
            Welcome to the World of Dogs
          </Heading>
          <Text fontSize="xl" maxW="lg">
            Discover the joy and companionship that dogs bring to our lives. Learn about different breeds, training tips, and how to care for your furry friend.
          </Text>
          <Button colorScheme="blue" size="lg" rightIcon={<FaHeart />}>
            Explore More
          </Button>
        </Stack>
      </Container>

      <Box py={16} bg="gray.100">
        <Container maxW="container.lg">
          <Stack spacing={8}>
            <Heading as="h2" size="xl" textAlign="center">
              Featured Dog Breeds
            </Heading>
            <Stack direction={["column", "row"]} spacing={8}>
              <Box>
                <Image src="https://images.unsplash.com/photo-1646558583129-104134b414cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsYWJyYWRvciUyMHJldHJpZXZlciUyMGRvZ3xlbnwwfHx8fDE3MTEzNzI0NzF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Labrador Retriever" borderRadius="md" boxShadow="md" />
                <Heading as="h3" size="md" mt={4}>
                  Labrador Retriever
                </Heading>
              </Box>
              <Box>
                <Image src="https://images.unsplash.com/photo-1613656741959-70b2eaeb6db8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnZXJtYW4lMjBzaGVwaGVyZCUyMGRvZ3xlbnwwfHx8fDE3MTEzNzI0NzF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="German Shepherd" borderRadius="md" boxShadow="md" />
                <Heading as="h3" size="md" mt={4}>
                  German Shepherd
                </Heading>
              </Box>
              <Box>
                <Image src="https://images.unsplash.com/photo-1698684817356-daa22aaa03e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjByZXRyaWV2ZXIlMjBkb2d8ZW58MHx8fHwxNzExMzcyNDcyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Golden Retriever" borderRadius="md" boxShadow="md" />
                <Heading as="h3" size="md" mt={4}>
                  Golden Retriever
                </Heading>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
