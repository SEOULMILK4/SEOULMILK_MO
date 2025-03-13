import { RouterProvider } from "react-router-dom";
import { router } from "./routers";
import UserSession from "./UserSession";
// import DeviceRedirect from "./DeviceRedirect";

function App() {
  return (
    <>
      {/* <DeviceRedirect /> */}
      <UserSession />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
