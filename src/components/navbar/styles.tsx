import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  max-width: 100%;
  height: 120px;
  background: #F6F8FF;
  display:flex;
  justify-content: center;
  flex-direction: row;
  filter: drop-shadow(0px -8px 19px rgba(0, 0, 0, 0.10)) drop-shadow(0px -34px 34px rgba(0, 0, 0, 0.09)) drop-shadow(0px -76px 46px rgba(0, 0, 0, 0.05)) drop-shadow(0px -136px 54px rgba(0, 0, 0, 0.01)) drop-shadow(0px -212px 59px rgba(0, 0, 0, 0.00));
`

export const Container = styled.nav`
  width: 1280px;
  display:flex;
  flex-direction: row; 
  justify-content: space-between;
  background-color: transparent;
  align-items: center;
  padding: 0 38px; /* Maior que o normal*/

`

export const Menu = styled.ul`
  padding: 0;
  margin: 0;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
  font-size: 20px;
`

export const MenuItem = styled.li`
  
`

export const Button = styled.a`
  font-family: 'Inter', sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  
`

//Apenas para testes
export const Logo = styled.p`
  color: #5F84E2;
  font-family: 'Bevan', serif;
  font-size: 70px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
