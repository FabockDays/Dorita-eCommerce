import { useNavigate } from 'react-router-dom';

import Button from '../../components/UI/Button/Button';

import {
  ContainerInfoStyled,
  PatternStyled,
  TextStyled,
  TitleStyled,
} from './FelicitacionesStyled';

const Felicitaciones = () => {
  const navigate = useNavigate();
  return (
    <div>
      <TextStyled>
        <img
          src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648433/coding/NucbaZappi/Assets/Success-illustration_sbucqm.png'
          alt=''
        />
        <ContainerInfoStyled>
          <TitleStyled>¡Felicitaciones!</TitleStyled>
          <p>Tu pedido fué realizado</p>
        </ContainerInfoStyled>
        <Button onClick={() => navigate('/mis-ordenes')}>Volver</Button>
      </TextStyled>
      <PatternStyled
        src='https://us.123rf.com/450wm/helenfield/helenfield1704/helenfield170400077/75234012-sale-shopping-market-tienda-de-internet-discount-vector-conjunto-de-iconos-de-doodle-para-la-venta.jpg?ver=6'
        alt=''
        className='pattern'
      />
    </div>
  );
};

export default Felicitaciones;
