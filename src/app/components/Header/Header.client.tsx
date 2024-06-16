import Image from "next/image";
import LogoImage from "../../../../public/Logo.svg";
import ToggleMenuImage from "../../../../public/toggle-menu.svg";
import { HeaderButtonsDesktop, MobileMenuToggle, StyledHeader } from "./Header.styles";
import HeaderButtons from "./HeaderButtons.client";

export default function Header() {
    return (
        <StyledHeader>
            <MobileMenuToggle>
                <Image src={ToggleMenuImage} alt="toggle-menu" />
            </MobileMenuToggle>

            <Image src={LogoImage} alt="logo" />

            <HeaderButtonsDesktop>
                <HeaderButtons />
            </HeaderButtonsDesktop>
        </StyledHeader>
    );
}