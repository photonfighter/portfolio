import styled from "styled-components";

export const ProjectTileContainer = styled.div`
    height: 600px;
    width: 350px;
    border-radius: 12px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

export const ProjectTileHeader = styled.h2`
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    font-size: 28px;
    margin-top: 10px;
`;

export const ProjectTileImage = styled.img`
    width: 350px;
    height: auto;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
`;

export const ProjectTileDescription = styled.p`
    font-family: "Open Sans", sans-serif;
    font-size: 18px;
`;

export const ProjectTileLink = styled.a`
    align-self: flex-end;
    justify-self: flex-end;
`;

export const ProjectTileTextContainer = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    height: 250px;
`;

