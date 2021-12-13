import { Box, Flex, Tag, Spacer, Button, Text, Heading, Divider, FormControl, FormLabel, Input, FormHelperText, SkeletonText, Code } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { HiPlay } from 'react-icons/hi'
import { API_URL } from '../../const/const'
import { DemoContext } from '../../context/DemoContext'
import { basicParameters, Parameter } from '../../data/demo'
import axios, { AxiosError } from 'axios'

interface ApiUIClientForm {
    [key: string]: any
}

const ApiUIClient = () => {

    const demoContext = useContext(DemoContext)
    const currentDemo = demoContext?.currentDemo;

    const [response, setResponse] = useState({
        msg: "",
        isError: false,
    })
    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, watch, formState: { errors } } = useForm<ApiUIClientForm>();

    const onSubmit = async (data: ApiUIClientForm) => {
        setLoading(prev => true)
        try {
            const response = await axios.post(API_URL, data)
            setResponse({
                msg: `[${response.status}]: ${response.data.msg}`,
                isError: false,
            })
        } catch (error: any) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                // console.log(error.response.data);
                // console.log(error.response.status);
                // console.log(error.response.headers);
                setResponse({
                    msg: `[${error.response.status}]: ${error.response.data["msg"]}`,
                    isError: true,
                })
            }
            else {
                // Something happened in setting up the request that triggered an Error
                // console.log('Error', error.message);
                setResponse({
                    msg: JSON.stringify(error.message),
                    isError: true,
                })

            }
        }
        setLoading(prev => false)
    }

    return (
        <form id="apiUiClientForm" onSubmit={handleSubmit(onSubmit)}>
            <Box w={'100%'} overflow={'hidden'} direction={'column'} bgColor={'white'} borderRadius={'xl'}>
                {/* url */}
                <Flex direction={'column'} bgColor={'gray.700'} color={'white'} p={'4'}>
                    <Flex alignItems={'center'}>
                        <Tag mr={'4'} bgColor={'green.500'} color={'white'} >
                            Post
                        </Tag>
                        <Text color={'white'}>
                            {API_URL}
                        </Text>
                        <Spacer />
                        <Button id='btnRunTest' type='submit' leftIcon={<HiPlay />} colorScheme={'blue'}>Test</Button>
                    </Flex>
                    <Text my={4}>Response:</Text>
                    {loading === true && <SkeletonText startColor='gray.500' id='loadingSpinner' endColor='gray.600' />}
                    {response.msg && !loading && <Code p={'4'} colorScheme={response.isError ? 'red' : 'green'} fontSize={'14px'} >{response.msg}</Code>}
                </Flex>

                {/* required parameters */}
                <Flex p={'6'} direction={'column'}>
                    <Heading fontSize={'14px'}>Required Body: </Heading>
                    <Divider pt={4} mb={2} />
                    {basicParameters.map(param => (
                        <FormControl key={param.name} py={'2'} isRequired={param.isRequired} id={param.name}>
                            <FormLabel>{param.name}</FormLabel>
                            <Input {...register(param.name)} defaultValue={param.defaultText} type='text' />
                            <FormHelperText>{param.description}</FormHelperText>
                        </FormControl>
                    ))}
                </Flex>
            </Box>
        </form>
    )
}

export default ApiUIClient
