import { Box, Button, Flex, Image, Text, useTheme } from "@chakra-ui/react";
import React from "react";

export default function Index() {
  const theme = useTheme();

  return(
    <Box bg={theme.colors.background} h="100%">
      <Box>
        <Flex 
          position="relative"
          w="100%"
          justify="flex-end"
          color="white"
          px="120px"
          py="20px"
          gap="50px"
          zIndex={3}
        >
          <Text fontSize="18px" fontWeight="500"> About </Text>
          <Text fontSize="18px" fontWeight="500"> Projects </Text>
          <Text fontSize="18px" fontWeight="500"> Contact </Text>
        </Flex>
        <Image 
          src="/image.png" 
          alt="profile pic"
          position="absolute"
          top="0"
          right="0"
        />
      </Box>

      <Flex p="120px" w="700px" gap="32px" direction="column">
        <Text 
          color={theme.colors.highlight_color} 
          textTransform="uppercase"
          fontWeight="700"
        >
            Full Stack Software Developer
        </Text>
        <Text
          fontSize="64px"
          fontWeight="700"
          lineHeight="120%"
          color={theme.colors.title}
        >
          Hello, my name is Marta Bilbao
        </Text>
        <Text
          fontSize="24px"
          color={theme.colors.font_medium_emphasis}
        >
          Short text with details about you, what you do or your professional career. You can add more information on the about page.
        </Text>
        <Flex gap="12px">
          <Button>Projects</Button>
          <Button>Projects</Button>
        </Flex>
      </Flex>
    </Box>
  );
}