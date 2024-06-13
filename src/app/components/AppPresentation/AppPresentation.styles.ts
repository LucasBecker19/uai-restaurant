import styled from "styled-components";

const StyledAppPresentation = styled.div`
    display: flex;
`;

const AppInfos = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 248px 0 50px 96px;
`;

const AppInfosTitle = styled.div`
    font-size: 64px;
    font-weight: 900;
    line-height: 82px;
    text-align: left;
    margin-bottom: 25px;
`;

const AppInfosDescription = styled.div`
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    text-align: left;
    margin-bottom: 48px;
`;

const AppDownload = styled.div`
    margin-bottom: 70px;
    
    .label-download {        
        font-size: 16px;
        font-weight: 700;
        line-height: 16px;
        letter-spacing: 0.1em;
        color: #059669;
        text-transform: uppercase;
        margin: 0;
        margin-bottom: 18px;
    }

    > div {
        display: flex;
        flex-direction: row;
        gap: 24px;
    }
`;

const AppPicture = styled.div`
    display: flex;
    width: 50%;
    background-color: #E7F4E8;
    padding: 165px 0 0 0;
    
    img { 
        margin: auto; 
        margin-top: 0;
        margin-bottom: 0;
    }
`;

export { StyledAppPresentation, AppInfos, AppPicture, AppInfosTitle, AppInfosDescription, AppDownload };