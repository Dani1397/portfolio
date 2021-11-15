import styled from "styled-components";

const Nav = styled.nav`
    display: flex;
    justify-content: flex-end;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: ${props => props.theme.red};
    box-shadow: 0 2px 0 rgb(0 0 0 / 40%);
    z-index: 10;
`;

const Ul = styled.ul`
    width: 50%;
    display: flex;
    justify-content: space-around;
`;

const Li = styled.li`
  list-style: none;
`;

const ListA = styled.a`
    text-decoration: none;
    font-size: 1.5rem;
    padding: 1rem;
    color: ${props => props.theme.white};
`;


function NavBar(){
    return <Nav>
    <Ul>
        <Li><ListA href="#welcome-section">About</ListA></Li>
        <Li ><ListA href="#work">Work</ListA></Li>
        <Li ><ListA href="#contact-me">Contact</ListA></Li>
    </Ul>
</Nav>
}

export default NavBar;