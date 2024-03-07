import { useState } from "react";
import ContainerItem from "./ContainerItem";
import Switcher from "./Switcher";
import Notification from "./assets/notification.svg";
import Lang from "./assets/language-2.svg";
import Item from "./Item";

const BasicInfo = () => {
  const [notification, setNottifications] = useState(true);
  const switchData = {
    border: false,
    Icon: <Notification />,
    backColor: "#FD5151",
    state: notification,
    setState: setNottifications,
    title: "Notifications",
  };
  const langData = {
    icon: <Lang />,
    backColor: "#6965C4",
    title: "Notifications",
  };
  return (
    <ContainerItem title="Basic information">
      <Switcher {...switchData} />
      <Item {...langData} />
    </ContainerItem>
  );
};

export default BasicInfo;
