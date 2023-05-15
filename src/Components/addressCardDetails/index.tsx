import React from 'react'
import styled from 'styled-components'

interface Addressprops {
    name: string;
    line1 : string;
    line2 ?: string;
    pincode ?: string;
    mobile ?: number;
    special ?: string;
    
}

const Name = styled.h1`
margin-bottom: 0px;
color:#2D2D2D;
`
const Line1 = styled.h1`
`
const Line2 = styled.h1`
`
const Pincode = styled.h1`
`
const Mobile = styled.span`
`
const Number = styled.span`
    color:#2D2D2D;
`

const AddStyle = styled.div<{special:string}>`
margin-left: 16px;
border: ${(prop)=> prop.special === "Home" ? "1px solid #2DC071" : prop.special === "Office" ? "1px solid #EFAF00" : "white"};
padding: 2px 4px;
border-radius: 4px;
color:${(prop)=> prop.special === "Home" ? "#2DC071" : prop.special === "Office"? "#EFAF00" : "white" };
/* color: red; */
`

const AddressDetails: React.FC<Addressprops> = ({
    name,
    line1,
    line2,
    pincode,
    mobile,
    special
}: Addressprops) => {
    console.log("special",special);
    
  return (
    <div className="body2Regular">
        <div className="d-flex align-item-center">
            <Name className="bodySemi">{name}</Name>
            {
                special 
                    ? 
                    <AddStyle special={special}>
                        Home
                    </AddStyle> 
                    :
                     null
            }
        </div>
        
        <Line1 className="body2Regular">{line1}</Line1>
        <Line2 className="body2Regular">{line2}</Line2>
        <Pincode className="body2Regular">{pincode}</Pincode>
        <div>
            <Mobile>Mobile: <Number className="bodySemi">{mobile}</Number></Mobile>
        </div>
    </div>
  )
}

export default AddressDetails;