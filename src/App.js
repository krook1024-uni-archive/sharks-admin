import * as React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { fetchUtils } from "ra-core";
import authProvider from "./authProvider";

import { SharklevelList } from "./components/SharklevelList";
import { SharklevelEdit } from "./components/SharklevelEdit";
import { SharklevelCreate } from "./components/SharklevelCreate";
import { SharkList } from "./components/SharkList";
import { SharkEdit } from "./components/SharkEdit";
import { SharkCreate } from "./components/SharkCreate";
import { UserList } from "./components/UserList";
import { UserEdit } from "./components/UserEdit";
import { UserCreate } from "./components/UserCreate";

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
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource
      name='sharklevel'
      list={SharklevelList}
      edit={SharklevelEdit}
      create={SharklevelCreate}
    />
    <Resource
      name='shark'
      list={SharkList}
      edit={SharkEdit}
      create={SharkCreate}
    />
    <Resource name='user' list={UserList} edit={UserEdit} create={UserCreate} />
  </Admin>
);

export default App;
