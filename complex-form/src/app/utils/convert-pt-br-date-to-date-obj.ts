
export const convertPtBrDateToDateObj = (date: string): Date | null => {
    if (!date) {
        return null;
    }

    const [day, monthy, year] = date.split('/').map(Number);

    if (isValidDate(day, monthy, year)) {
        return new Date(day, monthy - 1, year);
    }
    return null;
}

const isValidDate = (day: number, monthy: number, year: number): boolean => {
    const date = new Date(year, monthy - 1, day);

    return (
        date.getDate() === day &&
        date.getMonth() === monthy - 1 &&
        date.getFullYear() === year
    );
}