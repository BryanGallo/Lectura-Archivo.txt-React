import { useState } from "react";

const useForm = () => {
    const [file, setFile] = useState(null);
    return { file, setFile };
};

export default useForm;
