import { AppInfos, AppInfosDescription, AppInfosTitle, AppPicture, AppPictureDesktop, AppPictureMobile, DesktopDownloadAndRate, MobileDownloadAndRate, StyledAppPresentation } from "./AppPresentation.styles";
import AppPresentationImage from "../../../../public/app-presentation.png";
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
                    Descubra uma experiência gastronômica única com nosso aplicativo de restaurante.
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
                    <Image src={AppPresentationImage} alt="app presentation image" />
                </AppPictureMobile>
            </AppPicture>


            <MobileDownloadAndRate>
                <AppDownloadAndRate />
            </MobileDownloadAndRate>
        </StyledAppPresentation>
    )
}