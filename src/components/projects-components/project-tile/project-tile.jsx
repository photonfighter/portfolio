import React from "react";
import { ProjectTileContainer, ProjectTileImage, ProjectTileDescription, ProjectTileHeader, ProjectTileLink, ProjectTileTextContainer } from "./project-tile.styles";

const ProjectTile = ({ img, headerText, description, link}) => {
    return (
        <ProjectTileContainer>
            <ProjectTileImage src={ img }/>
            <ProjectTileTextContainer>
                <ProjectTileHeader>{ headerText }</ProjectTileHeader>
                <ProjectTileDescription>{ description }</ProjectTileDescription>
                <ProjectTileLink href={ link }>Github</ProjectTileLink>
            </ProjectTileTextContainer>
            
        </ProjectTileContainer>
    )
};

export default ProjectTile;