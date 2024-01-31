const getImageUrl = (url) => {
  const uploadIndex = url.indexOf("/upload/") + "/upload/".length;
  let newUrl = "";

  if (uploadIndex !== -1) {
    const firstPart = url.substring(0, uploadIndex);
    const secondPart = url.substring(uploadIndex-1);

    newUrl = `${firstPart}q_60${secondPart}`;
  }
  return newUrl;
};

console.log({
  newUrl: getImageUrl(
    "https://res.cloudinary.com/mcjosh/image/upload/v1705863661/l4pvvgujxljpnmnllqiq.jpg"
  ),
});
