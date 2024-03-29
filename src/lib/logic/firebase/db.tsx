import {
  getDoc,
  setDoc,
  doc,
  Firestore,
  Timestamp
} from "firebase/firestore";
import { ResultWithData } from "../../types";


export class Database {
  constructor(
    private readonly db: Firestore,
    private readonly _collection: string
  ) {}

  upsert = async <T,>(data: T, ...path: string[]): ResultWithData<null> => {
    try {
      const _doc = await getDoc(doc(this.db, this._collection, ...path));

      const timeNow = Timestamp.fromDate(new Date());

      const timestamp = _doc.exists()
        ? { updatedAt: timeNow }
        : { createdAt: timeNow };

      await setDoc(
        doc(this.db, this._collection, ...path),
        { ...data, ...timestamp },
        { merge: true }
      );

      return null;
    } catch (e) {
      return { error: "an error occurred!" };
    }
  };
}