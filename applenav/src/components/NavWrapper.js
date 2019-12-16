import React, {useState}from 'react'
import {NavLink, Route} from 'react-router-dom'
import SubNav from './SubNav'
import styled from 'styled-components'

const NavWrapper = () =>{
    const [device, setDevice] = useState("");

    const Container = styled.div`
        background: #333333;
        color: #efefef;
        padding: 2%;
        display: flex;
        justify-content: space-around;

    `;



    return (
        <div>
            <Container>
                <NavLink to="/mac" style={{color:"#efefef", textDecoration: "none"}}>Mac</NavLink>
                <NavLink to="/ipad" style={{color:"#efefef", textDecoration: "none"}}>iPad</NavLink>
                <NavLink to="/iphone" style={{color:"#efefef", textDecoration: "none"}}>iPhone</NavLink>
                <NavLink to="/watch" style={{color:"#efefef", textDecoration: "none"}}>Watch</NavLink>
                <NavLink to="/tv" style={{color:"#efefef", textDecoration: "none"}}>TV</NavLink>
                <NavLink to="/music" style={{color:"#efefef", textDecoration: "none"}}>Music</NavLink>
                <NavLink to="/support" style={{color:"#efefef", textDecoration: "none"}}>Support</NavLink>
                {/* <SubNav /> */}
            </Container>
            <Route path="/:device"><SubNav /></Route>
        </div>
    )
}

export default NavWrapper