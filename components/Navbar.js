// components/Navbar.js
import { useSession, signIn, signOut } from "next-auth/react";
import { useOkto } from "@okto_web3/react-sdk";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();
  const { connect, disconnect, userWallet } = useOkto();

  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/cart">Cart</Link>
      {session ? (
        <>
          <span>Welcome, {session.user.name}</span>
          <button onClick={() => signOut()}>Sign Out</button>
          {userWallet ? (
            <button onClick={() => disconnect()}>Disconnect Wallet</button>
          ) : (
            <button onClick={() => connect()}>Connect Wallet</button>
          )}
        </>
      ) : (
        <button onClick={() => signIn("google")}>Sign In</button>
      )}
    </nav>
  );
};

export default Navbar;
