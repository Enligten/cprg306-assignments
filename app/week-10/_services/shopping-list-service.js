import { db } from "../../utils/firebase";
import { collection, getDocs, addDoc, deleteDoc, doc, query } from "firebase/firestore";

export async function getItems(userId) {
  const itemsRef = collection(db, "users", userId, "items");
  const q = query(itemsRef);
  const snapshot = await getDocs(q);
  const items = [];
  snapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });
  return items;
}

export async function addItem(userId, item) {
  const itemsRef = collection(db, "users", userId, "items");
  const docRef = await addDoc(itemsRef, item);
  return docRef.id;
}

export async function deleteItem(userId, itemId) {
  const itemRef = doc(db, "users", userId, "items", itemId);
  await deleteDoc(itemRef);
}
