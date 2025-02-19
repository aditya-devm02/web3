// components/Checkout.js
import { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { useOkto } from "@okto_web3/react-sdk";

const Checkout = () => {
  const { cart } = useCart();
  const { connect, disconnect, userWallet } = useOkto();
  const [loading, setLoading] = useState(false);

  const totalAmount = cart.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = async () => {
    if (!userWallet) {
      alert("Please connect your wallet first.");
      return;
    }

    setLoading(true);
    try {
      // Simulate Web3 payment processing logic
      console.log("Processing payment...");
      alert("Payment Successful!");
    } catch (error) {
      console.error("Payment Error: ", error);
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Checkout</h2>
      <p>Total: ${totalAmount}</p>
      <button onClick={() => connect()}>Connect Wallet</button>
      <button onClick={handleCheckout} disabled={loading}>
        {loading ? "Processing..." : "Checkout"}
      </button>
    </div>
  );
};

export default Checkout;
