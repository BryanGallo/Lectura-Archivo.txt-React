import React from "react";
import { addStartTime } from "../helpers/time.js";

const Topic = ({ talks }) => {
    const hourLunch = "12:00 PM";
    const hourEvent = "17:00 PM";
    return (
        <div>
            <h2 className="mb-2 text-lg font-semibold">
                Horario en la mañana:
            </h2>{" "}
            {talks.morningTopic.length > 0 ? (
                addStartTime(talks.morningTopic, 9).map((talk, index) => (
                    <p key={index}>
                        {talk.duration !== 0
                            ? `${talk.startTime} - ${talk.title} - ${talk.duration}min`
                            : `${hourLunch}- ${talk.title}`}
                    </p>
                ))
            ) : (
                <p>No hay Charlas en la mañana.</p>
            )}
            <h2 className="mb-2 text-lg font-semibold">
                Horario en la tarde:
            </h2>{" "}
            {talks.afternoonTopic.length > 0 ? (
                addStartTime(talks.afternoonTopic, 13).map((talk, index) => (
                    <p key={index}>
                        {talk.duration !== 0
                            ? `${talk.startTime} - ${talk.title} - ${talk.duration}min`
                            : `${hourEvent}- ${talk.title}`}
                    </p>
                ))
            ) : (
                <p>No hay Charlas en la tarde.</p>
            )}
        </div>
    );
};

export default Topic;
