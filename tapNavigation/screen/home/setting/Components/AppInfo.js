import React from "react";
import ContainerItem from "./ContainerItem";
import Item from "./Item";
import Tagob from './assets/!.svg'
import Form from './assets/form-3.svg'
import Paper from './assets/paper-plane.svg'

const AppInfo = () => {
    const we = {
        icon: <Tagob />,
        backColor: "#E0A387",
        title: "Who are we",
        border:false
      };
    const Uses = {
        icon: <Form />,
        backColor: "#5EBB5E",
        title: "Terms of use",
        bottom:true
      };
    const contact = {
        icon: <Paper />,
        backColor: "#904E51",
        title: "Connect with us",
      };
  return <ContainerItem title="Application information">
    <Item {...we} />
    <Item {...Uses} />
    <Item {...contact} />
  </ContainerItem>;
};

export default AppInfo;
