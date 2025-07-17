// App.js
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import ApiData from "./pages/ApiData";
import NotFound from "./pages/NotFound";
import TaskManager from "./components/TaskManager";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<TaskManager />} />
        <Route path="/api" element={<ApiData />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
}

export default App;