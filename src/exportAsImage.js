import html2canvas from "html2canvas";

const exportAsImage = async (element) => {
  const canvas = await html2canvas(element);
  return canvas.toDataURL("image/png", 1.0);
};

export default exportAsImage;
