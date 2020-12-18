import styled from 'styled-components'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {mediaQueries} from './mediaQueries';


export const Page = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    overflow: hidden;
    position: relative;
    align-items: center;
    background: radial-gradient(50% 98.88% at 50% 50%, #16045E 18.23%, #0E021E 100%);
    @media ${mediaQueries.mobile}{
    height:80vh;
 }
`
export const FullPage= styled(Page)`//for opening pages 
@media ${mediaQueries.mobile}{
    height: 100vh;
}
`

export const StyledLink = styled(Link)`
 &:hover{
     text-decoration: none
     };
`

export const StyledButton = styled(Button)`
 color: white !important;

@media ${mediaQueries.ipad}{
font-size:3vw !important;
}

@media ${mediaQueries.ipadPro}{
margin-top:1vh !important;
font-size:3vw !important;
}

 &:hover{
     text-decoration: none
     };
 
`
export const Scrooldown = styled.img`
 position: fixed;
 @media ${mediaQueries.nondesktop}{
    height: auto;
    bottom: 0vh;
    right: 3.5vw;
    width:13vw;
 }

@media ${mediaQueries.desktop}{
    height: auto;
    width: 10vh;
    bottom: 0vh;
    left: 1vw;
}
 
 `
export const Title = styled.h1`
font-family: Roboto;
font-weight: 700;
color: #FFFFFF;
font-style: normal;

@media ${mediaQueries.mobile}{
    font-size: 15vw;
    line-height: 8vh;
 }

 @media ${mediaQueries.ipad}{
    font-size: 13vw;
    line-height: 11vh;
 }

 @media ${mediaQueries.ipadPro}{
    font-size: 13vw;
    line-height: 10vh;
 }
 
@media ${mediaQueries.desktop}{
    font-size: 8vw;
    line-height: 8vw;
}
`


export const TitleSection = styled(motion.div)`
position: absolute;
left: 10vw;
 //extended in root-page/frontPage to keep titlesection higher as page full height
@media ${mediaQueries.mobile}{    
    bottom: 6vh;
    left: 6vw;
 }

 @media ${mediaQueries.ipad}{
    bottom: 6.5vh;
 }

 @media ${mediaQueries.ipadPro}{
    bottom: 5vh;
 }
 
@media ${mediaQueries.desktop}{
overflow: hidden;
   left: 7vw;
}
`


export const LineTop = styled.span`
background: #CF749C;
display: block;
margin-top: 2vh;
 width: 30vw;
 height: 0.26vh;
border-radius: 5px;

@media ${mediaQueries.mobile}{
 }

 @media ${mediaQueries.ipad}{
 }

 @media ${mediaQueries.ipadPro}{
 }
 
@media ${mediaQueries.desktop}{
    margin-top: 3vh;
    width: 25vw;
}
`


export const LineBottom = styled.span`
background: #CF749C;
display: block;
border-radius: 5px;
height: 0.26vh;
margin-top: 2vh;
margin-bottom: 2vh;
margin-left: 15vw;
width: 30vw;

@media ${mediaQueries.mobile}{

 }

 @media ${mediaQueries.ipad}{
    
}

 @media ${mediaQueries.ipadPro}{
  
    
}
 
@media ${mediaQueries.desktop}{
    margin-top: 3vh;
    width: 25vw;
     
}
`