import { AppInfos, AppInfosDescription, AppInfosTitle, AppPicture, AppPictureDesktop, AppPictureMobile, DesktopDownloadAndRate, MobileDownloadAndRate, StyledAppPresentation } from "./AppPresentation.styles";
import AppPresentationImage from "../../../../public/app-presentation.svg";
import AppPresentationMobileImage from "../../../../public/app-presentation-mobile.svg";
import Image from "next/image";
import AppDownloadAndRate from "./AppDownloadAndRate.client";

export default function AppPresentation() {
    return (
        <StyledAppPresentation>
            <AppInfos>
                <AppInfosTitle>
                    Uai, o seu<br/>app restaurante
                </AppInfosTitle>

                <AppInfosDescription>
                    Descubra uma experiência gastronômica única com<br/>nosso aplicativo de restaurante.
                </AppInfosDescription>

                <DesktopDownloadAndRate>
                    <AppDownloadAndRate />
                </DesktopDownloadAndRate>
            </AppInfos>

            <AppPicture>
                <AppPictureDesktop>
                    <Image src={AppPresentationImage} alt="app presentation image" />
                </AppPictureDesktop>

                <AppPictureMobile>
                    <Image src={AppPresentationMobileImage} alt="app presentation image" />
                </AppPictureMobile>
            </AppPicture>


            <MobileDownloadAndRate>
                <AppDownloadAndRate />
            </MobileDownloadAndRate>
        </StyledAppPresentation>
    )
}