import { Box, Container, Image, Text } from "@chakra-ui/react";
import coding from '../images/coding.jpg'
import myfoto from '../images/alisher.jpg'
import { useEffect, useState } from "react";
import loadingGIF from "../images/loading_utka.gif"

function Main() {

    const colotsBTN = "white"
    const backgauntCOLOR = 'rgba(0, 0, 0, 0.4)'
    const bgcolorbox = 'rgb(25, 25, 27)'

    const [ myPotancel, setmyPotancel ] = useState(
        {
            HTML: "0%",
            CSS: "0%",
            JAVASCRIPT: "0%",
            TYPESCRIPT: "0%",
            REACT: "0%",
            CHAKRA: "0%",
            SQL: "0%"
        }
    )

    const [ statusCarusel, setstatusCarusel ] = useState(false)
    const [loading, setloading] = useState(true)

    useEffect(() => {
        if (statusCarusel === false) {
            setTimeout(() => {
                setmyPotancel({
                    HTML: "100%",
                    CSS: "100%",
                    JAVASCRIPT: "85%",
                    TYPESCRIPT: "50%",
                    REACT: "90%",
                    CHAKRA: "95%",
                    SQL: "70%"
                })
            },1200)
        }
        else{
            setmyPotancel({
                HTML: "0%",
                CSS: "0%",
                JAVASCRIPT: "0%",
                TYPESCRIPT: "0%",
                REACT: "0%",
                CHAKRA: "0%",
                SQL: "0%"
            })
        }
        if (loading) {
            setTimeout(() => setloading(false), 1500)
        }
    },[statusCarusel])


    return (
        <Box w="100%" >
        <Image  src={coding} w='100vw' h='100vh' position='fixed' top='0' left='0' zIndex='-1' />
        <Box bg={backgauntCOLOR} >
                <Container maxW="85%" color='white'>
                    <Box h='100vh' bg={bgcolorbox} display='flex' alignItems='center' justifyContent='space-around' position='relative'>
                        <Box textAlign='center'>
                            <Text fontWeight='800' fontFamily="'Silkscreen', sans-serif" textShadow='5px 5px 0 green' color={colotsBTN} fontSize='60px'>Alisher</Text>
                            <Text fontWeight='800' fontFamily="'Silkscreen', sans-serif" textShadow='3px 3px 0 green' color={colotsBTN} fontSize='30px'>fullstack программист</Text>
                        </Box>
                        <Box position='relative' _hover={{}}>
                            <Image src={myfoto} alt='error in images' w='350px' position='relative' zIndex='2' h='350px' borderRadius='10px' border='1px solid green' boxShadow='0 0 30px rgba(90, 255, 112, 0.15)'/>
                            <Box w='350px' position='absolute' bottom='-20px' right='-20px' zIndex='1' h='350px' border='5px solid rgba(90, 255, 112, 0.3)' borderRadius='10px'></Box>
                        </Box>
                    </Box>
                    <Box h='100vh' bg='black' display='flex' justifyContent='center' alignItems='center' flexDirection='column' position='relative'>

                        <Box m='0 auto' w='80%' h={statusCarusel ? '70%' : 0} bg='rgba(90, 255, 112, 0.05)' transition={statusCarusel ? 'all 1s 1s ease' : 'all 1s ease'} overflow='hidden' boxShadow='15px 15px 0 rgba(90, 255, 112, 0.3)' display='flex' alignItems='center' justifyContent='space-around'>
                            <Text w='400px' color="rgb(90, 255, 112, 0.7)" opacity={statusCarusel ? 1 : 0} fontFamily="'Silkscreen', sans-serif" transition={statusCarusel ? 'all 1s 1.5s ease' : 'all 1s ease'} fontSize='20px'>Привет! Меня зовут <Box display='inline-block' color='white'>Alisher</Box>, и мне нравится создавать вещи, которые живут в Интернете. Мой интерес к веб-разработке начался еще в 2020 году, когда я решил попробовать редактировать собственные сайт!</Text>
                            <Box _hover={{boxShadow: '20px 20px 0 rgba(90, 255, 112, 0.3)',m:'0 10px 10px 0', filter:"grayscale(0%)"}} transition='all 0.4s ease' borderRadius='10px' border='1px solid green' boxShadow='10px 10px 0 rgba(90, 255, 112, 0.3)' filter="grayscale(90%)">
                                <Image src={myfoto} alt='error in images' w={statusCarusel ? '350px' : '100px'} opacity={statusCarusel ? 1 : 0.3} m='0 5px 5px 5px' transition={statusCarusel ? 'all 1s 1.1s ease' : 'all 1s ease'}/>
                            </Box>
                        </Box>

                        <Box w='100px' display='flex' boxShadow='0px 0px 0 rgba(90, 255, 112, 0.3)' _hover={{boxShadow:'3px 5px 0 rgba(90, 255, 112, 0.3)', margin:'0 5px 5px 0'}} _active={{boxShadow: "0 0 0 green", margin:'0'}} transition='all 0.2s ease' onClick={()=>setstatusCarusel(statusCarusel ? false : true)} justifyContent='space-evenly' alignItems='center' h='40px' position='absolute' bottom='20px' bg='rgba(90, 255, 112, 0.2)' borderRadius='5px' border='1px solid green' cursor='pointer'>
                            <Box w='12px' h='12px' bg='green' borderRadius='2px'></Box>
                            <Box w='12px' h='12px' bg='green' borderRadius='2px'></Box>
                            <Box w='12px' h='12px' bg='green' borderRadius='2px'></Box>
                        </Box>

                        <Box w='80%' bg='rgba(90, 255, 112, 0.05)' boxShadow='15px 15px 0 rgba(90, 255, 112, 0.3)' h={statusCarusel ? "0" : '500px'} transition={statusCarusel ? 'all 1s ease' : 'all 1s 1s ease'} overflow='hidden' p={statusCarusel ? 0 : '10px 20px'} border='1px solid green' display='flex' flexDirection='column' justifyContent='center'>
                            <Box display='flex'position='relative' >
                                <Text fontSize='20px' fontWeight='600' mb='10px' fontFamily="'Silkscreen', sans-serif" >HTML 5</Text>
                                <Box w='70%' h='30px' border='1px solid green' position='absolute' right='0'>
                                    <Box position='relative' h='100%'  transition='all 2s ease' w={myPotancel.HTML} bg='green'>
                                        <Text position='absolute' right='0' mr='10px'>{myPotancel.HTML}</Text>
                                    </Box>
                                </Box>
                            </Box>
                            <Box display='flex'position='relative'>
                                <Text fontSize='20px' fontWeight='600' mb='10px' fontFamily="'Silkscreen', sans-serif" >CSS 3</Text>
                                <Box w='70%' h='30px' border='1px solid green' position='absolute' right='0'>
                                    <Box position='relative' h='100%'  transition='all 2s ease' w={myPotancel.CSS} bg='green'>
                                        <Text position='absolute' right='0' mr='10px'>{myPotancel.CSS}</Text>
                                    </Box>
                                </Box>
                            </Box>
                            <Box display='flex'position='relative'>
                                <Text fontSize='20px' fontWeight='600' mb='10px' fontFamily="'Silkscreen', sans-serif" >JAVA SCRIPT</Text>
                                <Box w='70%' h='30px' border='1px solid green' position='absolute' right='0'>
                                    <Box position='relative' h='100%'  transition='all 2s ease' w={myPotancel.JAVASCRIPT} bg='green'>
                                        <Text position='absolute' right='0' mr='10px'>{myPotancel.JAVASCRIPT}</Text>
                                    </Box>
                                </Box>
                            </Box>
                            <Box display='flex'position='relative'>
                                <Text fontSize='20px' fontWeight='600' mb='10px' fontFamily="'Silkscreen', sans-serif" >TYPE SCRIPT</Text>
                                <Box w='70%' h='30px' border='1px solid green' position='absolute' right='0'>
                                    <Box position='relative' h='100%'  transition='all 2s ease' w={myPotancel.TYPESCRIPT} bg='green'>
                                        <Text position='absolute' right='0' mr='10px'>{myPotancel.TYPESCRIPT}</Text>
                                    </Box>
                                </Box>
                            </Box>
                            <Box display='flex'position='relative'>
                                <Text fontSize='20px' fontWeight='600' mb='10px' fontFamily="'Silkscreen', sans-serif" >REACT</Text>
                                <Box w='70%' h='30px' border='1px solid green' position='absolute' right='0'>
                                    <Box position='relative' h='100%'  transition='all 2s ease' w={myPotancel.REACT} bg='green'>
                                        <Text position='absolute' right='0' mr='10px'>{myPotancel.REACT}</Text>
                                    </Box>
                                </Box>
                            </Box>
                            <Box display='flex'position='relative'>
                                <Text fontSize='20px' fontWeight='600' mb='10px' fontFamily="'Silkscreen', sans-serif" >CHAKRA ...</Text>
                                <Box w='70%' h='30px' border='1px solid green' position='absolute' right='0'>
                                    <Box position='relative' h='100%'  transition='all 2s ease' w={myPotancel.CHAKRA} bg='green'>
                                        <Text position='absolute' right='0' mr='10px'>{myPotancel.CHAKRA}</Text>
                                    </Box>
                                </Box>
                            </Box>
                            <Box display='flex'position='relative'>
                                <Text fontSize='20px' fontWeight='600' mb='10px' fontFamily="'Silkscreen', sans-serif" >SQL</Text>
                                <Box w='70%' h='30px' border='1px solid green' position='absolute' right='0'>
                                    <Box position='relative' h='100%'  transition='all 2s ease' w={myPotancel.SQL} bg='green'>
                                        <Text position='absolute' right='0' mr='10px'>{myPotancel.SQL}</Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                    </Box>
                    <Box h='100vh' bg={bgcolorbox}>
                    </Box>
                    <Box h='100vh' bg="black" >
                        
                    </Box>
                </Container>
            </Box>
            <Box position='fixed' top='0' left='0' w='100vw' h='100vh' bg='rgba(0, 0, 0, 0.6)' backdropFilter='blur(10px)' zIndex='10' display={loading ? 'flex' : 'none'} flexDirection='column' alignItems='center' justifyContent='center'>
                <Image src={loadingGIF} alt="error in gif" />
                <Text fontWeight='800' fontFamily="'Silkscreen', sans-serif" textShadow='3px 3px 0 green' color={colotsBTN} fontSize='40px'>Loading...</Text>
            </Box>
        </Box>
    )
}

export default Main
