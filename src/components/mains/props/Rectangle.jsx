import { Box, Image, Text } from "@chakra-ui/react"


function Rectangle(props) {
    return (
        <>
        <Box p='20px' bg='white' h='100px' _hover={{boxShadow:'0 0px 20px rgba(0, 0, 0, 0.15)', color:"#5946D7", zIndex:'10'}} cursor='pointer' transition='all 0.3s ease' display='flex' alignItems='center' bgSize='cover' bgRepeat='no-repeat' bgImage={props.blur ? "https://s3-alpha-sig.figma.com/img/ea63/0422/aea89ebe3a54e4520c12f1587ab44e4a?Expires=1701648000&Signature=C~YAUxufJQDasFbWEMuqr965z4JIPs81S6sKxJouBU6vbLzim0e704RbxJPYOTk0AEiBywDed3A~z-zK8owqFt4i6uHo1bXt~XJ6kec1z~M5jPByj1d5EcJ8g-cs8W6GPW3COu7NiWUPXjGCENW~XymlR0c795s4Pd9MmX~Vao-ZcY0QVbkpDSP5nn3-2wHPujd2s8FzI905kNCdmFPYVI7WHjBTN6ips2K0pcrBL0l62TcmyqydNSLo~CQ~NGWUprdJJtAgV7Iw7aFh0HKot5uqr4lQMiuv89xfCaQdW~dQQkkPdb2dGcp8TJI7-bU9vzPMm4VgL2XEzZDbX26usg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" : "unset"} >
            <Image src={props.blur ? "https://www.seekpng.com/png/full/242-2427117_old-navy-outlet-old-navy-outlet-logo.png" : props.img} alt="error is img" w='50px' />
            <Box ml='30px'>
                <Text color={props.blur ? "white" : ""} >{props.title}</Text>
                <Text color={props.blur ? "white" : "black"} fontWeight={200}>{props.product}</Text>
            </Box>
        </Box>
        </>
    )
}

export default Rectangle