import { StyledAbout } from "./About.styles";
import RoundBoldArrowUpIcon from "../../../../public/round-bold-arrow-up.svg";
import TwoUsersIcon from "../../../../public/two-users.svg";
import RestaurantMenuBlackIcon from "../../../../public/restaurant-menu-black.svg";
import Card from "../Card/Card.client";

export default function About() {
    return (
        <StyledAbout>
            <div className="wrapper-about-description">
                <p>Sobre o app</p>
                <span>
                    Você pode realizar o seu pedido pelo app, que a nossa cozinha estará pronta para fazer o seu prato favorito. 
                    Há e o mais legal de tudo isso, você mesmo pode realizar o pagamento da conta sem precisar do garçon para solicitar o fechamento da conta, 
                    o app realiza tudo de forma automativa.
                </span>
            </div>

            <div className="wrapper-about-cards">
                <Card 
                    icon={RoundBoldArrowUpIcon} 
                    title='1 -' 
                    description='On this versoin only rides can use this. They can pick up orders from restaurants and deliver to customers' 
                    variant='green-light' 
                />

                <Card 
                    icon={TwoUsersIcon} 
                    title='2 -' 
                    description='On customer view you only users can use this versoin, they can explore and order foods from there.' 
                    variant='green' 
                />

                <Card 
                    icon={RestaurantMenuBlackIcon} 
                    title='3 -' 
                    description='This versoin is only for restairants users they can recive their orders on this versoinof design.' 
                    variant='white' 
                />
            </div>
        </StyledAbout>
    );
}