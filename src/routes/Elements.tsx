import React, { Suspense, lazy, ElementType } from "react";
import LayoutContainer from "../components/organisms/Layout/Layout";
// ----------------------------------------------------------------------
const Loadable =
  (Component: ElementType) => (props: React.ComponentProps<"div">) => {
    return (
      <Suspense fallback={<p>loading...</p>}>
        <LayoutContainer>
          <Component {...props} />
        </LayoutContainer>
      </Suspense>
    );
  };

export const HomePage = Loadable(lazy(() => import("../pages/Home")));
export const ActivitiesPage = Loadable(
  lazy(() => import("../pages/Activities"))
);
export const ExchangePage = Loadable(lazy(() => import("../pages/Exchange")));
export const NotificationsPage = Loadable(
  lazy(() => import("../pages/Notifications"))
);
export const PricesPage = Loadable(lazy(() => import("../pages/Prices")));
export const PromotionsPage = Loadable(
  lazy(() => import("../pages/Promotions"))
);
export const SettingsPage = Loadable(lazy(() => import("../pages/Settings")));
export const WalletsPage = Loadable(lazy(() => import("../pages/Wallets")));
