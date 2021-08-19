import React from "react";
import { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
    const [file, setFile] = useState(null);

    const [error, SetError] = useState(null);

    const allowedFileTypes = ["image/png", "image/jpeg", "image/jpg"];

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        if (selected && allowedFileTypes.includes(selected.type)) {
            setFile(selected);
            SetError("");
        } else {
            setFile(null);
            SetError("Please select an image file of the (png or jpeg)");
        }
    };

    return (
        <form>
            <label>
                <input type="file" onChange={changeHandler}></input>
                <span>+</span>
            </label>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div className="filename">{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    );
};

export default UploadForm;
