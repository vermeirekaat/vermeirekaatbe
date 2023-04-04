export const checkScreenWidth = (object) => {
  if (typeof window !== "undefined") {
    const screenWidth = window.screen.width;
    let newAnimations;

    if (screenWidth <= 640) {
      newAnimations = object.mobile;
    }
    if (screenWidth >= 640) {
      newAnimations = object.desktop;
    }
    return newAnimations;
  }
};
