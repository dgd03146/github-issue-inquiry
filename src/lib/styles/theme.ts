type deviceType = "mobile" | "tablet" | "laptop" | "desktop";

const size: { [key in deviceType]: string } = {
  mobile: "543px",
  tablet: "768px",
  laptop: "1011px",
  desktop: "1280px"
};

const device: { [key in deviceType]: string } = {
  mobile: `screen and (max-width: ${size.mobile})`,
  tablet: `screen and (max-width: ${size.tablet})`,
  laptop: `screen and (max-width: ${size.laptop})`,
  desktop: `screen and (max-width: ${size.desktop})`
};

const theme = {
  device
};

export default theme;
