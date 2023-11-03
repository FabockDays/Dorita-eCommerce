import React from 'react';
import { Link }  from 'react-router-dom';

import { HeaderContainerStyled } from './HeaderStyles';


function Header() {
  
  return (
    <HeaderContainerStyled>
        <div>
            <Link to='/'>
                <img
                    src='https://scontent.faep7-1.fna.fbcdn.net/v/t39.30808-1/302131636_387880296839676_6384932597580772018_n.jpg?stp=dst-jpg_p200x200&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHib4jGo7reK9rX-n7xbsS05gznqfR0vZ_mDOep9HS9ny0doZ4HylbtRDKzFx4-tKU&_nc_ohc=nhOzDdFbs-kAX-hAdQA&_nc_ht=scontent.faep7-1.fna&oh=00_AfCWNlO49l4vLUyVqe3-tuHLTLkaSF3wcDYAzmXqJxtdYQ&oe=65490C60'
                    alt='Logo'
                />
            </Link>
        </div>
    </HeaderContainerStyled>
  )
}
export default Header;