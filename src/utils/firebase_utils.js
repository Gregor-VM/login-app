import { db } from "../firebase";

const pageSize = 10;

async function getUserNameAndPhotoById(id) {
  const res = await db.collection("users").doc(id).get();
  const user = res.data();
  return { name: user.name, photoURL: user.photoURL };
}

const firebaseUtils = {
  firstArticles: async function (id = false) {
    let ref = {};
    if (id)
      ref = db
        .collection("articles")
        .where("user_id", "==", id)
        .orderBy("date", "desc");
    if (!id) ref = db.collection("articles").orderBy("date", "desc");

    const data = await ref.limit(pageSize).get();
    let articles = [];
    let lastKey = "";

    for (const item of data.docs) {
      const itemData = item.data();
      const itemId = item.id;
      const { name, photoURL } = await getUserNameAndPhotoById(
        itemData.user_id
      );
      articles.push({ ...itemData, itemId, name, photoURL });
      lastKey = item;
    }

    return { articles, lastKey };
  },
  nextArticles: async function (key, id = false) {
    let ref = {};
    if (id)
      ref = db
        .collection("articles")
        .where("user_id", "==", id)
        .orderBy("date", "desc");
    if (!id) ref = db.collection("articles").orderBy("date", "desc");

    const data = await ref.startAfter(key).limit(pageSize).get();
    let articles = [];
    let lastKey = "";
    for (const item of data.docs) {
      const itemData = item.data();
      const itemId = item.id;
      const { name, photoURL } = await getUserNameAndPhotoById(
        itemData.user_id
      );
      articles.push({ ...itemData, itemId, name, photoURL });
      lastKey = item;
    }
    return { articles, lastKey };
  },
  addArticle: async function (user, textValue) {
    const dt = new Date();
    const article = {
      user_id: user.id,
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
  getUserInfoById: async (id) => {
    const res = await db.collection("users").doc(id).get();
    const user = res.data();
    return user;
  },
};

export default firebaseUtils;
