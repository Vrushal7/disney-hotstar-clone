import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
*{
   box-sizing : border-box;
   scroll-padding :60px;
   font-family :"Inter" , sans serif;

}

main { 
     padding: 0 0 0 112px;
     margin: 0 auto ;

}

body {

    background-color : #0F1014;
    padding : 0;
    margin : 0;
}

a {

    text-decoration : none ;
}

a:hover{

    text-decoration : none ;
}

ul{

    padding : 0;
    margin : 0;
    list-style : none;
}

img{

    max-width:100%;
    height : auto ;

}

h1,h2,h3,h4,h5,h6 {

    padding : 0;
    margin : 0;
}

.swipe-slide {

    width : auto;
}

.swipe-button{

    color: white ;
}
`
export default GlobalStyles;
