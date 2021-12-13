import { Flex } from '@chakra-ui/react'
import React from 'react'
import DemoRowItem, { DemoRowItemProps } from './DemoRowItem'

const DemoList: React.FC<{ demoList: DemoRowItemProps[] }> = ({ demoList }) => {
    return (
        <Flex direction={"column"}>
            {demoList.map((demo) =>
                <DemoRowItem
                    key={demo.route}
                    title={demo.title}
                    description={demo.description}
                    route={demo.route}
                    icon={demo.icon}
                />
            )}
        </Flex>
    )
}

export default DemoList
