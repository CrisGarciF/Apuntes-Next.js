import Link from "next/link";

const IndexPage = () => {
  return (
    <div>
      <Link href="/login">Login</Link>

      <h1>Info</h1>
      <p>Login en next.js con jsonwebtoken</p>
    </div>
  )
};

export default IndexPage;

