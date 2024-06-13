import styled from "styled-components";

const StyledHeader = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 64px;
    padding: 24px 32px 14px;
    border-bottom: 1px solid #CADAD4;
`;

const HeaderButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 60px;
`;

const LoginButton = styled.button`
    background-color: #059669;
    border-radius: 20px;
    border: 1px;
    opacity: 0px;
    
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0.1em;
    padding: 24px 36px;
    color: white;
    text-transform: uppercase;
`;

const DefaultHeaderSpan = styled.span`
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    letter-spacing: 0.1em;
    cursor: pointer;
    text-transform: uppercase;
`;

export { StyledHeader, HeaderButtons, LoginButton, DefaultHeaderSpan };