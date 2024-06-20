import React from "react";
import Topic from "./Topic.jsx";

const Topics = ({ talks }) => {
    return (
        <div className=" w-8/12 mx-auto bg-white text-black p-4 rounded-md">
            <Topic talks={talks} />
        </div>
    );
};

export default Topics;
