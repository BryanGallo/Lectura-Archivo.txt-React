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
            if (matches) {
                const topics = matches.map((match) => {
                    const parts = match.match(/(.+?) (\d+min)/);
                    console.log(parts);
                    return {
                        title: parts[1].trim(),
                        duration: parseInt(
                            parts[2].replace("min", "").trim(),
                            10
                        ),
                    };
                });
                console.log(topics);
            } else {
                alert("No se encontraron coincidencias en el archivo.");
            }
        };

        reader.readAsText(file);
    };

    return { file, setFile, readFile };
};

export default useForm;
