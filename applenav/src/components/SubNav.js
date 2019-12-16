import React from 'react'
import {useParams} from 'react-router-dom'
import Devices from './Devices'
import styled from 'styled-components';

const Container = styled.div`
    background: #2d2d2d;
    color: #efefef;
    padding: 6%;
`;

const DeviceLink = styled.a`
    padding: 2%;
`;



const SubNav = (props) =>{
    const {device} = useParams();
    const keys = Object.keys(Devices);
    const links = Devices[device];
    const linkGroup = links.map(link => {
        return (<DeviceLink>{link}</DeviceLink>)
    })
    
    // const currentDevice = Devices.find(thing => device === thing);
    



    return(
        <Container>
            {linkGroup}
        </Container>
    )
}

export default SubNav