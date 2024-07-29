export function daysBetweenDates(date1:string, date2:string) {  
    const firstDate = new Date(date1) as any;
    const secondDate = new Date(date2) as any;

    const differenceInTime = Math.abs(secondDate - firstDate);
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));
    return differenceInDays;
}
