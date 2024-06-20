import React from "react";

const Topic = ({ talks }) => {


    return (
        <div className=" w-8/12 mx-auto bg-white text-black p-4 rounded-md">
            <h2 className="mb-2 text-lg font-semibold">
                Horario en la mañana:
            </h2>
            {talks.morningTopic.length > 0 ? (
                talks.morningTopic.map((talk, index) => (
                    <p key={index}>
                        {talk.duration !== 0
                            ? `tiempo - ${talk.title} - ${talk.duration}min`
                            : `tiempo - ${talk.title}`}
                    </p>
                ))
            ) : (
                <p>No hay sesiones en la mañana.</p>
            )}

            <h2 className="mb-2 text-lg font-semibold">Horario en la tarde:</h2>
            {talks.afternoonTopic.length > 0 ? (
                talks.afternoonTopic.map((talk, index) => (
                    <p key={index}>
                        {talk.duration !== 0
                            ? `tiempo - ${talk.title} - ${talk.duration}min`
                            : `tiempo - ${talk.title}`}
                    </p>
                ))
            ) : (
                <p>No hay sesiones en la mañana.</p>
            )}
        </div>
    );
};

export default Topic;
