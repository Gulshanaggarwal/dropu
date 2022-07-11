import { DropzoneContainer, FileInput, LabelUpload, Text, UploadButton, InvisibleElement } from "./styles";
import { useRef, useState } from "react";

export default function Dropzone() {

    const [isDrag, setDrag] = useState(false);
    const inputRef = useRef();


    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDrag(true);
        }
        else if (e.type === 'dragleave') {
            setDrag(false);
        }


    }

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDrag(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            // handleFiles
        }
    }

    const buttonClick = () => {
        inputRef.current.click();
    }

    const handleOnChange = () => {
        e.preventDefault();

        if (e.target.files && e.target.files[0]) {
            // handleFiles
        }
    }

    return (
        <DropzoneContainer onDragEnter={handleDrag}>
            <FileInput type="file" id="file" onChange={handleOnChange} />
            <LabelUpload ref={inputRef} htmlFor="file">
                <Text>Drag and drop your file here or</Text>
                <UploadButton onClick={buttonClick} type="button">Upload a file</UploadButton>
            </LabelUpload>
            {isDrag && <InvisibleElement onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></InvisibleElement>}
        </DropzoneContainer>
    )
}