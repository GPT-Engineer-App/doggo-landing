import React from "react";
import { Box, Container } from "@chakra-ui/react";
import Hero from "../components/Hero";
import FeaturedBreeds from "../components/FeaturedBreeds";

const Index = () => {
  return (
    <Box>
      <Hero />
      <Container maxW="container.lg" py={16}>
        <FeaturedBreeds />
      </Container>
    </Box>
  );
};

export default Index;
