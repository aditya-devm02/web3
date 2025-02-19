import { SessionProvider, useSession } from "next-auth/react";
import { CartProvider } from "../context/CartContext";

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

  if (status === "loading") {
    return <div>Loading...</div>; // Show a loading state while checking session
  }

  if (!session) {
    return <div>Please sign in to access the application.</div>; // Redirect or show a message
  }

  return children;
}

export default MyApp; 