import { DefaultHeaderSpan, LoginButton } from "./Header.styles";

export default function HeaderButtons() {
    return (
        <>
            <DefaultHeaderSpan>Home</DefaultHeaderSpan>
            <DefaultHeaderSpan>Funcionalidades</DefaultHeaderSpan>
            <DefaultHeaderSpan>Sobre Uai App</DefaultHeaderSpan>
            <DefaultHeaderSpan>Telas do App</DefaultHeaderSpan>
            <LoginButton>Entrar</LoginButton>
        </>
    );
}