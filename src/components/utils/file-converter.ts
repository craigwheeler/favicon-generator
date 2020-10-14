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
    // scale: 0.17, // 32px - favicon.ico
    scale: 0.67, // 128px - chrome web store icon & small windows 8 star screen icon
  }).then((canvas) => {
    saveAs(canvas.toDataURL(type, 1.0), fileName);
  });
};

const exportAsICO = (node: any, fileName: any = 'favicon.ico', type: any = fileType.ICO) => {
  return exportComponent(node, fileName, type);
};

const exportAsPNG = (node: any, fileName: any = 'favicon.png', type: any = fileType.PNG) => {
  return exportComponent(node, fileName, type);
};

const exportAsJPEG = (node: any, fileName: any = 'favicon.jpeg', type: any = fileType.JPEG) => {
  return exportComponent(node, fileName, type);
};

export { exportAsICO, exportAsJPEG, exportAsPNG };
