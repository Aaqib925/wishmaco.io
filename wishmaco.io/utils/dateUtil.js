import moment from "moment";

export const formatTimerDuration = (start, end) => {
    let parts = [];
    const duration = moment.duration(moment(end).diff(moment(start)));

    // return nothing when the duration is falsy or not correctly parsed (P0D)
    if (!duration || duration.toISOString() === "P0D") return;

    if (duration.years() >= 1) {
        const years = Math.floor(duration.years());
        parts.push({ count: years, key: 'years' })

    }

    if (duration.months() >= 1) {
        const months = Math.floor(duration.months());
        parts.push({ count: months, key: 'months' })
    }

    if (duration.days() >= 1) {
        const days = Math.floor(duration.days());
        parts.push({ count: days, key: 'days' })
    }

    if (duration.hours() >= 1) {
        const hours = Math.floor(duration.hours());
        parts.push({ count: hours, key: 'hours' })
    }

    if (duration.minutes() >= 1) {
        const minutes = Math.floor(duration.minutes());
        parts.push({ count: minutes, key: 'minutes' })
    }

    if (duration.seconds() >= 1) {
        const seconds = Math.floor(duration.seconds());
        parts.push({ count: seconds, key: 'seconds' })
    }

    return parts
}
