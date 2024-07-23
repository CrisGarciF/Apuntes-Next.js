import Users from "@/components/Users";

async function fetchUSers() {
  const res =  await fetch("https://reqres.in/api/users")
  const data = await res.json()
  return data.data
}

const HomePage = async () => {

  const users = await fetchUSers()

  return (
    <Users users={users} />
  )
};

export default HomePage;
