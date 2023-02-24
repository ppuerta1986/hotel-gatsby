import React from 'react';
import {graphql, useStaticQuery} from 'gatsby'
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const ImagenBackground = styled.div`
    height: 90vh;
`;
const TextoImagen = styled.div`
    background-image: linear-gradient(to top, rgba(34,49,63,0.8), rgba(34,49,63,0.8));
    color: white;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 4rem;
        margin: 0;

        @media (min-width: 768px) {
            font-size: 5.8rem;
        }
    }
    p {
        font-size: 2rem;
        @media (min-width: 768px) {
            font-size: 3.2rem;
        }
    }
`;

const ImagenHotel = () => {

    const { image } = useStaticQuery(graphql`
        query {
            image: file(relativePath: { eq: "8.jpg"}) {
                childImageSharp {
                    fluid (quality: 90, maxWidth: 1920) {
                        srcWebp
                    }
                }
            }
        }
    `);


    return ( 
        <ImagenBackground
        css={css`
                background-image: url(${image.childImageSharp.fluid.srcWebp});
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
            `}
        >
            <TextoImagen>
                <h1>Bienvenido a Hotel Gatsby</h1>
                <p>El mejor hotel para tus vacaciones</p>
            </TextoImagen>

        </ImagenBackground>
 

     );
}
 
export default ImagenHotel;