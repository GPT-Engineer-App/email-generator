import React, { useState } from "react";
import { Container, VStack, Input, Button, Text, HStack, IconButton, useToast } from "@chakra-ui/react";
import { FaCopy } from "react-icons/fa";

const Index = () => {
  const [email, setEmail] = useState("");
  const toast = useToast();

  const generateEmail = () => {
    const domains = ["example.com", "test.com", "demo.com"];
    const randomDomain = domains[Math.floor(Math.random() * domains.length)];
    const randomString = Math.random().toString(36).substring(2, 11);
    setEmail(`${randomString}@${randomDomain}`);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    toast({
      title: "Copied to clipboard",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Email Generator</Text>
        <Button onClick={generateEmail} colorScheme="teal">
          Generate Email
        </Button>
        {email && (
          <HStack spacing={2}>
            <Input value={email} isReadOnly />
            <IconButton aria-label="Copy to clipboard" icon={<FaCopy />} onClick={copyToClipboard} />
          </HStack>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
