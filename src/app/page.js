import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link className="link" href={{ pathname: "/questions" }}>
        Go to Questions Page
      </Link>
    </main>
  );
}
