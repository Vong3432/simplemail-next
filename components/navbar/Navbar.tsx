import { Container, Flex, Heading, LinkBox, LinkOverlay, Spacer } from '@chakra-ui/layout'
import { Button, Text } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
    return (
        <Container display="flex" alignItems="center" maxW="container.xl" pt="12">
            <Heading fontWeight="bold" fontSize="xl">simplemail<Text as="span" color="blue.500">.</Text></Heading>
            <Spacer />
            <LinkBox>
                <LinkOverlay href="https://github.com/Vong3432/simplemail" isExternal>
                    <Button colorScheme="" color="gray" >Github</Button>
                </LinkOverlay>
            </LinkBox>
        </Container>
    )
}

export default Navbar
