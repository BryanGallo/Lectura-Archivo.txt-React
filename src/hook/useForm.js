import { useState } from "react";

const useForm = () => {
    const [file, setFile] = useState(null);
    return { file };
};

export default useForm;
