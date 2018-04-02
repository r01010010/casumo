const deviceWidth = window.innerWidth;

export function getWidth() {
  return deviceWidth;
}

export function isMobileSize() {
  return (deviceWidth < 500);
}

export default {
  getWidth,
  isMobileSize
}
