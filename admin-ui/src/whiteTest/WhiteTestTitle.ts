import { WhiteTest as TWhiteTest } from "../api/whiteTest/WhiteTest";

export const WHITETEST_TITLE_FIELD = "name";

export const WhiteTestTitle = (record: TWhiteTest): string => {
  return record.name || record.id;
};
