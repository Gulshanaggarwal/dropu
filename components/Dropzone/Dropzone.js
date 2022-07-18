import { DropzoneContainer, FileInput, LabelUpload, Text, UploadButton, InvisibleElement } from "./styles";
import { useContext, useRef, useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { storage } from "../../lib/firebase"
import { nanoid } from "nanoid";
import { LocalStateContext } from "../../contexts/LocalStateContext";

const SUPPORTED_TYPES = ['image/jpg', 'image/png', 'image/jpeg', 'image/gif', 'application/pdf'];
const MAX_FILE_SIZE = 10485760   // 10 Megabytes;


function shortenBytes(n) {
    const k = n > 0 ? Math.floor((Math.log2(n) / 10)) : 0;
    const rank = (k > 0 ? 'KMGT'[k - 1] : '') + 'B';
    const count = Math.floor(n / Math.pow(1024, k));
    return count + " " + rank;
}

export default function Dropzone() {

    const [isDrag, setDrag] = useState(false);
    const [files, setFiles] = useState(null);
    const inputRef = useRef();
    const [state, dispatch] = useContext(LocalStateContext);


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
            handleFiles(e.dataTransfer.files)  // handleFiles
        }
    }

    const buttonClick = () => {
        inputRef.current.click();
    }

    const handleOnChange = (e) => {
        e.preventDefault();

        if (e.target.files && e.target.files[0]) {
            handleFiles(e.target.files)  // handlefiles
        }
    }

    const handleFiles = (fileList) => {

        const length = fileList.length;
        let temp = [];

        // Verify file constraints

        for (let i = 0; i < length; i++) {
            if (!SUPPORTED_TYPES.includes(fileList[i].type)) {
                alert("file type not supported");
                return;
            }
            else if (fileList[i].size > MAX_FILE_SIZE) {
                alert("Size shouldn't be more than 10 Mb");
                return;
            }
            temp.push(fileList[i]);

        }
        temp.forEach((file) => {

            const storageRef = ref(storage, `uploads/${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on('state_changed', (snapshot) => {

            }, (error) => {

                // Handle Error
                alert("error occurred");
            },
                () => {
                    //  Handle Success
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        dispatch({
                            type: 'ADD_FILE',
                            payload: { name: file.name, size: shortenBytes(file.size), contentType: file.type, downloadURL, id: nanoid(10) }
                        })
                    });


                }
            )

        })

    }

    return (
        <DropzoneContainer onDragEnter={handleDrag}>
            <FileInput type="file" id="file" multiple={true} accept="image/jpg, image/jpeg, image/png, image/gif, application/pdf" onChange={handleOnChange} />
            <LabelUpload ref={inputRef} htmlFor="file">
                <Text>Drag and drop your file here or</Text>
                <UploadButton onClick={buttonClick} type="button">Upload a file</UploadButton>
            </LabelUpload>
            {isDrag && <InvisibleElement onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></InvisibleElement>}
        </DropzoneContainer>
    )
}