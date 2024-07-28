import { useState } from "react";

export default function Users() {
  const [usersList, setUsersList] = useState([]);
  const [loading, setLoading] = useState(false);
  async function fetchAllUsers() {
    try {
      const apiResponse = await fetch("https://dummyjson.com/users");
      const result = await apiResponse.json();
      console.log(result);
      if (result?.users) {
        setUsersList(result?.users);
        setLoading(false);
      } else {
        setUsersList([]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }
  //   useEffect(() => {
  //     fetchAllUsers();
  //   }, []);

  //   function handleFetchAllUsers() {
  //     fetchAllUsers();
  //   }

  if (loading) {
    return <h1>Fetching users... Please wait!</h1>;
  }
  return (
    <div>
      <h1>All Users List</h1>
      <button onClick={fetchAllUsers}>Fetch all users</button>
      <ul>
        {usersList && usersList.length > 0 ? (
          usersList.map((user) => (
            <li key={user.id}>
              <p>
                {user?.firstName} {user?.lastName}
              </p>
            </li>
          ))
        ) : (
          <h4>No user is found</h4>
        )}
      </ul>
    </div>
  );
}
