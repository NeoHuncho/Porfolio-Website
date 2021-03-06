import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import reactlogo from "./LogoFinal/react.webp";
import redux from "./LogoFinal/redux.webp";
import d3 from "./LogoFinal/d3.webp";
import framer_motion from "./LogoFinal/framerMotion.webp";
import styled_components from "./LogoFinal/styledComponents.webp";

import { mediaQueries } from "../../../../../styling/mediaQueries";

const Image = styled(motion.img)`

  @media ${mediaQueries.mobile} {
    max-width: 15vh;
    margin-bottom: 6vh;

    :nth-child(odd) {
      float: left;
    }

    :nth-child(even) {
      float: right;
    }
  }
  @media ${mediaQueries.desktop} {
    max-width: 12vh;
  }
  @media ${mediaQueries.ipadAndIpadPro} {
    max-width: 6vh;
  }
`;
const Grid = styled(motion.div)`
  @media ${mediaQueries.nonmobile} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: "react redux  d3 framermotion styledcomponents";
    justify-items: center;
  }
`;

function FrontEndTab() {
  return (
    <Grid
      intial={{ opacity: 0 }}
      animate={{ opacity: [0, 0, 2] }}
      transition={{ times: [0, 0.5, 1.2], ease: "easeInOut" }}
    >
      <Image src={reactlogo} style={{ gridArea: "react" }} />
      <Image src={redux} style={{ gridArea: "redux" }} />
      {/* <Image src={gatsby} style={{gridArea:'gatsby'}}/>
           <Image src={next} style={{gridArea:'next'}}/> */}
      <Image src={d3} style={{ gridArea: "d3" }} />
      <Image src={framer_motion} style={{ gridArea: "framermotion" }} />
      <Image src={styled_components} style={{ gridArea: "styledcomponents" }} />
    </Grid>
  );
}

export default FrontEndTab;
