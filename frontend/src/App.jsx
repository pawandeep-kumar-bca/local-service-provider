import AppRoutes from "./routes/AppRoutes";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return <>
    <AppRoutes />
    <ToastContainer position="top-left" autoClose={3000} theme="light" />
  </>;
};

export default App;
