import { db } from "../firebase";

const pageSize = 10;

const firebaseUtils = {
  firstArticles: async function () {
    const ref = db.collection("articles").orderBy("date", "desc");
    const data = await ref.limit(pageSize).get();
    let articles = [];
    let lastKey = "";
    data.docs.forEach((item) => {
      const itemData = item.data();
      const itemId = item.id;
      articles.push({ ...itemData, itemId });
      lastKey = item;
    });
    return { articles, lastKey };
  },
  nextArticles: async function (key) {
    const ref = db.collection("articles").orderBy("date", "desc");
    const data = await ref.startAfter(key).limit(pageSize).get();
    let articles = [];
    let lastKey = "";
    data.docs.forEach((item) => {
      const itemData = item.data();
      const itemId = item.id;
      articles.push({ ...itemData, itemId });
      lastKey = item;
    });
    return { articles, lastKey };
  },
};

export default firebaseUtils;
