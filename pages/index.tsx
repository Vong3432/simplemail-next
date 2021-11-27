import { Text, Container, Heading, Button, Grid, GridItem, Flex, Image, Box, LinkOverlay, LinkBox } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

const Home: NextPage = () => {
  return (
    <Container maxW="container.xl" py={{ base: '0', md: '12' }} textAlign="center">
      <Head>
        <title>Simplemail</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxW="container.xl" p="0">
        <Flex width="100%" flexFlow={{ base: 'column-reverse', md: 'row' }} alignItems={{ md: 'center' }} p="0">
          <Box maxW={{ base: '100%', md: '50%' }} textAlign="left">
            <Heading fontSize="5xl" fontWeight="black" lineHeight="130%">
              Simple, API-based mailing service.
            </Heading>
            <Text fontSize="xl" pt="4" lineHeight="200%" color="gray.500">
              Integrate email notification in your side project by sending API request.
            </Text>
            <LinkBox>
              <Flex mt="12">
                <LinkOverlay href="https://vongnyuksoon2000.gitbook.io/simplemail/" isExternal>
                  <Button borderRadius="14" size="lg" colorScheme="blue">Get a tour</Button>
                </LinkOverlay>
                <LinkOverlay href="https://vongnyuksoon2000.gitbook.io/simplemail/api-endpoints/send-email" isExternal>
                  <Button borderRadius="14" size="lg" bgColor="transparent" colorScheme="" color="gray.500" ml="2">View API docs</Button>
                </LinkOverlay>
              </Flex>
            </LinkBox>
          </Box>
          <Box ml="auto" alignItems="center" maxW={{ base: '100%', md: '50%' }} my="12">
            <Image maxW="500px" maxH="500px" w="100%" h="100%" objectFit="contain" src="/assets/graphic/bot.png" />
          </Box>
        </Flex>
      </Container>

    </Container>
  )
}

export default Home
