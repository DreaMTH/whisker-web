export const displayDate = (date: Date): string => {
    return `${date.getFullYear()}/${date.getUTCMonth()+1}/${date.getUTCDate()}`;
}