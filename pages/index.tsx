import { Text, Container, Heading, Button, Flex, Image, Box, LinkOverlay, LinkBox, ButtonGroup, useMediaQuery } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

const Home: NextPage = () => {

  const [isLargetThan768] = useMediaQuery("(min-width: 728px)")

  return (
    <Container maxW="container.xl" textAlign="center">
      <Container maxW="container.xl" pb={{ base: "24", md: "0" }}>
        <Flex width="100%" flexFlow={{ base: 'column-reverse', md: 'row' }} alignItems={{ md: 'center' }} p="0">
          <Box maxW={{ base: '100%', md: '50%' }} textAlign="left">
            <Heading fontSize={{ base: "3xl", md: "5xl" }} fontWeight="black" lineHeight="130%">
              Simple, API-based mailing service.
            </Heading>
            <Text fontSize="lg" pt="4" lineHeight="200%" color="secondary.500">
              Integrate email notification in your side project by sending API request.
            </Text>
            <Flex flexFlow={{ base: "column", md: "row" }} mt="12">
              <LinkBox>
                <LinkOverlay href="https://vongnyuksoon2000.gitbook.io/simplemail/" isExternal>
                  <Button isFullWidth={isLargetThan768 ? false : true} borderRadius="14" size="lg" colorScheme="blue">Get a tour</Button>
                </LinkOverlay>
              </LinkBox>
              <LinkBox>
                <LinkOverlay href="https://vongnyuksoon2000.gitbook.io/simplemail/api-endpoints/send-email" isExternal>
                  <Button mt={{ base: "2", md: "0" }} isFullWidth={isLargetThan768 ? false : true} borderRadius="14" size="lg" bgColor="transparent" colorScheme="" color="gray.500">View API docs</Button>
                </LinkOverlay>
              </LinkBox>
            </Flex>
          </Box>
          <Box ml="auto" alignItems="center" maxW={{ base: '100%', md: '50%' }} my="12">
            <Image maxW="500px" maxH="500px" w="100%" h="100%" objectFit="contain" src="/assets/graphic/bot.png" />
          </Box>
        </Flex>
      </Container>

    </Container >
  )
}

export default Home
