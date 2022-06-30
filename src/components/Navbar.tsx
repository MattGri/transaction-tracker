import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navigation = styled.nav`
    padding: 20px 10px;
    background-color: #effaf0;
`

const NavigationElements = styled.ul`
    display: flex;
    align-items: center;
    margin:  0 auto;
    justify-content: center;
`


const NavigationElement = styled(Link)`
    text-decoration: none;
    color: #333;
    margin-left: 16px;   
`

const Navbar = () => {
    return (
        <Navigation>
            <NavigationElements>

                <NavigationElement to='/login'>
                    Login
                </NavigationElement>
                <NavigationElement to='/signup'>
                    Signup
                </NavigationElement>

            </NavigationElements>
        </Navigation>
    )
}

export default Navbar;