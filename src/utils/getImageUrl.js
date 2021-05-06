async function getImageUrl(file) {
  try {
    if (file?.type?.includes("image")) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "mhxqfgbm");

      const options = {
        method: "POST",
        body: formData,
      };

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dalnxbdem/image/upload",
        options
      );

      const jsonData = await res.json();
      const url = jsonData.url;
      return url;
    }
    return false;
  } catch (error) {
    return "error";
  }
}

export default getImageUrl;
