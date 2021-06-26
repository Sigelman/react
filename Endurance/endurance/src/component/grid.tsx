import React, {Component} from "react";
import styled from 'styled-components';
import {isMobile, isTablet, isDesktop} from 'react-device-detect';


export const Container = styled.div `
    max-width: 1360px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    box-sizing: border-box;
    &:before,
    &:after {
        content: " ";
        display: table;       
    }
    &:after {
        clear: both;
    }
    `
export const Row = styled.div `
    width: 100%;
    height: auto;
    float: left;
    box-sizing: border-box;
    &:before,
    &:after: {
        content: " ";
    display: table;
    }
    &: after {
        clear: both;
    }

    `;

function getWidthGrid(value: number){
        if (!value) return;
        let width = value / 12 * 100;
        return `width: ${width}%`;
    }
export const Column = styled.div `
    float: left;
    padding: .25rem;
    min-height: 1px;
    box-sizing: border-box;
    width: 100%;
    }
    @media only screen and (min-width: 768px) {
        ${({ mobile }) => (mobile && getWidthGrid(mobile))}

    }
    @media only screen and (min-width: 768px) {
        ${({ tablet }) => tablet && getWidthGrid(tablet)}
    }
    @media only screen and (min-width: 1000px) {
        ${({ desktop }) => desktop && getWidthGrid(desktop)}
    }
    `;

class App extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Column mobile ='6' tablet='12' desktop ='6'>mobile 6/ tablet 12/desktop 6</Column>
                </Row>
            </Container>
        )
    }

}

export default App;   





