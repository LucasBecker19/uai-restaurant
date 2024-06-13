import StoreButton from "../StoreButton/StoreButton.client";
import { AppDownload, AppInfos, AppInfosDescription, AppInfosTitle, AppPicture, StyledAppPresentation } from "./AppPresentation.styles";
import AppRate from "../AppRate/AppRate.client";
import AppPresentationImage from "../../../../public/app-presentation.svg";
import Image from "next/image";

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

                <AppDownload>
                    <p className="label-download">Baixe agora</p>
                    
                    <div>
                        <StoreButton store="app-store" />
                        <StoreButton store="play-store" />
                    </div>
                </AppDownload>

                <AppRate/>
            </AppInfos>

            <AppPicture>
                <Image src={AppPresentationImage} alt="app presentation image" />
            </AppPicture>
        </StyledAppPresentation>
    )
}