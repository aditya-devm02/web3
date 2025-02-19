import { SessionProvider, useSession } from "next-auth/react";
import { CartProvider } from "../context/CartContext";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <CartProvider>
        <Auth>
          <Component {...pageProps} />
        </Auth>
      </CartProvider>
    </SessionProvider>
  );
}

function Auth({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    router.push("/auth/signin");
    return null;
  }

  return children;
}

function LoginButton() {
  return (
    <button onClick={() => signIn("google")}>
      Sign in with Google
    </button>
  );
}

export default MyApp; 