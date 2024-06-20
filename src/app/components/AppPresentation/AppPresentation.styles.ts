import styled from "styled-components";

const StyledAppPresentation = styled.div`
    display: flex;

    @media (min-width:320px) and (max-width:1024px) {
        flex-direction: column;
    }

    @media (min-width:1025px) {
        flex-direction: row;
    }
`;

const AppInfos = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width:320px) and (max-width:1024px) {
        margin: auto;
        margin-top: 80px;
        padding: 24px 20px 0px;
    }

    @media (min-width:1025px) {
        margin-top: 156px;
        padding: 84px 0 0 88px;
        width: 50%;
    }
`;

const AppInfosTitle = styled.div`
    @media (min-width:320px) and (max-width:1024px) {
        font-size: 35px;
        font-weight: 700;
        line-height: 49px;
        text-align: left;
        margin-bottom: 16px;
    }

    @media (min-width:1025px) {
        font-size: 64px;
        font-weight: 900;
        line-height: 82px;
        text-align: left;
        margin-bottom: 25px;
    }
`;

const AppInfosDescription = styled.div`
    margin-bottom: 48px;

    @media (min-width:320px) and (max-width:1024px) {
        font-size: 16px;
        font-weight: 400;
        line-height: 30px;
        text-align: left;
    }

    @media (min-width:1025px) {
        font-size: 18px;
        font-weight: 400;
        line-height: 30px;
        text-align: left;
    }
`;

const WrapperDownloadAndRate = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width:320px) and (max-width:1024px) {
        margin: auto;
    }
`;

const AppDownload = styled.div`
    > div {
        display: flex;
        flex-direction: row;
        gap: 24px;
    }

    .label-download {
        font-weight: 700;
        color: #059669;
        text-transform: uppercase;
        margin: 0;
        margin-bottom: 18px;
    }

    @media (min-width:1025px) {
        .label-download {        
            font-size: 16px;
            line-height: 16px;
            letter-spacing: 0.1em;
            margin-bottom: 50px;
        }

        margin-bottom: 50px;
    }

    @media (min-width:320px) and (max-width:1024px) {
        .label-download {  
            font-size: 12;
            font-weight: 700;
            line-height: 12px;
        }

        margin-bottom: 24px;
    }
    
`;

const AppPicture = styled.div`
    display: flex;
    background-color: #E7F4E8;

    img { 
        margin: auto; 
        margin-top: 0;
        margin-bottom: 0;
        height: 100%;
        width: 100%;
    }

    @media (min-width:1025px) {
        width: 50%;
    }

    @media (min-width:320px) and (max-width:1024px) {
        padding-top: 32px;
    }
`;

const AppPictureDesktop = styled.div`
    display: none;

    @media (min-width:1025px) {
        display: block;
        padding: 165px 0 0 0;
        margin: auto;
    }
`;

const AppPictureMobile = styled.div`
    display: none;

    @media (min-width:320px) and (max-width:1024px) {
        display: block;
        margin: auto;
    }
`;

const MobileDownloadAndRate = styled.div`
    display: none;

    @media (min-width:320px) and (max-width:1024px) {
        display: flex;
        flex-direction: column;
        padding: 24px 20px;
        margin: auto;
    }
`;

const DesktopDownloadAndRate = styled.div`
    display: none;

    @media (min-width:1025px) {
        display: flex;
        flex-direction: column;
    }
`;

export { StyledAppPresentation, AppInfos, AppPicture, AppInfosTitle, AppInfosDescription, WrapperDownloadAndRate, AppDownload, DesktopDownloadAndRate, MobileDownloadAndRate, AppPictureDesktop, AppPictureMobile };