import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'

const headingOptions = {
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    textTransform: 'upercase',
    p: '4',
    size: "4xl",


}

const Home = () => {
    return <Box>
        <MyCarousel />
        <Container maxW={"container.xl"} minH={'100vh'} p="16">
            <Heading textTransform={'uppercase'} py="2" w={"fit-content"} borderBottom={"2px solid"} m="auto">services</Heading>
            <Stack
                h="full"
                p={'4'}
                alignItems={'center'}
                direction={['column', 'row']}
            >
                    <Image src={img5} h={["40","400"]} filter={"hue-rotate(-130deg)"} />
                    <Text letterSpacing={"widest"} lineHeight={"190%"} textAlign={"center"} p={["4","16"]}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus adipisci quaerat excepturi, dignissimos velit ad nobis officia explicabo ea eligendi aperiam distinctio ut necessitatibus recusandae fugiat non quod molestias eveniet!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus adipisci quaerat excepturi, dignissimos velit ad nobis officia explicabo ea eligendi aperiam distinctio ut necessitatibus recusandae fugiat non quod molestias eveniet!
                    </Text>

            </Stack>

        </Container>

    </Box>;


};
const MyCarousel = () => (
    <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        showStatus={false}
        showThumbs={false}
        showarrows={false}
    >
        <Box w={"full"} h={'100vh'} top={'14'} >
            <Image src={img1} />
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>Watch the future</Heading>

        </Box>
        <Box w={"full"} h={'100vh'} top={'14'} >
            <Image src={img2} />
            <Heading bgColor={"whiteAlpha.900"} color={"black"} {...headingOptions}> future is Gaming</Heading>

        </Box>
        <Box w={"full"} h={'100vh'} top={'14'} >
            <Image src={img3} />
            <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}> Gaming on console</Heading>

        </Box>
        <Box w={"full"} h={'100vh'} top={'14'} >
            <Image src={img4} />
            <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}> Night life is cool</Heading>

        </Box>

    </Carousel>
)

export default Home;