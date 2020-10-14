import html2canvas from 'html2canvas';

const imageSizes = [
  { value: 0.17 }, // 32px - favicon.ico
  { value: 0.67 }, // 128px - chrome web store icon & small windows 8 star screen icon
];

const fileType = {
  ICO: 'image/ico',
  JPEG: 'image/jpeg',
  PNG: 'image/png',
};

const saveAs = (uri: any, filename: any) => {
  const link = document.createElement('a');

  if (typeof link.download === 'string') {
    link.href = uri;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    window.open(uri);
  }
};

const generateImage = (node: any, fileName: any, type: any, scale: any) => {
  return html2canvas(node, {
    backgroundColor: null,
    scale: scale.value,
  }).then((canvas) => {
    saveAs(canvas.toDataURL(type, 1.0), fileName);
  });
};

const saveAsPNG = (node: any, fileName: any = 'favicon.png', type: any = fileType.PNG) => {
  imageSizes.map((scale: any) => {
    generateImage(node, fileName, type, scale);
  });
};

// const saveAsICO = (node: any, fileName: any = 'favicon.ico', type: any = fileType.ICO) => {
//   generateImage(node, fileName, type);
// };

// const savwAsJPEG = (node: any, fileName: any = 'favicon.jpeg', type: any = fileType.JPEG) => {
//   generateImage(node, fileName, type);
// };

export { saveAsPNG };
