import Image from "next/image";
import LogoImage from "../../../../public/Logo.svg";
import { DefaultHeaderSpan, HeaderButtons, LoginButton, StyledHeader } from "./Header.styles";

export default function Header() {
    return (
        <StyledHeader>
            <Image src={LogoImage} alt="logo" />

            <HeaderButtons>
                <DefaultHeaderSpan>Home</DefaultHeaderSpan>
                <DefaultHeaderSpan>Funcionalidades</DefaultHeaderSpan>
                <DefaultHeaderSpan>Sobre Uai App</DefaultHeaderSpan>
                <DefaultHeaderSpan>Telas do App</DefaultHeaderSpan>
                <LoginButton>Entrar</LoginButton>
            </HeaderButtons>
        </StyledHeader>
    );
}