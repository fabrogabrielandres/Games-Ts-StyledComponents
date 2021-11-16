import { Link } from "react-router-dom";
import styled from "styled-components";
import { secondaryColor } from "../../styles/theme";

export const StyledLink = styled(Link)`
    display: inline-block;
    width: 100%;
    background-color: ${secondaryColor};
    border-radius: 4px;
    text-decoration: none; 
`

export const Img = styled.img`
    width: 100%;
`
