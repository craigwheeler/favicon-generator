import html2canvas from 'html2canvas';

const fileType = {
  ICO: 'image/ico',
  PNG: 'image/png',
  JPEG: 'image/jpeg',
  PDF: 'application/pdf',
};

const saveAs = (uri, filename) => {
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

const exportComponent = (node, fileName, type) => {
  return html2canvas(node, {
    backgroundColor: null,
    // scrollY: -window.scrollY,
    // useCORS: true,
  }).then((canvas) => {
    saveAs(canvas.toDataURL(type, 1.0), fileName);
  });
};

const exportComponentAsICO = (node, fileName = 'favicon.ico', type = fileType.ICO) => {
  return exportComponent(node, fileName, type);
};

const exportComponentAsPNG = (node, fileName = 'favicon.png', type = fileType.PNG) => {
  return exportComponent(node, fileName, type);
};

const exportComponentAsJPEG = (node, fileName = 'favicon.jpeg', type = fileType.JPEG) => {
  return exportComponent(node, fileName, type);
};

export { exportComponentAsICO, exportComponentAsJPEG, exportComponentAsPNG };
