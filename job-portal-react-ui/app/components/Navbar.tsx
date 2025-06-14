import { AppBar, Toolbar, Box, Grid, Typography, Button } from "@mui/material";
import Link from "next/link";

const NavBar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          style={{ background: "#ADD8E6", padding: "10px" }}
        >
          <Toolbar variant="dense">
            <Typography
              variant="h4"
              component="div"
              sx={{
                flexGrow: 1,
                fontFamily: "revert",
                fontSize: "500",
                color: "black",
                textAlign: "left",
              }}
            >
              Job Portal
            </Typography>

            <Box sx={{ m: 0.5, mx: "auto", width: 80 }}>
              <Link href="/">
                <Button variant="outlined">Home</Button>
              </Link>
            </Box>
            <Box sx={{ m: 0.5, mx: "auto", width: 100 }}>
              <Link href="/createjobs">
                <Button variant="outlined">Add Job</Button>
              </Link>
            </Box>
            <Box sx={{ m: 0.5, mx: "auto", width: 180 }}>
              <Link href="">
                <Button variant="outlined">Contact Us</Button>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {/* <Grid item xs={12} sx={12} md={12} lg={12}></Grid> */}
    </div>
  );
};

export default NavBar;
