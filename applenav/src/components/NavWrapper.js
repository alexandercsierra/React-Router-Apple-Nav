import React, {useState}from 'react'
import {NavLink, Route} from 'react-router-dom'
import SubNav from './SubNav'
import styled from 'styled-components'

const NavWrapper = () =>{
    const [device, setDevice] = useState("");

    const apple = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="44" viewBox="0 0 16 44"><path d="M8.02 16.23c-.73 0-1.86-.83-3.05-.8-1.57.02-3.01.91-3.82 2.32-1.63 2.83-.42 7.01 1.17 9.31.78 1.12 1.7 2.38 2.92 2.34 1.17-.05 1.61-.76 3.03-.76 1.41 0 1.81.76 3.05.73 1.26-.02 2.06-1.14 2.83-2.27.89-1.3 1.26-2.56 1.28-2.63-.03-.01-2.45-.94-2.48-3.74-.02-2.34 1.91-3.46 2-3.51-1.1-1.61-2.79-1.79-3.38-1.83-1.54-.12-2.83.84-3.55.84zm2.6-2.36c.65-.78 1.08-1.87.96-2.95-.93.04-2.05.62-2.72 1.4-.6.69-1.12 1.8-.98 2.86 1.03.08 2.09-.53 2.74-1.31" fill="#fff"/></svg>;

    const Container = styled.div`
        background: #333333;
        color: #efefef;
        padding: 1%;
        display: flex;
        justify-content: space-around;
        align-items: center;

    `;



    return (
        <div>
            <Container>
                <NavLink to="/" style={{color:"#efefef", textDecoration: "none"}}>{apple}</NavLink>
                <NavLink to="/mac" style={{color:"#efefef", textDecoration: "none"}}>Mac</NavLink>
                <NavLink to="/ipad" style={{color:"#efefef", textDecoration: "none"}}>iPad</NavLink>
                <NavLink to="/iphone" style={{color:"#efefef", textDecoration: "none"}}>iPhone</NavLink>
                <NavLink to="/watch" style={{color:"#efefef", textDecoration: "none"}}>Watch</NavLink>
                <NavLink to="/tv" style={{color:"#efefef", textDecoration: "none"}}>TV</NavLink>
                <NavLink to="/music" style={{color:"#efefef", textDecoration: "none"}}>Music</NavLink>
                <NavLink to="/" style={{color:"#efefef", textDecoration: "none"}}>Support</NavLink>
                {/* <SubNav /> */}
            </Container>
            <Route path="/:device"><SubNav /></Route>
        </div>
    )
}

export default NavWrapper