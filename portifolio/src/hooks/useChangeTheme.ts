import { themes, propertiesArray } from "../mini_db/db";

export const useChangeTheme = () => {
  const changeTheme = (themeSelected: string) => {
    const root: any = document.querySelector(":root");

    if (themeSelected == "lightTheme") {
      propertiesArray.map((item, index) => {
        root!.style.setProperty(item, themes.lightTheme[index]);
      });
    } else if (themeSelected == "darkTheme") {
      propertiesArray.map((item, index) => {
        root!.style.setProperty(item, themes.darkTheme[index]);
      });
    } else if (themeSelected == "blueTheme") {
      propertiesArray.map((item, index) => {
        root!.style.setProperty(item, themes.blueTheme[index]);
      });
    } else if (themeSelected == "greenTheme") {
      propertiesArray.map((item, index) => {
        root!.style.setProperty(item, themes.greenTheme[index]);
      });
    } else if (themeSelected == "yellowTheme") {
      propertiesArray.map((item, index) => {
        root!.style.setProperty(item, themes.yellowTheme[index]);
      });
    } else if (themeSelected == "redTheme") {
      propertiesArray.map((item, index) => {
        root!.style.setProperty(item, themes.redTheme[index]);
      });
    } else if (themeSelected == "purpleTheme") {
      propertiesArray.map((item, index) => {
        root!.style.setProperty(item, themes.purpleTheme[index]);
      });
    } else {
      return;
    }
  };
  return { changeTheme };
};
