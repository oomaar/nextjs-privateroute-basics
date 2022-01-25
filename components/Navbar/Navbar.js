import NextLink from "next/link";
import { Nav } from "./styledNavbar";
import { signIn, signOut, useSession } from "next-auth/react";

export const Navbar = () => {
  const { data: session } = useSession();

  const handleSignin = (e) => {
    e.preventDefault();
    signIn();
  };

  const handleSignout = (e) => {
    e.preventDefault();
    signOut();
  };

  const sessionCheck = session ? (
    <>
      <li>
        <NextLink href="/api/auth/sinout">
          <a onClick={handleSignout}>Sign Out</a>
        </NextLink>
      </li>
    </>
  ) : (
    <li>
      <NextLink href="/api/auth/signin">
        <a onClick={handleSignin}>Login</a>
      </NextLink>
    </li>
  );

  return (
    <Nav>
      <ul>
        <li>
          <NextLink href="/">
            <a>Home</a>
          </NextLink>
        </li>
        <li>
          <NextLink href="/dashboard">
            <a>Dashboard</a>
          </NextLink>
        </li>
        {sessionCheck}
      </ul>
    </Nav>
  );
};
