import Image from "next/image";
import { StyledCard } from "./Card.styles";
import { CardProps } from "./Card.types";

export default function Card(props: CardProps) {
    const { icon, title, description, variant } = props;
    return (
        <StyledCard variant={variant}>
            <Image src={icon} alt="Icon image card" />
            <p>{title}</p>
            <span>{description}</span>
        </StyledCard>
    );
}