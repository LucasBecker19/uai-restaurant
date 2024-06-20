import styled from "styled-components";

const StyledAppRate = styled.div`
    display: flex;
    flex-direction: row;
    font-weight: 500;

    @media (min-width:1025px) {
        font-size: 18px;
        line-height: 18px;    
    }

    @media (min-width:320px) and (max-width:1024px) {
        font-size: 13px;
        line-height: 13px;
        margin: auto;
    }
    
`;

const ImageWrapper = styled.div`
    border-right: 1px solid #DBDCDF;
    display: flex;
    align-items: center;
    padding: 20px 22px 20px 0;
    margin-right: 24px;

    @media (min-width:320px) and (max-width:1024px) {
        display: none;
    }
`;

const RateInfos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    
    @media (min-width:1025px) {
        #person-in-love-emoji-mobile {
            display: none;
        }
    }
`;

const DisplayFlex = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`;

const WrapperStars = styled.div`
    @media (min-width:1025px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 10px;
    }

    @media (min-width:320px) and (max-width:1024px) {
        display: flex;
        flex-direction: row;
        gap: 6px;

        #person-in-love-emoji-desktop {
            display: none;
        }
    }
`;

const RateBar = styled.div`
    width: 65px;
    height: 3px;
    background-color: #059669;
    margin: 0 10px;
    border-radius: 3px;
`;

export { StyledAppRate, ImageWrapper, RateInfos, DisplayFlex, WrapperStars, RateBar };