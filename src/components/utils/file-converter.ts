import html2canvas from 'html2canvas';

const fileType = {
  ICO: 'image/ico',
  JPEG: 'image/jpeg',
  PNG: 'image/png',
};

const imageSizes = [
  { value: 0.17 }, // 32px - favicon.ico
  { value: 0.67 }, // 128px - chrome web store icon & small windows 8 star screen icon
  { value: 0.8 }, // 152px - ipad touch icon
  { value: 0.87 }, // 167px - ipad retina touch icon
  { value: 0.94 }, // 180px - iphone retina
  { value: 0.87 }, // 192px - google developer web app manifest recommendation
  { value: 1 }, // 196px - chrome for android home screen icon
];

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

const generateImage = (node: any, type: any, scale: any) => {
  return html2canvas(node, {
    backgroundColor: null,
    scale: scale.value,
  }).then((canvas) => {
    return canvas.toDataURL(type, 1.0);
  });
};

const saveAsPNG = (node: any, fileName: any = 'favicon.png', type: any = fileType.PNG) => {
  const imgArr = imageSizes.map((scale: any) => {
    return generateImage(node, type, scale).then((item) => {
      return item;
    });
  });

  Promise.all(imgArr).then((images) => {
    console.log('images: ', images);
  });
};

// const saveAsICO = (node: any, fileName: any = 'favicon.ico', type: any = fileType.ICO) => {
//   generateImage(node, fileName, type);
// };

// const saveAsJPEG = (node: any, fileName: any = 'favicon.jpeg', type: any = fileType.JPEG) => {
//   generateImage(node, fileName, type);
// };

export { saveAsPNG };
