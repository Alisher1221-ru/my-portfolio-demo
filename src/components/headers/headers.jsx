import { Box, Container, Image, Text } from "@chakra-ui/react"
import { HiUsers } from "react-icons/hi";
import { useEffect, useState } from "react";
import logo from "../images/1018818-200.png"

function Headers() {

  const colotsBTN = "white"
  const backgauntCOLOR = 'rgba(0, 0, 0, 0.5)'

  const [pages, setpages] = useState('')

  let [ScrolL, setScrolL] = useState(true)
    useEffect(() => {
        let handelScroll = () => {
          const scroll = window.scrollY

            if (scroll > 0) {
              setScrolL(false)
            }
            else{
              setScrolL(true)
            }
            if (scroll >= 0 && scroll < 550) {
              setpages("HOME")
            }
            else if(scroll >= 550 && scroll < 1500){
              setpages("ABOUT")
            }
            else if(scroll >= 1500 && scroll < 2510){
              setpages("MY PROJECTS")
            }
            else{
              setpages("CONTACT")
            }
        }
        window.addEventListener('scroll', handelScroll)
        return () => {
          window.removeEventListener('scroll', handelScroll)
        }
    }, [])

    const [regisNo, setRegisNo] = useState(false)
    const OnOff = () => {
      if (regisNo === false) {
        setRegisNo(true)
        return setTimeout(() => setRegisNo(false), 6000)
      }
      return setRegisNo(false)
    }

    return (
      <Box h='90px'>
        <Box w="100%" bg={backgauntCOLOR} backdropFilter="blur(10px)" position='fixed' top='0' zIndex='10' color='white'>
          <Container maxW="80%" >
            <Box display="flex" alignItems="center" justifyContent="space-between" h="90px" >
              <Image borderRadius='30px' src={logo} alt="error in you brauser" w='50px'/>
              <Box display='flex' flexDirection='column' alignItems='center' >
                <Text fontFamily="'Silkscreen', sans-serif" opacity={pages === "HOME" ? 1 : 0} h={pages === "HOME" ? '30px' : '0px'} cursor='default' transition='all 0.6s ease' color={pages === "HOME" ? colotsBTN : 'transparent'}>HOME</Text>
                <Text fontFamily="'Silkscreen', sans-serif" opacity={pages === "ABOUT" ? 1 : 0} h={pages === "ABOUT" ? '30px' : '0px'} cursor='default' transition='all 0.6s ease' color={pages === "ABOUT" ? colotsBTN : 'transparent'}>ABOUT</Text>
                <Text fontFamily="'Silkscreen', sans-serif" opacity={pages === "MY PROJECTS" ? 1 : 0} h={pages === "MY PROJECTS" ? '30px' : '0px'} cursor='default' transition='all 0.6s ease' color={pages === "MY PROJECTS" ? colotsBTN : 'transparent'}>MY PROJECTS</Text>
                <Text fontFamily="'Silkscreen', sans-serif" opacity={pages === "CONTACT" ? 1 : 0} h={pages === "CONTACT" ? '30px' : '0px'} cursor='default' transition='all 0.6s ease' color={pages === "CONTACT" ? colotsBTN : 'transparent'}>MY HOBBY</Text>
              </Box>
              <Box display="flex" alignItems="center" position='relative' cursor='pointer'>
                <HiUsers color={colotsBTN} size="22px" />
                <Text fontFamily="'Silkscreen', sans-serif" p="0 5px" onClick={() => OnOff()} color={colotsBTN}>Вход / Регистрация</Text>
                <Box w='200px' h={regisNo ? '60px' : '0'} overflow='hidden' bg='rgba(0, 255, 21, 0.1)' display='flex' alignItems='center' justifyContent='center' border='1px solid green' position='absolute' left='-20px' top='40px' borderRadius='10px' p='2px 5px' opacity={regisNo ? '1' : '0'} transition='all 0.5s ease-out' cursor='default'>
                  <Text fontFamily="'Silkscreen', sans-serif" fontSize='13px' textAlign='center' >это функция временно недоступно 😄</Text> 
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    );
}

export default Headers
