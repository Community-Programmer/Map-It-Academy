import React, { useEffect, useState } from "react";
import "./Profile.scss";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../../store/userSlice";
import { CustomTabPanel, a11yProps, stringAvatar } from "../../helpers/helpers";

const Profile = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const userId = useSelector((state) => state.auth.userId);
  const userInfo= useSelector((state) => state.userData);

  useEffect(() => {
    dispatch(userData(userId));
  }, [userId]);


  return (
    <>
      <div className="profile-section">
        <h1>My Profile</h1>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              centered
            >
              <Tab
                icon={<Person2OutlinedIcon />}
                iconPosition="start"
                label="Profile"
                {...a11yProps(0)}
              />
              <Tab
                icon={<SmartDisplayOutlinedIcon />}
                iconPosition="start"
                label="Courses"
                {...a11yProps(1)}
              />
              <Tab
                icon={<LocalLibraryOutlinedIcon />}
                iconPosition="start"
                label="Programs"
                {...a11yProps(2)}
              />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <div className="user__info__section">
              <Avatar {...stringAvatar("Sarthak Patel")} />
              <div className="user__info">
                {userInfo && 
                <>
                <h3>Username : {userInfo.username}</h3>
                <h3>Email : {userInfo.email}</h3>
                <h3>Joined At : {userInfo.joinedAt}</h3>
                <h3>Courses Enrolled: 0</h3>
                <h3>Programs Enrolled: 0</h3>
                </>
            }
              </div>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <h2>You are not enrolled to any course till now</h2>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <h2>You are not enrolled to any programs till now</h2>
          </CustomTabPanel>
        </Box>
      </div>
    </>
  );
};

export default Profile;
