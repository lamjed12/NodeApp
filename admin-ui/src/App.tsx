import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { WhiteTestList } from "./whiteTest/WhiteTestList";
import { WhiteTestCreate } from "./whiteTest/WhiteTestCreate";
import { WhiteTestEdit } from "./whiteTest/WhiteTestEdit";
import { WhiteTestShow } from "./whiteTest/WhiteTestShow";
import { CertificationList } from "./certification/CertificationList";
import { CertificationCreate } from "./certification/CertificationCreate";
import { CertificationEdit } from "./certification/CertificationEdit";
import { CertificationShow } from "./certification/CertificationShow";
import { FormationList } from "./formation/FormationList";
import { FormationCreate } from "./formation/FormationCreate";
import { FormationEdit } from "./formation/FormationEdit";
import { FormationShow } from "./formation/FormationShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"My service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="WhiteTest"
          list={WhiteTestList}
          edit={WhiteTestEdit}
          create={WhiteTestCreate}
          show={WhiteTestShow}
        />
        <Resource
          name="Certification"
          list={CertificationList}
          edit={CertificationEdit}
          create={CertificationCreate}
          show={CertificationShow}
        />
        <Resource
          name="Formation"
          list={FormationList}
          edit={FormationEdit}
          create={FormationCreate}
          show={FormationShow}
        />
      </Admin>
    </div>
  );
};

export default App;
