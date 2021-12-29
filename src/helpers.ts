import {DATE_SECONDS} from "./constants";

export const dateHelper = (date: number): string => {
    const formatDate = new Date(date * DATE_SECONDS).toLocaleTimeString()

    return formatDate.split(':').slice(0, -1).join(':')
}