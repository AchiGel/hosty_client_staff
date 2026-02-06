import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.tsx";
import MyTasks from "./pages/MyTasks.tsx";
import Settings from "./pages/Settings.tsx";
import App from "./App.tsx";
import Team from "./pages/Team.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/my-tasks" element={<MyTasks />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/team" element={<Team />} />
    </Route>,
  ),
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
