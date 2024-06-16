import AppRate from "../AppRate/AppRate.client";
import StoreButton from "../StoreButton/StoreButton.client";
import { AppDownload } from "./AppPresentation.styles";

export default function AppDownloadAndRate() {
    return (
        <>
            <AppDownload>
                <p className="label-download">Baixe agora</p>

                <div>
                    <StoreButton store="app-store" />
                    <StoreButton store="play-store" />
                </div>
            </AppDownload>

            <AppRate />
        </>
    );
}