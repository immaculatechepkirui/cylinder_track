import React, { useState } from "react";
import { createOrder } from "../services/orders";

export default function OrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [qty, setQty] = useState(1);
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("");

  async function submit(e) {
    e.preventDefault();
    setStatus("Submitting...");
    const orderPayload = {
      customerName: name,
      phone,
      items: [{ type: "standard", qty }],
      address: { text: address, lat: -1.2921, lng: 36.8219 }
    };
    try {
      const id = await createOrder(orderPayload);
      setStatus(`Order created: ${id}`);
    } catch (err) {
      console.error(err);
      setStatus("Error creating order");
    }
  }

  return (
    <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      <input placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
      <label>
        Quantity:
        <input type="number" min="1" value={qty} onChange={(e) => setQty(Number(e.target.value))} />
      </label>
      <button type="submit">Place Order</button>
      <div>{status}</div>
    </form>
  );
}