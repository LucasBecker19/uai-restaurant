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
    }
    
`;

const ImageWrapper = styled.div`
    border-right: 1px solid #DBDCDF;
    display: flex;
    align-items: center;
    padding: 20px 22px 20px 0;
`;

const RateInfos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 22px;
`;

const DisplayFlex = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`;

const RateBar = styled.div`
    width: 65px;
    height: 3px;
    background-color: #059669;
    margin-left: 10px;
    border-radius: 3px;
`;

export { StyledAppRate, ImageWrapper, RateInfos, DisplayFlex, RateBar };