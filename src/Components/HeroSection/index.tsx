import React from 'react'
import styled from 'styled-components';

const WrapperContain = styled.div`
padding:64px 56px;

`

const Section1 = styled.div`
height:80vh;
background-color: aquamarine;
margin-right: 32px;
`

const Section2 = styled.div`

`

const Sec21 = styled.div`
height:40vh;
background-color: red;
`

const Sec22 = styled.div`
height:40vh;
background-color: yellow;
`
const subSec2 = styled.div`

`
export const HeroSection = () => {
    return (
        
        <>
            <WrapperContain className="container-fluid">
                <div className="row">
                    <Section1 className="col-4">3</Section1>
                    <Section2 className="col-7">
                        <Sec21 className="row">
                        
                        </Sec21>
                        <Sec22 className="row">
                            <subSec2 className="col-6"></subSec2>
                            <subSec2 className="col-6"></subSec2>
                        </Sec22>
                    </Section2>
                </div>
            </WrapperContain>
        </>

    )
}