import React, { useState } from 'react';
import Button from '../UI/Button/Button';

import {

  AccordionStyled,
  HeroContainerStyled,
  HeroFormStyled,
  HeroSearchBarStyled,
  
  

} from './HeroStyles';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from '../../redux/categories/categoriesSlice';

const Hero = ({ doScroll }) => {
  const [value, setValue] = useState('');

  const listOfCategories = useSelector(
    state => state.categories.categories
  ).map(category => category.category)

  const dispatch = useDispatch()

  const handleSubmit = (e, value) => {
    e.preventDefault()

    const newCategory = value.trim().toLowerCase().replace(' ', '') //.split(" ").join('')

    const selectedCategory = listOfCategories.find(
      category => category.toLowerCase() === newCategory
    )
    if (selectedCategory) {
      dispatch(selectCategory(selectedCategory))
      doScroll()
    } else {
      return alert('Categoria no encontrada')
    }
  }

  return (
    <HeroContainerStyled>


      <div>
        <div>
          <h1>Regístrate y accede a nuestra sección exclusiva de ofertas!</h1>
        </div>

        <HeroFormStyled>

          <HeroSearchBarStyled
            value={value}
            onChange={e => setValue(e.target.value)}
            type='text'
            placeholder='Ej :  Remeras'
          />

          <Button onClick={e => handleSubmit(e, value)} radius='10'>
            Buscar
          </Button>
        </HeroFormStyled>
      </div>
      <AccordionStyled>
        <div class="accordion">
          <ul>
            <li>
              <div> <a href="#">
                <h2>Jeans</h2>
                <p>T: 36 a 44</p>
              </a> </div>
            </li>
            <li>
              <div> <a href="#">
                <h2>Remeras</h2>
                <p>T: S a XLL</p>
              </a> </div>
            </li>
            <li>
              <div> <a href="#">
                <h2>Zapatillas</h2>
                <p>T: 37 a 41</p>
              </a> </div>
            </li>
            <li>
              <div> <a href="#">
                <h2>Pijamas</h2>
                <p>T: S a XLL</p>
              </a> </div>
            </li>
            <li>
              <div> <a href="#">
                <h2>Buzos</h2>
                <p>T: S a XLL</p>
              </a> </div>
            </li>
            <li>
              <div> <a href="#">
                <h2>Calzas</h2>
                <p>T: S a XLL</p>
              </a> </div>
            </li>
          </ul>
        </div>
      </AccordionStyled>






    </HeroContainerStyled>
  );
};

export default Hero;
