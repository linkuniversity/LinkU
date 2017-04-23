import React from 'react';
import {Container} from 'semantic-ui-react'

const footerStyle = {
    paddingTop: '25px',
    paddingBottom: '20x',
    width: '100%',
    backgroundColor: '#5fa1d7',
    color: '#FFFFFF',
    height: '100px',
    textAlign: 'center',
    verticalAlign: 'bottom'
};

const LinkUFooter = () => (
    <Container style={footerStyle}>
        <div>
            (c) 2017 Team LinkU
        </div>
        <div style={{marginTop: "5px"}}>
            supported by. Software Maestro 서울 특별시 강남구 테헤란로 311(역삼동) 아남타워 빌딩 6층
        </div>
    </Container>
);

export default LinkUFooter;
