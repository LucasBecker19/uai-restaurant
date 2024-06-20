import styled from "styled-components";

const StyledAbout = styled.div`
    background-color: #F6F9F6;
    width: 100%;
    margin: auto;
    box-sizing: border-box;

    p {
        margin: 0;
        margin-bottom: 16px;
    }

    span {
        font-weight: 400;
        line-height: 30px;
    }

    .wrapper-about-cards {
        display: flex;
    }

    @media (min-width:1025px) {
        padding: 150px 88px 100px;

        p {
            font-size: 56px;
            font-weight: 700;
            line-height: 56px;
        }

        span {
            font-size: 18px;
        }

        .wrapper-about-description {
            max-width: 725px;
            
            > p {
                margin-bottom: 24px;
            }
        }

        .wrapper-about-cards {
            display: flex;
            justify-content: space-between;
            gap: 56px;
        }
    }

    @media (min-width:320px) and (max-width:1024px) {
        padding: 24px 20px;
        
        p {
            font-size: 18px;
            font-weight: 900;
            line-height: 22px;
        }

        span {
            font-size: 16px;
        }

        .wrapper-about-description {
            max-width: 375px;
            margin: auto;
        }

        .wrapper-about-cards {
            flex-direction: column;
            gap: 40px;
            margin-top: 16px;
        }
    }
`;

export { StyledAbout };