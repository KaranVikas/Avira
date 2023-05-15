import * as React from "react"
import styled from 'styled-components'


const ContainWrap = styled.div`
  margin: 64px 56px 40px ;
`
const Content = styled.div`
    display:flex;
`
const ProItem = () => {
    return(
        <ContainWrap>
            <Content>
                <img src={} alt={name}/>
                <h4>Description</h4>
                
            </Content>
            
        </ContainWrap>
    )
}

export default ProItem