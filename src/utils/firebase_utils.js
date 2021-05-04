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
  addArticle: async function (user, textValue) {
    const dt = new Date();
    const article = {
      name: user.name,
      user_id: user.id,
      photoURL: user?.photoURL || null,
      text: textValue,
      date: `${dt.getUTCDay()}/${dt.getUTCMonth()}/${dt.getUTCFullYear()} at ${dt.getUTCHours()}:${dt.getUTCMinutes()}:${dt.getUTCSeconds()}`,
    };

    try {
      const res = await db.collection("articles").add(article);
      const msg = { msg: "Articulo enviado!", error: false };
      const finalArticle = { ...article, itemId: res.id };
      return { msg, finalArticle };
    } catch (error) {
      const msg = { msg: error.message, error: true };
      return { msg };
    }
  },
  updateArticle: async function (doc, textUpdated) {
    const finalArticle = {
      ...doc,
      text: textUpdated,
      date: !doc.date.includes("(editado") ? doc.date + " (editado)" : doc.date,
    };
    try {
      await db.collection("articles").doc(doc.itemId).update(finalArticle);
      const msg = { msg: "Articulo actualizado!", error: false };
      return { msg, finalArticle };
    } catch (error) {
      const msg = { msg: error.message, error: true };
      return { msg };
    }
  },
};

export default firebaseUtils;
