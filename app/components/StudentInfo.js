import Link from "next/link";

export default function StudentInfo() {
  return (
    <section>
      <p>Name: Shikun</p>
      <p>
        GitHub:{" "}
        <Link href="https://github.com/SnufkinZ/cprg306-assignments"
          style={{ textDecoration: "underline" }}
        >
          SnufkinZ/cprg306-assignments
        </Link>
      </p>
    </section>
  );
}
