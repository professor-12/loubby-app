export function getNextMonthDate(date: Date): Date {
    let nextMonthDate = new Date(date);
    nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);

    if (nextMonthDate.getMonth() === (date.getMonth() + 2) % 12) {
        nextMonthDate.setDate(0);
    }

    return nextMonthDate;
}
