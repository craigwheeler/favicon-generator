import html2canvas from 'html2canvas';
import JSZip from 'jszip';
import JSZipUtils from 'jszip-utils';
import { saveAs } from 'file-saver';

const fileTypes = [
  'favicon-36x36',
  'favicon-48x48',
  'favicon-57x57',
  'favicon-60x60',
  'favicon-72x72',
  'favicon-76x76',
  'favicon-96x96',
  'favicon-114x114',
  'favicon-120x120',
  'favicon-144x144',
  'favicon-152x152',
  'favicon-180x180',
  'favicon-192x192',
];

const calcScale = (px: number) => {
  return px / 192;
};

const generateImage = (node: any, type: any, scale: any) => {
  return html2canvas(node, {
    backgroundColor: null,
    scale: scale,
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
      zip.file(`${fileTypes[count]}.png`, dataUrl, { base64: true });
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
  const imgArr = fileTypes.map((file: any) => {
    const str = file.split('x').pop();
    const scale = calcScale(Number(str));
    return generateImage(node, type, scale).then((item) => {
      return item;
    });
  });

  Promise.all(imgArr).then((dataUrlArray) => {
    generateZIP(dataUrlArray);
  });
};

export { createFaviconPkg };
