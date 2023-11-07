import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import DashboardBasic from "./pages/dashboard-basic";
import InformationBoxPlacedBookmar from "./pages/information-box-placed-bookmar";
import EmptyStateInGameInventory from "./pages/empty-state-in-game-inventory";
import EmptyStateMemoryFragment from "./pages/empty-state-memory-fragment";
import EmptyStatePlacedBookmark from "./pages/empty-state-placed-bookmark";
import PlacedBookmarkOpenWallet from "./pages/placed-bookmark-open-wallet";
import PlacedBookmarkSuccessMinted from "./pages/placed-bookmark-success-minted";
import ProfileBindWalletSuccess from "./pages/profile-bind-wallet-success";
import ProfileBindWalletSuccess1 from "./pages/profile-bind-wallet-success1";
import ProfileChangeProfile from "./pages/profile-change-profile";
import MemoryFragmentConvertSucces from "./pages/memory-fragment-convert-succes";
import MemoryFragmentConvertMement from "./pages/memory-fragment-convert-mement";
import PlacedBookmarkOpenWallet1 from "./pages/placed-bookmark-open-wallet1";
import Logout from "./pages/logout";
import Profile from "./pages/profile";
import InGameInventoryItem from "./pages/in-game-inventory-item";
import MemoryFragment from "./pages/memory-fragment";
import PlacedBookmark from "./pages/placed-bookmark";
import LoginSite from "./pages/login-site";
import LoginSite1 from "./pages/login-site1";
import PrototypeDashboard from "./pages/prototype-dashboard";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/information-boxplaced-bookmark":
        title = "";
        metaDescription = "";
        break;
      case "/empty-stateingame-inventory":
        title = "";
        metaDescription = "";
        break;
      case "/empty-statememory-fragment":
        title = "";
        metaDescription = "";
        break;
      case "/empty-stateplaced-bookmark":
        title = "";
        metaDescription = "";
        break;
      case "/placed-bookmark-open-wallet1":
        title = "";
        metaDescription = "";
        break;
      case "/placed-bookmark-success-minted-memory-fragment":
        title = "";
        metaDescription = "";
        break;
      case "/profile-bind-wallet-success":
        title = "";
        metaDescription = "";
        break;
      case "/profile-bind-wallet-success1":
        title = "";
        metaDescription = "";
        break;
      case "/profile-change-profile":
        title = "";
        metaDescription = "";
        break;
      case "/prototypedashboardconvertmemoryfragment":
        title = "";
        metaDescription = "";
        break;
      case "/prototypedashboardconvertmemoryfragment1":
        title = "";
        metaDescription = "";
        break;
      case "/placed-bookmark-open-wallet":
        title = "";
        metaDescription = "";
        break;
      case "/logout":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
      case "/ingame-inventory":
        title = "";
        metaDescription = "";
        break;
      case "/memory-fragment":
        title = "";
        metaDescription = "";
        break;
      case "/placed-bookmark":
        title = "";
        metaDescription = "";
        break;
      case "/login-site":
        title = "";
        metaDescription = "";
        break;
      case "/login-site1":
        title = "";
        metaDescription = "";
        break;
      case "/dashboardmobile":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<DashboardBasic />} />
      <Route
        path="/information-boxplaced-bookmark"
        element={<InformationBoxPlacedBookmar />}
      />
      <Route
        path="/empty-stateingame-inventory"
        element={<EmptyStateInGameInventory />}
      />
      <Route
        path="/empty-statememory-fragment"
        element={<EmptyStateMemoryFragment />}
      />
      <Route
        path="/empty-stateplaced-bookmark"
        element={<EmptyStatePlacedBookmark />}
      />
      <Route
        path="/placed-bookmark-open-wallet1"
        element={<PlacedBookmarkOpenWallet />}
      />
      <Route
        path="/placed-bookmark-success-minted-memory-fragment"
        element={<PlacedBookmarkSuccessMinted />}
      />
      <Route
        path="/profile-bind-wallet-success"
        element={<ProfileBindWalletSuccess />}
      />
      <Route
        path="/profile-bind-wallet-success1"
        element={<ProfileBindWalletSuccess1 />}
      />
      <Route
        path="/profile-change-profile"
        element={<ProfileChangeProfile />}
      />
      <Route
        path="/prototypedashboardconvertmemoryfragment"
        element={<MemoryFragmentConvertSucces />}
      />
      <Route
        path="/prototypedashboardconvertmemoryfragment1"
        element={<MemoryFragmentConvertMement />}
      />
      <Route
        path="/placed-bookmark-open-wallet"
        element={<PlacedBookmarkOpenWallet1 />}
      />
      <Route path="/logout" element={<Logout />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/ingame-inventory" element={<InGameInventoryItem />} />
      <Route path="/memory-fragment" element={<MemoryFragment />} />
      <Route path="/placed-bookmark" element={<PlacedBookmark />} />
      <Route path="/login-site" element={<LoginSite />} />
      <Route path="/login-site1" element={<LoginSite1 />} />
      <Route path="/dashboardmobile" element={<PrototypeDashboard />} />
    </Routes>
  );
}
export default App;
