import { UploadPageContainer, ShareButton } from "../styles/UploadStyle";
import Dropzone from "../components/Dropzone/Dropzone";
import Protected from "../components/Protected/protected";
import FileList from "../components/FileList/fileList";
import { useContext, useState } from "react";
import LinkCreateModal from "../components/ShareModal/LinkCreateModal/linkCreateModal";
import { LocalStateContext } from "../contexts/LocalStateContext";


export default function Upload() {

    const [isLinkCreateModal, setLinkCreateModal] = useState(false);
    const [state] = useContext(LocalStateContext);
    const { length } = state.fileList;

    const handleButtonClick = () => {
        if (length > 0) {
            setLinkCreateModal(true);
        }
    }
    return (
        <Protected>
            <UploadPageContainer>
                <div>
                    <ShareButton length={length} onClick={handleButtonClick}>
                        Share
                    </ShareButton>
                    <LinkCreateModal open={isLinkCreateModal} setLinkCreateModal={setLinkCreateModal} fileList={state.fileList} />
                </div>
                <Dropzone />
                <FileList />
            </UploadPageContainer>
        </Protected>
    )
}