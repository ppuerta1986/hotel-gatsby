import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Navegacion from './nav';
import { Link } from 'gatsby';

const EnlaceHome = styled(Link)`
    text-align: center;
    color: #fff;
    text-decoration:none
`;

const Footer = ({title}) => {
    const year = new Date().getFullYear();
    return ( 
        <>
        <footer
            css={css`
                background-color: rgba(44,62,80);
                margin-top: 5rem;
                padding: 1rem;
            `}
        >
            
            <div
                css={css`
                    max-width: 1200px;
                    margin: 0 auto;

                    @media (min-width: 768px) {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                `} 
            >
            <Navegacion />
            
            <EnlaceHome
                    to='/'
            > <h1>
                    Hotel Gatsby - PIPELINE
            </h1>
            </EnlaceHome>  
            
            </div>
        </footer>
        <p
            css={css`
                text-align: center;
                color: white;
                background-color: rgb(33,44,55);
                margin:0;
                padding:1rem            
                `}
        >
        {title} - Todos los derechos reservados &copy; {year}
        </p>
        </>
     );
}
 
export default Footer;