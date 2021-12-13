import { Container, Grid, GridItem, Heading } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import ApiUIClient from '../../components/demo/ApiUIClient'
import DemoList from '../../components/demo/DemoList'
import { DemoContext } from '../../context/DemoContext'
import { demos } from '../../data/demo'

const DemoPage = () => {

    const demoContext = useContext(DemoContext)

    useEffect(() => {
        demoContext?.setCurrentDemo(demos[0])
    }, [])

    return (
        <Container maxW="container.xl" py="14">
            <Heading id='DemoHeading' fontSize={{ base: "xl", md: "2xl" }} fontWeight="extrabold">
                Demo
            </Heading>
            <Grid py={'8'} direction={'column'} gap={6} alignItems={'start'} templateColumns={{ sm: '1fr', md: 'repeat(3,1fr)' }} mr={'auto'}>
                <GridItem >
                    <DemoList demoList={demos} />
                </GridItem>
                <GridItem colSpan={2}>
                    <ApiUIClient />
                </GridItem>
            </Grid>
        </Container >
    )
}

export default DemoPage
