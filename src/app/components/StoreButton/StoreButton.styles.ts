import styled from "styled-components";

const StyledStoreButton = styled.div`   
    display: flex;
    flex-direction: row;
    gap: 20px;

    border-radius: 18px;
    background-color: #181B1D;
    padding: 15px 25px;
    margin: 0;
    cursor: pointer;

    .image {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .description {
        display: flex;
        flex-direction: column;
    }

    span, p {
        color: white;
        margin: 0;
    }

    span {
        font-size: 12px;
        font-weight: 400;
    }

    p {
        font-size: 18px;
        font-weight: 700;
    }
`;

export { StyledStoreButton };