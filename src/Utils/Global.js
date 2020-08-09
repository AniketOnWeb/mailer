import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *,
    *::after,
    *::before{
        margin:0;
        padding:0;
        -webkit-font-smoothing: antiliased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: #1ABC9C !important;
        }

        html{
            // font-size: 62.5%;
            box-sizing: border-box;
            --color-main: ${(props) => props.theme.colors.main};
            --color-secondary: ${(props) => props.theme.colors.secondary};
            --color-text: ${(props) => props.theme.colors.textColor};
            --color-white: ${(props) => props.theme.colors.whiteColor};
            --color-shadow: ${(props) => props.theme.colors.shadow};
            --color-blackMatte: ${(props) => props.theme.colors.blackMatte};
            --color-blackMatteAlt: ${(props) =>
              props.theme.colors.blackMatteAlt};
            --color-MoreBlack: ${(props) => props.theme.colors.MoreBlack};
            --color-boxGradient: ${(props) => props.theme.colors.boxGradient};

         
//             @media ${(props) => props.theme.MediaQueries.large} {
//                    font-size: 57.5%;
//              }
     
//              @media ${(props) => props.theme.MediaQueries.small} {
//                   font-size: 50%;
//               }

//    @media ${(props) => props.theme.MediaQueries.largest} {
//                  font-size: 60%;
//             }

             scroll-behavior:smooth 
        }

        body{
            font-family: 'Poppins', sans-serif;
            line-height : 1.6;
            overflow-x:hidden;
         }

        button ,a , input, textarea{
            outline : none;
            text-decoration: none; 
            font-family : inherit;
        }   

`;
