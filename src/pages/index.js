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
            <ProjectTile />
            <ProjectTile />
            <ProjectTile />
            <ProjectTile />
        </ProjectTilesContainer>
      </ProjectsContainer>

      <Footer />
    </PageContainer>
  );
}

export default IndexPage
