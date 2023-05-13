import React from 'react';
import Link from 'next/link';
import { Container } from './styles';
import logoWpp from '../../assets/WhatsApp-Logo.wine.png';

function LogoWpp() {
  return (
    <Container>
      <Link href="https://wa.me/77991227182">
        <img src={logoWpp} alt="Logo WhatsApp" />
      </Link>
    </Container>
  );
}

export default LogoWpp;
