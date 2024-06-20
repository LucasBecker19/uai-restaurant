import { DisplayFlex, ImageWrapper, RateBar, RateInfos, StyledAppRate, WrapperStars } from "./AppRate.styles";
import MouseImage from "../../../../public/mouse.svg";
import StarImage from "../../../../public/star.svg";
import PersonInLoveEmoji from "../../../../public/PersonInLoveEmoji.svg";
import Image from "next/image";

export default function AppRate() {
    return (
        <StyledAppRate>
            <ImageWrapper>
                <Image src={MouseImage} alt="mouse image"></Image>
            </ImageWrapper>

            <RateInfos>
                <DisplayFlex>
                    Usuários confiáveis
                    <RateBar />
                    <Image src={PersonInLoveEmoji} alt="emoji about a person in love" id="person-in-love-emoji-mobile" />
                </DisplayFlex>

                <WrapperStars>
                    <DisplayFlex>
                        <Image src={StarImage} alt="rate star" />
                        <Image src={StarImage} alt="rate star" />
                        <Image src={StarImage} alt="rate star" />
                        <Image src={StarImage} alt="rate star" />
                        <Image src={StarImage} alt="rate star" />
                    </DisplayFlex>

                    <DisplayFlex>
                        Mais de 5 mil usuários satisfeitos 
                        <Image src={PersonInLoveEmoji} alt="emoji about a person in love" id="person-in-love-emoji-desktop" />
                    </DisplayFlex>
                </WrapperStars>
            </RateInfos>
        </StyledAppRate>
    );
}