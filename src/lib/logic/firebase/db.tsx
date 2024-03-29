import {
  setDoc,
  doc,
} from "firebase/firestore";
import { db } from "./index";


export default async function addData(collection: string, id: string, data: any) {
  let result = null;
  let error = null;

  try {
    result = await setDoc(doc(db, collection, id), data, {
      merge: true,
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
}