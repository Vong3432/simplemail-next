import { Container, Flex, Heading, LinkBox, LinkOverlay, Spacer } from '@chakra-ui/layout'
import { Button, Text } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import React from 'react'

const Navbar = () => {

    const router = useRouter()

    const navigateTo = (route: string) => {
        router.push(route)
    }

    return (
        <Container display="flex" alignItems="center" maxW="container.xl" pt="12">
            <Heading cursor={'pointer'} onClick={() => navigateTo('/')} fontWeight="bold" fontSize="xl">simplemail<Text as="span" color="blue.500">.</Text></Heading>
            <Spacer />
            <Button id='btnViewDemo' onClick={() => navigateTo('/demo')} colorScheme="" color="secondary.50" >View demo</Button>
            <LinkBox>
                <LinkOverlay href="https://github.com/Vong3432/simplemail" isExternal>
                    <Button colorScheme="" color="secondary.50" >Github</Button>
                </LinkOverlay>
            </LinkBox>
        </Container>
    )
}

export default Navbar
