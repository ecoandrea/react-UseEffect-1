import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getData = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return data;
};

const App = () => {
  const result = useQuery(["users"], getData, { retry: false });

  console.log(result);

  if (result.isLoading) return <p>Loading Data ...</p>;

  if (result.isError) return <p> Error al cargar los datos ...</p>;

  return (
    <>
      <h1>UseEffect</h1>
      {result.data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </>
  );
};
export default App;
