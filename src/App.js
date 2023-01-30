import { Box, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { ThemeProvider } from "@mui/material/styles";
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Outlet,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import AirCanvas from "./components/airCanvas";
import DashboardLayout from "./components/DashboardLayout";
import HomePage from "./components/DashboardLayout/homepage";
import { theme } from "./components/Styles";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const SnackbarContext = createContext({});

const SidebarLayout = () => (
  <>
    <DashboardLayout />
    <Outlet />
  </>
);

function App() {
   return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Box>
          <Router>
              <div>
                <Box
                  component="main"
                  sx={{ display: "flex", padding: "48px 24px 24px" }}
                >
                  <Routes>
                    <Route element={<SidebarLayout />}>
                    <Route
                        path="/"
                        element={<HomePage />}/>
                    <Route
                        path="/air-canvas"
                        element={<AirCanvas />}/>
                    </Route>
                  </Routes>
                </Box>
              </div>
          </Router>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
