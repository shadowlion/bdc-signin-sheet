import type { Timestamp } from "firebase/firestore";

export interface HistoryDocument {
  datetimeEnd: Timestamp;
  datetimeStart: Timestamp;
  name: string;
  uid?: string;
}
