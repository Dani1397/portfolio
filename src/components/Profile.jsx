import styled from "styled-components";

const Img = styled.img`
display: block;
margin: auto;
max-width: 100px;
max-height: 120px;
border-radius: 50px;
`;

function Profile(props) {
    return <div>
        <Img src={props.image}/>
    </div>
    }

export default Profile; 