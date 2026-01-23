import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ padding: "24px", fontFamily: "system-ui" }}>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li>
          <Link href="/week-2">Go to Week 2 →</Link>
        </li>
      </ul>
    </main>
  );
}
