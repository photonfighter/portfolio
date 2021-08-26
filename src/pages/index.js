import * as React from "react"

import Portrait from '/src/components/portrait/portrait.jsx';
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { PageContainer } from "../components/page-container/page-container";
import { LeftContainer } from "/src/components/left-container/left-container.js";
import { RightContainer } from "/src/components/right-container/right-container.js";
import { AboutText } from "../components/about/about.styles";
import { IntroText } from "../components/intro/intro";
import { HomeContainer } from "../components/home-container/home-container.styles";  


import '/src/pages/global-styles.css';
import { ProjectsContainer } from "../components/projects-container/projects-container.styles";

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
        <p>hello</p>
      </ProjectsContainer>

      <Footer />
    </PageContainer>
  );
}

export default IndexPage
