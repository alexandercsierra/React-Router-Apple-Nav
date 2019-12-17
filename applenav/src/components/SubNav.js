import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Devices from './Devices'
import styled from 'styled-components';
import ReactDOM from 'react-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { dom } from '@fortawesome/fontawesome-svg-core'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faClock} from '@fortawesome/free-regular-svg-icons'
import { faCheckSquare, faCoffee, faDesktop, faTabletAlt, faMobileAlt, faTv, faMusic, faQuestionCircle} from '@fortawesome/free-solid-svg-icons'

dom.watch();

library.add(faCheckSquare, faCoffee, faDesktop, faTabletAlt, faMobileAlt, faClock, faTv, faMusic, faQuestionCircle)

const Container = styled.div`
    background: #2d2d2d;
    color: #efefef;
    padding: 3% 6%;
    display: flex;
    justify-content: space-around;
`;

const DeviceLink = styled.a`
    padding: 2%;
`;

const Icon = styled.svg`
    font-size: 2.5rem;
    color: #efefef;
`;

const LinkDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 10%;
    // border: 1px solid red;

`;






const SubNav = (props) =>{
    //the name of the route
    const {device} = useParams();
    //the array of link names
    const links = Devices[device].links;
    //class for the icon
    let icon2 = Devices[device].icon;
    console.log(icon2);



    //loop through array of links and add each one with an icon with className corressponding to the route
    const linkGroup = links.map(link => {
        return (
            <LinkDiv>
                
                <FontAwesomeIcon icon={icon2} size='3x' className='float-right'/>
                <DeviceLink>{link}</DeviceLink>
            </LinkDiv>
        );
    })
    
    return(
        <Container>
            {linkGroup}
        </Container>
    )
}

export default SubNav