import React, { useEffect, useState } from "react";
import { Box, SimpleGrid, Image, Heading, Text } from "@chakra-ui/react";

const FeaturedBreeds = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const fetchBreeds = async () => {
      const response = await fetch("https://api.thedogapi.com/v1/breeds?limit=10");
      const data = await response.json();
      setBreeds(data);
    };

    fetchBreeds();
  }, []);

  return (
    <Box>
      <Heading as="h2" size="xl" textAlign="center" mb={8}>
        Featured Dog Breeds
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={8}>
        {breeds.map((breed) => (
          <Box key={breed.id} borderWidth={1} borderRadius="lg" p={4}>
            <Image src={breed.image.url} alt={breed.name} objectFit="cover" mb={4} />
            <Heading as="h3" size="lg" mb={2}>
              {breed.name}
            </Heading>
            <Text>
              <strong>Temperament:</strong> {breed.temperament}
            </Text>
            <Text>
              <strong>Breed Group:</strong> {breed.breed_group}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default FeaturedBreeds;
