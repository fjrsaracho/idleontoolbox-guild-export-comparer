import './assets/style.css';
import Header from "./components/Header";
import Index from "./layout/comparer";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="app">
        <Header />
        <Index />
        <ToastContainer
            position="top-right"
            autoClose={8000}
            newestOnTop={false}
            closeOnClick
            pauseOnFocusLoss
            pauseOnHover
            theme="light"
        />
    </div>
  );
}

export default App;
