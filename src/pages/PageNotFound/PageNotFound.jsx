import Link from '../../components/UI/Link/Link';
import React from 'react';
import {
  FoundContainerStyled,
  FoundSubtitleStyled,
  FoundTextStyled,
  FoundTitleStyled,
} from './PageNotFoundStyles';

const PageNotFound = () => {


  return (
    <div>
      <FoundContainerStyled>
        <FoundTextStyled>
          <FoundTitleStyled>404 Error</FoundTitleStyled>
          <FoundSubtitleStyled>¡Lo que buscas no se encuentra por aquí...!</FoundSubtitleStyled>
          <p>Parece que la página que buscas no existe o fue removida</p>
          <Link />
        </FoundTextStyled>



        <img
          src='https://animaniacos.com/images/gifs/negro/animales/anin0032.gif'
          alt=''
          className='imgNotFound'
        />

      </FoundContainerStyled>
    </div>
  );
};

export default PageNotFound;
