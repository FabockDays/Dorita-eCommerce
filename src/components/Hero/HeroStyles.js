import styled from 'styled-components';

export const HeroContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  background: black;
  margin-top: 10px;
  flex-direction: column;
  align-items:center;
  gap: 20px;
  

  h1 {
    font-family: 'Montserrat', sans-serif;
    color:#fff;
    background-image: linear-gradient(45deg,#365899 0%,#992a09 35%,#a76c51 85%,#a76c51 100%);
    -webkit-text-fill-color: transparent;
	  -webkit-background-clip: text;
    color:#fff;
    max-width: 400px;
    font-size: 25px;
    margin-top:40px;
    
  }

  /* Estilos para Tablets */

  @media (max-width: 1024px) {
  
    h1{
      max-width: 250px;
      font-size: 25px;
    }
    
}
`;

export const HeroFormStyled = styled.form`
  display: flex;
  gap: 10px;
  margin-top: 70px;
  max-width: 400px;
  margin-bottom:50px;

  
  /* Estilos para Tablets */
  @media (max-width: 1024px) {
  
    max-width: 200px;
    

  }


 
`;

export const HeroSearchBarStyled = styled.input`
  background-color: var(--gray-bg);
  outline: none;
  border: none;
  border-radius: 15px;
  padding: 0.5rem 2.3rem;
  color: white;
  font-family: 'Montserrat', sans-serif;

  /* Estilos para Tablets */

  @media (max-width: 1024px) {
  
  max-width: 200px;
  padding: 0.4rem 0.2rem;
  }
 
`;


export const HeroBtnStyled = styled.input`
  padding: 0.8rem 1.5rem;
  outline: none;
  border: none;
  border-radius: 10px;
  background: var(--btn-gradient);
  color: white;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
`;


export const AccordionStyled = styled.div`

.accordion {
  width: 90%;
  max-width: 1080px;
  height: 250px;
  overflow: hidden;
  margin:0px 0px 0px 50px;
  border: 2px solid gray;
  border-radius: 10px;
  
  /* Estilos para Tablets */
  @media (max-width: 1024px) {
  
  max-width: 380px;
  height: 240px;

  }


}



.accordion ul {
  width: 100%;
  display: table;
  table-layout: fixed;
  margin: 0;
  padding: 0;
}

.accordion ul li {
  display: table-cell;
  vertical-align: bottom;
  position: relative;
  width: 16.666%;
  height: 250px;
  background-repeat: no-repeat;
  background-position: center center;
  transition: all 500ms ease;

  /* Estilos para Tablets */
  @media (max-width: 1024px) {
  
    background-size: cover; 
    background-position: center top; 
  }

}

.accordion ul li div {
  display: block;
  overflow: hidden;
  width: 100%;
}

.accordion ul li div a {
  display: block;
  height: 250px;
  width: 100%;
  position: relative;
  z-index: 3;
  padding: 15px 20px;
  box-sizing: border-box;
  color: #fff;
  text-decoration: none;
  font-family: Open Sans, sans-serif;
  transition: all 200ms ease;

  
}

.accordion ul li div a * {
  opacity: 0;
  margin: 0;
  width: 100%;
  text-overflow: ellipsis;
  position: relative;
  z-index: 5;
  white-space: nowrap;
  overflow: hidden;
  -webkit-transform: translateX(-20px);
  transform: translateX(-20px);
  -webkit-transition: all 400ms ease;
  transition: all 400ms ease;

  
}

.accordion ul li div a h2 {
  font-family: Montserrat, sans-serif;
  text-overflow: clip;
  font-size: 24px;
  text-transform: uppercase;
  margin-bottom: 2px;
  top: 160px;
}

.accordion ul li div a p {
  top: 160px;
  font-size: 13.5px;
}

.accordion ul li:nth-child(1) { background-image: url("https://images.pexels.com/photos/52518/jeans-pants-blue-shop-52518.jpeg?auto=compress&cs=tinysrgb&w=600"); }

.accordion ul li:nth-child(2) { background-image: url("https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"); }

.accordion ul li:nth-child(3) { background-image: url("https://images.pexels.com/photos/609771/pexels-photo-609771.jpeg?auto=compress&cs=tinysrgb&w=600"); }

.accordion ul li:nth-child(4) { background-image: url("https://images.pexels.com/photos/8501446/pexels-photo-8501446.jpeg?auto=compress&cs=tinysrgb&w=600"); }

.accordion ul li:nth-child(5) { background-image: url("https://images.pexels.com/photos/5710043/pexels-photo-5710043.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"); }

.accordion ul li:nth-child(6) { background-image: url("https://images.pexels.com/photos/612950/pexels-photo-612950.jpeg?auto=compress&cs=tinysrgb&w=600"); }

.accordion ul:hover li { width: 8%; }

.accordion ul:hover li:hover { width: 60%; }

.accordion ul:hover li:hover a { background: rgba(0, 0, 0, 0.4); }

.accordion ul:hover li:hover a * {
  opacity: 1;
  -webkit-transform: translateX(0);
  transform: translateX(0);
}
@media screen and (max-width: 600px) {
  body { margin: 0; }

  .accordion { display:none; }

  .accordion ul li,
  .accordion ul li:hover,
  .accordion ul:hover li,
  .accordion ul:hover li:hover {
    position: relative;
    display: table;
    table-layout: fixed;
    width: 100%;
    -webkit-transition: none;
    transition: none;
  }
}

.about {
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  color: #666;
}

.about a {
  color: blue;
  text-decoration: none;
}

.about a:hover { text-decoration: underline; }


`;