import { useState } from "react";

const useForm = () => {
    const [file, setFile] = useState(null);
    const [talks, setTalks] = useState({
        morningTopic: [],
        afternoonTopic: [],
    });

    //Lectura Archivo
    const readFile = (file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const fileContent = e.target.result;
            const matches = fileContent.match(/(.+?) (\d+min)/g);
            if (matches) {
                if (matches.length >= 24)
                    return alert(
                        "El achivo no puede tener mas de 24 sesiones al día"
                    );
                const topics = matches.map((match) => {
                    const parts = match.match(/(.+?) (\d+min)/);
                    return {
                        title: parts[1].trim(),
                        duration: parseInt(
                            parts[2].replace("min", "").trim(),
                            10
                        ),
                    };
                });

                const newTopics = randomTopics(topics);

                const sessions = distributeTopics(newTopics);
                if (sessions.morningSession) {
                }
                sessions.morningTopic = [
                    ...sessions.morningTopic,
                    {
                        title: "LUNCH",
                        duration: 0,
                    },
                ];

                sessions.afternoonTopic = [
                    ...sessions.afternoonTopic,
                    {
                        title: "SOCIAL EVENT",
                        duration: 0,
                    },
                ];

                setTalks(sessions);
            } else {
                alert("No se encontraron coincidencias en el archivo.");
            }
        };

        reader.readAsText(file);
    };

    //Generando Topics Randoms
    const randomTopics = (topics) => {
        for (let i = topics.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [topics[i], topics[j]] = [topics[j], topics[i]];
        }
        return topics;
    };

    //Generando Topics hasta usar todo el tiempo disponible
    const distributeTopics = (topics) => {
        const morningTopicsLimit = 180; // 9 AM to 12 PM  = 180 minutes
        const afternoonTopicsLimit = 240; // 1 PM to 5 PM = 240 minutes

        const findCombination = (remainingTime, remainingTopics) => {
            if (remainingTime === 0) return [];
            if (remainingTime < 0 || remainingTopics.length === 0) return null;

            for (let i = 0; i < remainingTopics.length; i++) {
                const newremainingTopics = remainingTopics.slice();
                const topic = newremainingTopics.splice(i, 1)[0];

                const result = findCombination(
                    remainingTime - topic.duration,
                    newremainingTopics
                );
                if (result !== null) {
                    return [topic, ...result];
                }
            }
            return null;
        };

        let morningTopic = findCombination(morningTopicsLimit, topics.slice());
        if (!morningTopic) {
            morningTopic = useAvailableTime(morningTopicsLimit, topics.slice());
        }
        const morningTopicTitles = morningTopic.map((topic) => topic.title);
        topics = topics.filter(
            (topic) => !morningTopicTitles.includes(topic.title)
        );

        let afternoonTopic = findCombination(
            afternoonTopicsLimit,
            topics.slice()
        );
        if (!afternoonTopic) {
            afternoonTopic = useAvailableTime(
                afternoonTopicsLimit,
                topics.slice()
            );
        }

        return {
            morningTopic,
            afternoonTopic,
        };
    };

    const useAvailableTime = (timeLimit, talks) => {
        let session = [];
        let remainingTime = timeLimit;

        for (const talk of talks) {
            if (remainingTime >= talk.duration) {
                session.push(talk);
                remainingTime -= talk.duration;
            }
        }
        return session;
    };

    return { file, setFile, readFile, talks };
};

export default useForm;
