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
import { Avatar, Tooltip } from '@chakra-ui/react';

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
      <Logo>
        <Avatar size="xl" bgColor="white" name="Logo Frutas" src={menuImage} />
      </Logo>
      <NavList>
        <NavItem
          active
          icon={<FaHome />}
          link="/dashboard"
          label="Tela inicial"
        />
        <NavItem
          active={false}
          icon={<FaUsers />}
          link="/clientes"
          label="Clientes"
        />
        <NavItem
          active={false}
          icon={<FaDollarSign />}
          link="/vendas"
          label="Vendas"
        />
        <NavItem
          active={false}
          icon={<FaShoppingCart />}
          link="/compras"
          label="Compras"
        />
        <NavItem
          active={false}
          icon={<FaChartLine />}
          link="/despesas"
          label="Despesas"
        />
        <NavItem
          active={false}
          icon={<FaArchive />}
          link="/estoques"
          label="Estoque"
        />
      </NavList>
      <Tooltip label="Sair" bg="pink.500" placement="right" fontSize="md">
        <div
          className="exit"
          role="button"
          aria-hidden="true"
          onClick={exit}
          onKeyDown={exit}
        >
          <FaPowerOff />
        </div>
      </Tooltip>
    </NavContainer>
  );
};

export default Navbar;
