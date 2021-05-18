import React from 'react';
import {
  FaHome,
  FaShoppingCart,
  FaDollarSign,
  FaPowerOff,
  FaArchive,
  FaChartLine,
  FaUsers,
} from 'react-icons/fa';

import NavItem from './item';
import menuImage from '../../../assets/menu.png';
import { NavContainer, Logo, NavList } from './styled';
import { useAppDispatch } from '../../../data/hooks/redux';
import { logout } from '../../../data/usecases/auth/logout';

const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();

  const exit = () => {
    dispatch(logout());
  };

  return (
    <NavContainer>
      <Logo />
      <NavList>
        <NavItem active icon={<FaHome />} label="Tela inicial" />
        <NavItem active={false} icon={<FaUsers />} label="Clientes" />
        <NavItem active={false} icon={<FaDollarSign />} label="Vendas" />
        <NavItem active={false} icon={<FaShoppingCart />} label="Compras" />
        <NavItem active={false} icon={<FaChartLine />} label="Despesas" />
        <NavItem active={false} icon={<FaArchive />} label="Estoque" />
      </NavList>

      <img src={menuImage} alt="Menu - imagem personalizada de uma venda" />

      <div
        className="exit"
        role="button"
        aria-hidden="true"
        onClick={exit}
        onKeyDown={exit}
      >
        <FaPowerOff />
        <h3>Sair</h3>
      </div>
    </NavContainer>
  );
};

export default Navbar;
