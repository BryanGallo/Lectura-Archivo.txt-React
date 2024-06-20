const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    return `${formattedHours}:${mins < 10 ? "0" + mins : mins} ${period}`;
};

const addStartTime = (session, startHour) => {
    let currentTime = startHour * 60; // conviertiendo horas a minutos
    return session.map((talk) => {
        const startTime = formatTime(currentTime);
        currentTime += talk.duration;
        return { ...talk, startTime };
    });
};
export { addStartTime };
