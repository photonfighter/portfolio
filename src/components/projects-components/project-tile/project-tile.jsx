import React from "react";
import { ProjectTileContainer, ProjectTileImage, ProjectTileDescription, ProjectTileHeader } from "./project-tile.styles";

const ProjectTile = () => {
    return (
        <ProjectTileContainer>
            <ProjectTileHeader></ProjectTileHeader>
            <ProjectTileImage />
            <ProjectTileDescription></ProjectTileDescription>
        </ProjectTileContainer>
    )
};

export default ProjectTile;