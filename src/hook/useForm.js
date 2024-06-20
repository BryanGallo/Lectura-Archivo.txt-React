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

                const newTopics = randomTopics(topics);
                console.log(newTopics);
            } else {
                alert("No se encontraron coincidencias en el archivo.");
            }
        };

        reader.readAsText(file);
    };

    const randomTopics = (topics) => {
        for (let i = topics.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [topics[i], topics[j]] = [topics[j], topics[i]];
        }
        return topics;
    };

    return { file, setFile, readFile };
};

export default useForm;
