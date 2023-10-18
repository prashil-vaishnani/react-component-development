import { useRoutes } from "react-router-dom";

import {
  HomePage,
  ActivitiesPage,
  ExchangePage,
  NotificationsPage,
  PricesPage,
  PromotionsPage,
  SettingsPage,
  WalletsPage,
} from "./Elements";
import { PAGE_PATHS } from "./path";

export const Router: React.FC = () => {
  return useRoutes([
    {
      path: PAGE_PATHS.Home,
      element: <HomePage />,
    },
    {
      path: PAGE_PATHS.Activities,
      element: <ActivitiesPage />,
    },
    {
      path: PAGE_PATHS.Exchange,
      element: <ExchangePage />,
    },
    {
      path: PAGE_PATHS.Notifications,
      element: <NotificationsPage />,
    },
    {
      path: PAGE_PATHS.Prices,
      element: <PricesPage />,
    },
    {
      path: PAGE_PATHS.Promotions,
      element: <PromotionsPage />,
    },
    {
      path: PAGE_PATHS.Settings,
      element: <SettingsPage />,
    },
    {
      path: PAGE_PATHS.Wallets,
      element: <WalletsPage />,
    },
  ]);
};

export default Router;
