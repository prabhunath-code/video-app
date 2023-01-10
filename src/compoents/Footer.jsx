import { Box, Button, Heading, HStack, Input, Stack, VStack, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend } from 'react-icons/ai'

const Footer = () => {
    return <Box bgColor={"blackAlpha.900"} minH={"40"} p="16" color={'white'}>
        <Stack direction={["column", "row"]}>

            <VStack alignItems={"stretch"} w="full">
                <Heading size="md" textTransfor={'upercase'} textAlign={['center','left']}>
                    subscribe to get more updates
                </Heading>
                <HStack
                    borderBottom={"2px solid white"}
                    py="2"
                >
                    <Input placeholder='Enter Email here...' border={"none"} borderRadius={'none'} outline={"none"} focusBorderColor={"none"} />
                    <Button
                        padding={"0"}
                        colorScheme={"purple"}
                        variant={"ghost"}
                        borderRadius={'0 20px 20px 0'}

                    >
                        <AiOutlineSend size={20} />
                    </Button>
                </HStack>
            </VStack>

            <VStack
                w={"full"}
                borderLeft={['none', '1px solid white']}
                borderRight={['none', '1px solid white']}
            >
                <Heading size={"md"} textTransform={"uppercase"} textAlign={"center"}> Video Hub</Heading>
                <Text p="10">All right reservered</Text>

            </VStack>

            <VStack w={"full"}>
            <Heading size={"md"} textTransform={"uppercase"}>
                social media
            </Heading>
            <Button variant={"link"} colorScheme={"whiteAlpha"}>
                <a target={'blank'} href="https://www.youtube.com/channel/UClYw7YGvAfCnBJtizFThEfg">Youtube</a>
            </Button>
            <Button variant={"link"} colorScheme={"whiteAlpha"}>
                <a target={'blank'} href="https://instagram.com/prabhu_nath19">instagram</a>
            </Button>
            <Button variant={"link"} colorScheme={"whiteAlpha"}>
                <a target={"blank"} href="https://github.com/prabhunath-code">Github</a>
            </Button>

            </VStack>




        </Stack>
    </Box>
}

export default Footer