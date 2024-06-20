import styled from "styled-components";

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #CADAD4;
    
    @media (min-width:320px) and (max-width:1024px) {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;

        padding: 10px 35px;

        box-shadow: 0px 4px 4px 0px #0000000A;
        background-color: white;

        > img {
            width: 78px;
            height: 59px;
        }
    }

    @media (min-width:1025px) {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;

        margin: 0 88px;
        padding: 40px 40px 26px 0;
    }
`;

const HeaderButtonsDesktop = styled.div`
    display: none;

    @media (min-width:1025px) {
        display: flex;
        display: flex;
        align-items: center;
        gap: 60px;
    }
`;

const MobileMenuToggle = styled.div`
    display: none;

    @media (min-width:320px) and (max-width:1024px) {
        display: flex;

        > img {
            cursor: pointer;
        }
    }
`;

const LoginButton = styled.button`
    background-color: #059669;
    border-radius: 20px;
    border: 0;
    opacity: 0px;
    
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0.1em;
    padding: 24px 36px;
    color: white;
    text-transform: uppercase;
    cursor: pointer;
`;

const DefaultHeaderSpan = styled.span`
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    letter-spacing: 0.1em;
    cursor: pointer;
    text-transform: uppercase;
`;

export { StyledHeader, HeaderButtonsDesktop, MobileMenuToggle, LoginButton, DefaultHeaderSpan };
