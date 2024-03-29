import { Timestamp } from "firebase/firestore";
import { Database } from "../firebase";
import { db } from "../firebase";

type RegisterPayload = {
  name: string;
  telephone: string;
  email: string;
  path: string;
};
export class Form {
  private static readonly db = new Database(db, "training-registration");

  static async register(payload: RegisterPayload) {
    return await Form.db.upsert({
      ...payload,
      createdAt: Timestamp.fromDate(new Date()),
    });
  }
}
