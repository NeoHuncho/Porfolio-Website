import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import node from "./LogoFinal/node-01.webp";
import express from "./LogoFinal/express-01.webp";
import glPlatform from "./LogoFinal/glPlatform-01.webp";
import socket from "./LogoFinal/socket-01.webp";

import { mediaQueries } from "../../../../../styling/mediaQueries";

const Image = styled(motion.img)`
  max-width: 60%;

  @media ${mediaQueries.mobile} {
    max-width: 23vh;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
  @media ${mediaQueries.ipadAndIpadPro} {
    max-width: 12vh;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
`;

const Grid = styled(motion.div)`
  @media ${mediaQueries.nonmobile} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: "node express glPlatform socket";
    justify-items: center;
  }
`;

function BackEndTab() {
  return (
    <Grid
      intial={{ opacity: 0 }}
      animate={{ opacity: [0, 0, 2] }}
      transition={{ times: [0, 0.5, 1.2], ease: "easeInOut" }}
    >
      <Image src={node} style={{ gridArea: "node" }} />
      <Image src={express} style={{ gridArea: "express" }} />
      <Image src={glPlatform} style={{ gridArea: "glPlatform" }} />
      <Image src={socket} style={{ gridArea: "socket" }} />
    </Grid>
  );
}

export default BackEndTab;
