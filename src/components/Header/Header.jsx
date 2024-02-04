import React from 'react';
import { Link }  from 'react-router-dom';
import { HeaderContainerStyled } from './HeaderStyles';
import doritaImage from './HeaderImg/dorita.png';

function Header() {
  
  return (
    <HeaderContainerStyled>
        <div>
            <Link to='/'>
                <img
                    src={doritaImage}
                    alt='Logo'
                />
            </Link>
        </div>
    </HeaderContainerStyled>
  )
}
export default Header;