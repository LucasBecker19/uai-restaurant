import styled from "styled-components";
import { CardPropsVariant } from "./Card.types";

const StyledCard = styled.div<{ variant: CardPropsVariant }>`
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 32px;
    border-radius: 40px;

    background-color: ${props => {
        switch (props.variant) {
            case 'green-light':
                return '#E7F4E8';
            case 'green':
                return '#32B768';
            case 'white':
            default:
                return '#F8FAFC';
        }
    }};

    p {
        margin: 0;
    }

    @media (min-width:1025px) {
        max-width: 460px;
        margin-top: 64px;

        p {
            font-size: 22px;
            font-weight: 600;
            line-height: 22px;
        }

        span {
            font-size: 15px;
            font-weight: 400;
            line-height: 28px;
        }
    }

    @media (min-width:320px) and (max-width:1024px) {
        max-width: 285px;
        margin: auto;

        p {
            font-size: 17px;
            font-weight: 600;
            line-height: 17px;
        }

        span {
            font-size: 12px;
            font-weight: 500;
            line-height: 22px;
        }
    }

`;

export { StyledCard };