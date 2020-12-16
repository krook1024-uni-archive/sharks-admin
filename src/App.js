import * as React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { fetchUtils } from "ra-core";
import authProvider from "./authProvider";
import { Route } from "react-router-dom";

import UserIcon from "@material-ui/icons/Group";
import PetsIcon from "@material-ui/icons/Pets";
import FilterNoneIcon from "@material-ui/icons/FilterNone";

import { SharklevelList } from "./components/sharklevel/SharklevelList";
import { SharklevelEdit } from "./components/sharklevel/SharklevelEdit";
import { SharklevelCreate } from "./components/sharklevel/SharklevelCreate";
import { SharkList } from "./components/shark/SharkList";
import { SharkEdit } from "./components/shark/SharkEdit";
import { SharkCreate } from "./components/shark/SharkCreate";
import { UserList } from "./components/user/UserList";
import { UserEdit } from "./components/user/UserEdit";
import { UserCreate } from "./components/user/UserCreate";
import { Signup } from "./components/signup/Signup";

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const token = localStorage.getItem("auth");
  options.headers.set("Authorization", `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = jsonServerProvider("http://localhost:8086", httpClient);

const App = () => (
  <Admin
    dataProvider={dataProvider}
    authProvider={authProvider}
    customRoutes={[<Route exact path='/signup' component={Signup} noLayout />]}
  >
    <Resource
      name='sharklevel'
      list={SharklevelList}
      edit={SharklevelEdit}
      create={SharklevelCreate}
      icon={FilterNoneIcon}
    />
    <Resource
      name='shark'
      list={SharkList}
      edit={SharkEdit}
      create={SharkCreate}
      icon={PetsIcon}
    />
    <Resource
      name='user'
      list={UserList}
      edit={UserEdit}
      create={UserCreate}
      icon={UserIcon}
    />
  </Admin>
);

export default App;
