import { Provider } from "react-redux";
import Body from "./Components/Body";
import Header from "./Components/Header";
import VideoContainer from "./Components/VideoContainer";
import AppStore from "./utils/AppStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Watch from "./Components/Watch";
import SearchData from "./Components/SearchData";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <VideoContainer/>
      },
      {
        path: "watch",
        element: <Watch />
      },
      {
        path: "results",
        element: <SearchData />
      }
    ]
  },
]);

const App = () => {
  return (
    <Provider store={AppStore}>
      <div className="bg-[#212121]">
        <Header />
        <div className="flex">
          <RouterProvider router={appRouter} />
        </div>
      </div>
    </Provider>
  );
}
export default App;