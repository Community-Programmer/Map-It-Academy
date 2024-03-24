
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

export function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
export  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  
  function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = "#";
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }
  
 export  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
        width: 100,
        height: 100,
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }