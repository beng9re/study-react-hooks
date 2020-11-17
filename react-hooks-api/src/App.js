import { UsersProvider } from "./componsent/UserContext";
import Users from "./componsent/Users";

function App() {
  
  return (
      <UsersProvider>
        <Users></Users>
      </UsersProvider>
  );
}

export default App;
