import type { MenuProps } from "antd";
type MenuItem = Required<MenuProps>["items"][number];

export const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon: React.ReactNode
): MenuItem => {
  return {
    key,
    icon,
    label,
  } as MenuItem;
};

export const getPathname = (path: string) => {
  const pathname = path.split("/");
  return `/${pathname[1]}`;
};
