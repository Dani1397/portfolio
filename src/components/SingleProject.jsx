import styled from 'styled-components';


const Img = styled.img`
    display: block;
    height: calc(100% - 6.8rem);
    max-width: 100%;
    object-fit: cover;
`;

const ProjectTitle = styled.p`
    font-size: 2rem;
    padding: 2rem 0.5rem;
    width: 11.5em;
    background-color: ${props => props.theme.gray};
`;

const ProjectLink = styled.a`
    color: ${props => props.theme.white};
    text-decoration: none;
`;

function SingleProject(props) {
return <div>
<Img src={props.image}/>
<ProjectTitle><ProjectLink
        href={props.link} target="_blank">{props.title}</ProjectLink></ProjectTitle>
</div>
}

export default SingleProject;