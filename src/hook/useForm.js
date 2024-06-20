import { useState } from "react";

const useForm = () => {
    const [file, setFile] = useState(null);

    const readFile =  (file) => {
        console.log(file);
    };


    return { file, setFile,readFile };
    
};

export default useForm;
