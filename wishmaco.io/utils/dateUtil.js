import moment from "moment";

export function padLeadingZeros(num, size) {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
}

export const formatTimerDuration = (start, end) => {
    let parts = [];
    const duration = moment.duration(moment(end).diff(moment(start)));

    // return nothing when the duration is falsy or not correctly parsed (P0D)
    if (!duration || duration.toISOString() === "P0D") return;

    if (duration.years() >= 1) {
        const years = Math.floor(duration.years());
        parts.push({ count: padLeadingZeros(years, 2), key: 'years' })

    }

    if (duration.months() >= 1) {
        const months = Math.floor(duration.months());
        parts.push({ count: padLeadingZeros(months, 2), key: 'months' })
    }

    if (duration.days() >= 1) {
        const days = Math.floor(duration.days());
        parts.push({ count: padLeadingZeros(days, 2), key: 'days' })
    }

    if (duration.hours() >= 1) {
        const hours = Math.floor(duration.hours());
        parts.push({ count: padLeadingZeros(hours, 2), key: 'hours' })
    }

    if (duration.minutes() >= 1) {
        const minutes = Math.floor(duration.minutes());
        parts.push({ count: padLeadingZeros(minutes, 2), key: 'minutes' })
    }

    if (duration.seconds() >= 1) {
        const seconds = Math.floor(duration.seconds());
        parts.push({ count: padLeadingZeros(seconds, 2), key: 'seconds' })
    }
    return parts
}
