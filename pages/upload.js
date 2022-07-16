import { UploadPageContainer, ShareButton } from "../styles/UploadStyle";
import Dropzone from "../components/Dropzone/Dropzone";
import Protected from "../components/Protected/protected";
import FileList from "../components/FileList/fileList";


export default function Upload() {
    return (
        <Protected>
            <UploadPageContainer>
                <ShareButton>
                    Share
                </ShareButton>
                <Dropzone />
                <FileList />
            </UploadPageContainer>
        </Protected>
    )
}