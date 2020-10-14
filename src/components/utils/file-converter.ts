import html2canvas from 'html2canvas';

const fileType = {
  ICO: 'image/ico',
  PNG: 'image/png',
  JPEG: 'image/jpeg',
  PDF: 'application/pdf',
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

const exportComponent = (node: any, fileName: any, type: any) => {
  return html2canvas(node, {
    backgroundColor: null,
    // scrollY: -window.scrollY,
    // useCORS: true,
  }).then((canvas) => {
    saveAs(canvas.toDataURL(type, 1.0), fileName);
  });
};

const exportComponentAsICO = (node: any, fileName: any = 'favicon.ico', type: any = fileType.ICO) => {
  return exportComponent(node, fileName, type);
};

const exportComponentAsPNG = (node: any, fileName: any = 'favicon.png', type: any = fileType.PNG) => {
  return exportComponent(node, fileName, type);
};

const exportComponentAsJPEG = (node: any, fileName: any = 'favicon.jpeg', type: any = fileType.JPEG) => {
  return exportComponent(node, fileName, type);
};

export { exportComponentAsICO, exportComponentAsJPEG, exportComponentAsPNG };
