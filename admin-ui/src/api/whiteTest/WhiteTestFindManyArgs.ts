import { WhiteTestWhereInput } from "./WhiteTestWhereInput";
import { WhiteTestOrderByInput } from "./WhiteTestOrderByInput";

export type WhiteTestFindManyArgs = {
  where?: WhiteTestWhereInput;
  orderBy?: Array<WhiteTestOrderByInput>;
  skip?: number;
  take?: number;
};
