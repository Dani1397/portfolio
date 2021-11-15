import H1 from "./H1";
import styled from 'styled-components';
import Profile from "./Profile";
import perfil from '../assets/fotogg.jpeg';


const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #000;
    background-image: linear-gradient(
62deg, #3a3d40 0%, #181719 100%);
`;

const Subtitle = styled.p`
    font-size: 2rem;
    font-weight: 200;
    font-style: italic;
    color: ${props => props.theme.red};
  
`;

function MainSection() {
    return <Section id = "welcome-section">
        <H1>Hey, I am Dani</H1>
        <Subtitle>a web developer</Subtitle>
        <Profile image = {perfil}/>
    </Section>
}

export default MainSection;