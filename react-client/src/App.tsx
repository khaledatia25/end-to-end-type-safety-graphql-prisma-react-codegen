import UserDisplay from "./componenets/UserDisplay";
import { useQuery } from "urql";
import { GetUsersDocument } from "./graphql/generated";

function App() {
  const [results] = useQuery({ query: GetUsersDocument });

  return (
    <div className="bg-zinc-800 flex-col h-screen w-full flex items-cneter justify-center items-center">
      {results.data?.users.map((user, i) => (
        <UserDisplay user={user} key={i} />
      ))}
    </div>
  );
}

export default App;
