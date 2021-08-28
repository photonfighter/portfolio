import * as React from "react"

import Portrait from '/src/components/home-components/portrait/portrait.jsx';
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { PageContainer } from "../components/page-container/page-container";
import { LeftContainer } from "/src/components/home-components/left-container/left-container.js";
import { RightContainer } from "/src/components/home-components/right-container/right-container.js";
import { AboutText } from "/src/components/home-components/about/about.styles";
import { IntroText } from "/src/components/home-components/intro/intro";
import { HomeContainer } from "/src/components/home-components/home-container/home-container.styles";  


import '/src/pages/global-styles.css';
import { ProjectsContainer } from "/src/components/projects-components/projects-container/projects-container.styles";
import { ProjectsHeader } from "/src/components/projects-components/projects-header/projects-header.styles";
import { ProjectTilesContainer } from "../components/projects-components/project-tiles-container/project-tiles-container.styles";
import ProjectTile from "../components/projects-components/project-tile/project-tile";
import { ContactContainer } from "../components/contact-components/contact-container/contact-container.styles";
import { FormContainer } from "../components/contact-components/form-container/form-container.styles";
import { SocialContainer } from "../components/contact-components/social-container/social-container.styles";
import { ContactHeader } from "../components/contact-components/contact-header/contact-header.styles";
import { FormSocialContainer } from "../components/contact-components/form-social-container/form-social-container.styles";

import SovaLineupsScreenshot from '/src/images/sova-lineups.png';
import GameOfLifeScreenshot from '/src/images/game-of-life.png';
import ReshawkScreenshot from '/src/images/reshawk.png';

// markup
const IndexPage = () => {
  return (
    <PageContainer>
      <Header />
      
      <HomeContainer>
        <LeftContainer>
          <Portrait />
        </LeftContainer>
        <RightContainer>
          <IntroText>Hi, I'm Chandler.</IntroText>
          <AboutText>I'm a full-stack developer that's experienced in React, Gatsby, Express, Flutter, and many other technologies.</AboutText>
        </RightContainer>
      </HomeContainer>

      <ProjectsContainer>
        <ProjectsHeader>What I've Been Working On</ProjectsHeader>
        <ProjectTilesContainer>
            <ProjectTile 
              img={ SovaLineupsScreenshot }
              description="A React application for Valorant players to learn Sova recon arrow lineups on the fly."
              headerText="Sova Lineups"
              link="https://github.com/photonfighter/sova-lineups"
              />
            <ProjectTile 
              img={ GameOfLifeScreenshot }
              description="Though Conway's Game of Life cannot be truly done in 3D, I thought it would be a good challenge
                to stack different GoL planes and have some fun with Three.js, a 3D WebGL library."
              headerText="Game of Life 3D"
              link="https://github.com/photonfighter/game-of-life"
              />
            <ProjectTile 
              img={ ReshawkScreenshot }
              description="Though originally intended to be a holistic approach to residence hall management, after some
                feasability analysis and market research it turned out to just be a great way to learn more about Firebase,
                JWT Authentication, and Express. It's no longer in development :("
              headerText="Reshawk / Reshawk API"
              link="https://github.com/photonfighter/reshawk-api"
              />
        </ProjectTilesContainer>
      </ProjectsContainer>

      <ContactContainer>
        <ContactHeader>Hey, we should talk.</ContactHeader>
        <FormSocialContainer>
          <FormContainer></FormContainer>
          <SocialContainer></SocialContainer>
        </FormSocialContainer>
        
      </ContactContainer>

      <Footer />
    </PageContainer>
  );
}

export default IndexPage
