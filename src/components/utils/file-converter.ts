import html2canvas from 'html2canvas';
import JSZip from 'jszip';
import JSZipUtils from 'jszip-utils';
import { saveAs } from 'file-saver';

const imageSizes = [
  { value: 0.17 }, // 32px - favicon.ico
  { value: 0.67 }, // 128px - chrome web store icon & small windows 8 star screen icon
  { value: 0.8 }, // 152px - ipad touch icon
  { value: 0.87 }, // 167px - ipad retina touch icon
  { value: 0.94 }, // 180px - iphone retina
  { value: 0.87 }, // 192px - google developer web app manifest recommendation
  { value: 1 }, // 196px - chrome for android home screen icon
];

const generateImage = (node: any, type: any, scale: any) => {
  return html2canvas(node, {
    backgroundColor: null,
    scale: scale.value,
  }).then((canvas) => {
    return canvas.toDataURL(type, 1.0);
  });
};

const generateZIP = (dataUrlArray: any) => {
  const zip = new JSZip();
  const zipFilename = 'favicon-generator-io.zip';
  let count = 0;

  dataUrlArray.forEach((url: any, i: any) => {
    let dataUrl = dataUrlArray[i];
    dataUrl = dataUrl.replace('data:image/png;base64,', '');

    // load an image and add it to the zip file
    JSZipUtils.getBinaryContent(url, () => {
      zip.file(`favicon-${count}.png`, dataUrl, { base64: true });
      count++;
      if (count === dataUrlArray.length) {
        zip.generateAsync({ type: 'blob' }).then((content) => {
          saveAs(content, zipFilename);
        });
      }
    });
  });
};

const createFaviconPkg = (node: any, type = 'image/png') => {
  const imgArr = imageSizes.map((scale: any) => {
    return generateImage(node, type, scale).then((item) => {
      return item;
    });
  });

  Promise.all(imgArr).then((dataUrlArray) => {
    generateZIP(dataUrlArray);
  });
};

export { createFaviconPkg };
