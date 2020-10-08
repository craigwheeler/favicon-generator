class IconsStorage {
  icons: any;
  requestWaitingForIcons: any;

  constructor() {
    this.requestWaitingForIcons = [];
  }

  getIcons(): any {
    return fetch(
      'https://raw.githubusercontent.com/google/material-design-icons/master/font/MaterialIcons-Regular.codepoints',
    )
      .then((response) => response.text())
      .then((data) => data.split('\n'))
      .then((namesAndCodes) =>
        namesAndCodes.map((nameAndCode) => {
          const parts = nameAndCode.split(' ');
          return {
            name: parts[0],
            code: parts[1],
          };
        }),
      )
      .then((icons) => {
        this.icons = icons;
        if (this.requestWaitingForIcons.length > 0) {
          this.requestWaitingForIcons.map((awaitingPromise: any) => {
            return awaitingPromise.resolve(icons);
          });
        }
        return icons;
      });
  }
}

export default IconsStorage;
