import Headers from "../Navbar";

export default async function CommonLayout({ children }) {
  return (
    <>
      {/* headers section */}
      <Headers />
      <main>{children}</main>
    </>
  );
}
