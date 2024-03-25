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
    </Box>
  );
};

export default Index;
