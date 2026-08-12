import AppRoutes from "./routes/AppRoutes";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AuthInitializer from "./routes/AuthInitializer";

const App = () => {
  return <>
   <AuthInitializer />
    <AppRoutes />
    <ToastContainer position="top-left" autoClose={3000} theme="light" />
  </>;
};

export default App;
