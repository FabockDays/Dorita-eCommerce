import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { HiOutlineMenu } from 'react-icons/hi';
import ModalCart from './ModalCart/ModalCart';
import ModalUser from './ModalUser/ModalUser';
import CartIcon from './CartIcon/CartIcon';
import {
  CartNavStyled,
  LinkContainerStyled,
  LinksContainerStyled,
  NavbarContainerStyled,
  UserNavStyled,
  UserContainerStyled,
  SpanStyled,
  FollowUsContainerStyled,
  OfferButtonStyled,
} from './NavbarStyles';
import { useDispatch, useSelector } from 'react-redux';
import { toggleHiddenMenu } from '../../redux/user/userSlice';

function Navbar() {
  const currentUser = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <NavbarContainerStyled>
      <ModalCart />
      <ModalUser />
      <FollowUsContainerStyled>
        <div class="sign-wrap">
          <div class="sign_word"> Se<span>gu</span>in<span>os</span> en.<span>..</span> </div>
        </div>
        <div>
          <Link to="https://www.facebook.com/DoritaIndumentaria/?locale=ms_MY" target="_blank">
            <img src="https://cdn.icon-icons.com/icons2/3380/PNG/96/talk_chat_facebook_social_media_on_internet_conversation_icon_212485.png" alt="Facebook" />
          </Link>
        </div>
        <div>
          <Link to="https://www.instagram.com/dorita.indumentaria/" target="_blank">
            <img src="https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2022/06/947fd-logo-instagram-bonito-png.png?fit=512%2C512&ssl=1" alt="Instagram" />
          </Link>
        </div>
      </FollowUsContainerStyled>

      {currentUser && (
        <OfferButtonStyled>
          <Link to="/Offers">Ofertas</Link>
        </OfferButtonStyled>
      )}

      <LinksContainerStyled>
        <motion.div whileTap={{ scale: 0.97 }}>
          <Link to="/">
            <LinkContainerStyled home>
              <HiOutlineMenu />
            </LinkContainerStyled>
            Home
          </Link>
        </motion.div>

        <CartNavStyled>
          <CartIcon />
        </CartNavStyled>

        <UserNavStyled>
          <UserContainerStyled
            onClick={() => (currentUser ? dispatch(toggleHiddenMenu()) : navigate('/register'))}
          >
            <SpanStyled>{currentUser ? `${currentUser.nombre}` : 'Inicia sesión'}</SpanStyled>
            <FaUserAlt />
          </UserContainerStyled>
        </UserNavStyled>
      </LinksContainerStyled>
    </NavbarContainerStyled>
  );
}

export default Navbar;
