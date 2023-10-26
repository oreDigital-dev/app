import { default as dayjs } from "dayjs";

export const format = {
  todayDate: () => dayjs().format("YYYY-MM-DD"),
  humanDate: (value: string | Date) => dayjs(value).format("MMMM D, YYYY"),
  humanDateExcel: (value: string | Date) => dayjs(value).format("MMMM D YYYY"),
  humanDateTime: (value: string | Date) =>
    dayjs(value).format("MMMM D, YYYY HH:mm"),
  humanDateTimeExcel: (value: string | Date) =>
    dayjs(value).format("MMMM D YYYY HH:mm"),
  dateMonthYear: (value: string | Date) => dayjs(value).format("MM / YYYY"),
  exportHumanDateTime: (value: string | Date) =>
    dayjs(value).format("YYYY-MM-DD HH:mm"),
  exportDateMonthYear: (value: string | Date) => dayjs(value).format("MM/YYYY"),
  currenyWithAmount: (value: number) =>
    value.toLocaleString("RWF", {
      style: "currency",
      currency: "RWF",
    }),
  capitalizeName: (value: string) => {
    const result: string[] = [];
    value
      .split(" ")
      .forEach((element) =>
        result.push(element.charAt(0).toUpperCase() + element.slice(1))
      );
    return result.join(" ");
  },
};
