import styled from "styled-components";
import { BsFillArrowLeftSquareFill } from "react-icons/bs"
import { useState } from "react";

const RightBannerWrap = styled.div`
position: fixed;
inset: 0 -300px 0 auto;
width: 300px;
background: #ddd;
z-index: 999;
transition: 0.5s;
span{
    position: absolute;
    inset: 100px auto auto 0;
    transform: translate(-100%, 0);
    font-size: 30px;
    color: rgb(166, 207, 248);
}
&.on{
    inset: 0 0 0 auto;
}
`

const RightBanner = () => {
    const [on, setOn] = useState(false);
    return (
        <RightBannerWrap className={on ? 'on' : ''}>
            <span onClick={() => setOn(!on)}>
                <BsFillArrowLeftSquareFill />
            </span>
        </RightBannerWrap>
    )
}

export default RightBanner;