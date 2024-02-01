import React from 'react';
import { Link }  from 'react-router-dom';

import { HeaderContainerStyled } from './HeaderStyles';


function Header() {
  
  return (
    <HeaderContainerStyled>
        <div>
            <Link to='/'>
                <img
                    src='https://scontent.faep7-1.fna.fbcdn.net/v/t39.30808-6/302131636_387880296839676_6384932597580772018_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=BUN9DZDvoEwAX_au_xW&_nc_ht=scontent.faep7-1.fna&oh=00_AfB4xz3X7V0168lK-igQrKBI2KHDN5vBvV8-AkT7n0St1w&oe=65BF225A'
                    alt='Logo'
                />
            </Link>
        </div>
    </HeaderContainerStyled>
  )
}
export default Header;