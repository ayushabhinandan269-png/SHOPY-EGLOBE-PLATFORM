import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import { router } from "./routes/router";

const App = () => {
  return (
    <Suspense fallback={<h3>Loading page...</h3>}>
  <RouterProvider router={router} />
       </Suspense>

  );
};

export default App;

