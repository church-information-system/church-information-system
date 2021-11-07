import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../App";

export async function fetchPosts() {
  console.log("fetching posts");
  const querySnapshot = await getDocs(collection(firestore, "post"));
  let datas = [];
  querySnapshot.forEach((doc) => {
    let data = doc.data();
    data["id"] = doc.id;
    datas.push(data);
    console.log(data);
  });
  return datas;
}
