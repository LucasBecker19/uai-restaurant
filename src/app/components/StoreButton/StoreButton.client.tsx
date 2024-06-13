import { StyledStoreButton } from "./StoreButton.styles";
import AppStoreLogo from "../../../../public/app-store.svg";
import PlayStoreLogo from "../../../../public/play-store.svg";
import Image from "next/image";

type StoreButtonType = {
    store: 'play-store' | 'app-store';
}

export default function StoreButton(props: StoreButtonType) {
    const { store } = props;

    return (
        <StyledStoreButton>
            <div className="image">
                <Image src={store === 'app-store' ? AppStoreLogo : PlayStoreLogo} alt="Logo da Loja de Aplicativos" />
            </div>

            <div className="description">
                <span>Available on</span>
                <p>{store === 'app-store' ? 'App Store' : 'Play Store'}</p>
            </div>
        </StyledStoreButton>
    );
}