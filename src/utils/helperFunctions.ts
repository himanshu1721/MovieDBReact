import Strings from "../constants/Strings";
import { Colors } from "../themes";

export const getYear = (date: string = Strings.space): string => {
  return date.substring(0, 4);
};

export const getValidNumber = (vote_average: number) => {
  const x = Math.round(vote_average * 10) / 10;
  return x * 10;
};

export const getGenreList = (
  array: any[] = [{ id: 1, name: Strings.streaming }]
): string => {
  return array.map((x) => x.name).join(Strings.commaWithLeadingSpace);
};

export const returnDateMMDDYYYY = (date: string = Strings.space): string => {
  return `${date.substring(5, 7)}/${date.substring(8, 10)}/${date.substring(
    0,
    4
  )}`;
};

export const convertMinsToHrsMins = (mins: number = 0): string => {
  const h = Math.floor(mins / 60);
  const m = Math.round(mins % 60);
  const a = h < 10 ? +h : h;
  const b = m < 10 ? Strings.zero + m : m;
  return `${a}${Strings.h} ${b}${Strings.m}`;
};

const returnMonth = (month: string): string => {
  switch (month) {
    case Strings.one:
      return Strings.january;
    case Strings.two:
      return Strings.february;
    case Strings.three:
      return Strings.march;
    case Strings.four:
      return Strings.april;
    case Strings.five:
      return Strings.may;
    case Strings.six:
      return Strings.june;
    case Strings.seven:
      return Strings.july;
    case Strings.eight:
      return Strings.august;
    case Strings.nine:
      return Strings.september;
    case Strings.ten:
      return Strings.october;
    case Strings.eleven:
      return Strings.november;
    case Strings.twelve:
      return Strings.december;
    default:
      return Strings.nil;
  }
};

export const refactorDate = (date: string = " "): string => {
  const month = returnMonth(date.substring(5, 7));
  const newDate = `${month} ${date.substring(8, 10)}, ${date.substring(0, 4)}`;
  return newDate;
};

export const returnColor = (percent: number) => {
  if (percent >= 8) {
    return {
      colour: Colors.green,
      shadow: Colors.darkGreen,
    };
  } else if (percent >= 6) {
    return {
      colour: Colors.yellow,
      shadow: Colors.darkYellow,
    };
  } else if (percent >= 4) {
    return {
      colour: Colors.orange,
      shadow: Colors.darkOrange,
    };
  } else {
    return {
      colour: Colors.red,
      shadow: Colors.darkRed,
    };
  }
};
