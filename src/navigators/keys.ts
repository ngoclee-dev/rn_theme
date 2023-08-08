import React from "react";
import {Download, Explore, Home, Profile, Videos} from "~screens/Tabs";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {faCompass, faDownload, faHouse, faUser, faVideo} from "@fortawesome/pro-regular-svg-icons";


export const NavigationKeys = {
  Home: "Home",
  Videos: "Videos",
  Download: "Download",
  Profile: "Profile",
  Explore: "Explore"
}

export interface TabType {
  id: number;
  title: string;
  component: () => React.JSX.Element;
  icon: IconProp
}

export const AppArrayTabs: TabType[] = [
  {
    id: 0,
    title: NavigationKeys.Home,
    component: Home,
    icon: faHouse
  },
  {
    id: 1,
    title: NavigationKeys.Explore,
    component: Explore,
    icon: faCompass
  },
  {
    id: 2,
    title: NavigationKeys.Videos,
    component: Videos,
    icon: faVideo
  },
  {
    id: 3,
    title: NavigationKeys.Download,
    component: Download,
    icon: faDownload
  },
  {
    id: 4,
    title: NavigationKeys.Profile,
    component: Profile,
    icon: faUser
  },
]
