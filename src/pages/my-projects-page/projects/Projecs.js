import React from 'react'
import styled from 'styled-components';
import {useInView} from 'react-intersection-observer';
import { motion } from "framer-motion";

import {  SecondaryTitle, TitleSection, LineBottom, LineTop } from '../../../styling/styles';
import { mediaQueries } from '../../../styling/mediaQueries';

import ProjectsComponent from './ProjectsComponent';


export const Page= styled.div`
  display: block;
  position: relative;
  background: radial-gradient(50% 98.88% at 50% 50%, #16045E 18.23%, #0E021E 100%);

  @media ${mediaQueries.desktop}{

  }
  @media ${mediaQueries.mobile}{
    height: 100%;
  }

`

export const AnimateComponent = styled(motion.div)`

`

function Projects() {

    const { ref, inView } = useInView({
        threshold: 0
    })

    return (
        <Page  style={{ zIndex: 2 }} >
            <TitleSection  ref={ref} initial={{opacity:0,x:-50}}
               animate={{opacity:inView?1:0,x:inView?0:-50}}
                transition={{ ease: "easeOut", duration: 1.5 }}  >
                <SecondaryTitle >
                  Projects
                </SecondaryTitle>
                    <LineTop />
                    <LineBottom />
            </TitleSection>
       <AnimateComponent  ref={ref} initial={{opacity:0}}
               animate={{opacity:inView?1:0}}
                transition={{ ease: "easeOut", duration: 1.5 }} >
         <ProjectsComponent  />
         </AnimateComponent>
        
        </Page>
    )
}

export default Projects