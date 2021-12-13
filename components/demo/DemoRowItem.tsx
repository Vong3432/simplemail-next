import { Flex, Heading, Spacer, Icon, Text } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import React, { useCallback, useContext } from 'react'
import { IconType } from 'react-icons'
import { HiChevronRight } from 'react-icons/hi'
import { DemoContext } from '../../context/DemoContext'

export interface DemoRowItemProps {
    icon: IconType;
    title: string;
    description: string;
    route: string;
}

const DemoRowItem: React.FC<DemoRowItemProps> = (props) => {

    const { icon, title, description, route } = props
    const demoContext = useContext(DemoContext)

    // variables
    const isSelected = demoContext?.currentDemo?.route === route

    // hooks
    const router = useRouter()

    // functions
    const onPressed = useCallback(
        () => {
            demoContext?.setCurrentDemo(props)
        },
        [route],
    )

    return (
        <Flex onClick={onPressed} border={"4px"} borderColor={isSelected ? "blue.500" : "gray.200"} cursor={'pointer'} mb={'2'} alignItems={"center"} p={"6"} borderRadius={"xl"} bg={"white"}>
            <Flex direction={"column"}>
                <Heading fontSize={{ base: "md", md: "lg" }} fontWeight="bold" lineHeight="130%">
                    {title}
                </Heading>
                <Text fontSize={'14px'} color={"secondary.400"}>
                    {description}
                </Text>
            </Flex>
            <Spacer />
            <Icon color={"secondary.50"} boxSize={"1.5rem"} as={icon} />
        </Flex>
    )
}

export default DemoRowItem
