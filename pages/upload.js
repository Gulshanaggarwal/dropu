import { UploadPageContainer, ShareButton } from "../styles/UploadStyle";
import Dropzone from "../components/Dropzone/Dropzone";


export default function Upload() {
    return (
        <UploadPageContainer>
            <ShareButton>
                Share
            </ShareButton>
            <Dropzone />
        </UploadPageContainer>
    )
}