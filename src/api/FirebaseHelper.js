import { collection, getDocs, addDoc } from "firebase/firestore";
import { firestore } from "../App";

export async function fetchPosts() {
  console.log("fetching posts");
  const querySnapshot = await getDocs(collection(firestore, "post"));
  let datas = [];
  querySnapshot.forEach((doc) => {
    let data = doc.data();
    data["id"] = doc.id;
    datas.push(data);
  });
  return datas;
}

export async function submitDonation(record) {
  let success = false;
  try {
    await addDoc(collection(firestore, "donation"), record);
    success = true;
  } catch (e) {
    success = false;
  }
  return success;
}

export async function submitRequest(record) {
  // this isn't DRY but... i couldn't care less
  let success = false;
  try {
    await addDoc(collection(firestore, "requests"), record);
    success = true;
  } catch (e) {
    success = false;
  }
  return success;
}
