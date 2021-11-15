import styled from 'styled-components';
import H2 from './H2';
import SingleProject from './SingleProject';
import BlockMaster from '../assets/BlockMaster.JPG';
import MoviesPage from '../assets/MoviesPage.JPG';
import IMC from '../assets/IMC.JPG';
import Conversor from '../assets/conversor.JPG';


const Section = styled.section`
    text-align: center;
    padding: 10rem 2rem;
    background: var(--main-blue);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 4rem;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    margin-bottom: 6rem;
`;

const Header = styled.header`
    max-width: 640px;
    margin: 0 auto 6rem auto;
    border-bottom: 0.2rem solid ${props => props.theme.white};
`;

function Projects (){
return <Section id="work">
    <Header> 
        <H2>These are some of my projects</H2>
    </Header>
    <SingleProject image = {BlockMaster} title="Block Master" link = "https://dani1397.github.io/Sprint1/Block_Master.html"/>
    <SingleProject image = {MoviesPage} title="Movies page" link = "https://dani1397.github.io/Modulo-03/Modulo-3-Tarea-02-Peliculas/dramas.html"/>
    <SingleProject image = {IMC} title="BMI" link = "https://dani1397.github.io/Modulo-03/Modulo-3-Tarea-03-IMC/styles/index.html"/>
    <SingleProject image = {Conversor} title="Currency Converter" link = "https://dani1397.github.io/Modulo-03/Modulo-3-Tarea-01-Divisas/index.html"/>
    <SingleProject image = {BlockMaster} title="Block Master" link = "https://dani1397.github.io/Sprint1/Block_Master.html"/>
</Section>
}

export default Projects;