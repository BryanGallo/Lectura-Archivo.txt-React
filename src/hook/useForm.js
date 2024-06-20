import { useState } from "react";

const useForm = () => {
    const [file, setFile] = useState(null);

    const readFile = (file) => {
        console.log(file);
        const reader = new FileReader();
        reader.onload = (e) => {
            const fileContent = e.target.result;
            console.log(fileContent);
            const matches = fileContent.match(/(.+?) (\d+min)/g);
            console.log(matches);
        };

        reader.readAsText(file);
    };

    return { file, setFile, readFile };
};

export default useForm;
