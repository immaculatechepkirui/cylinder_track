import React, { useEffect, useState } from "react";
import { onOrdersSnapshot, assignDriver } from "../services/orders";

export default function AdminDashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const unsub = onOrdersSnapshot(setOrders);
    return () => unsub();
  }, []);

  return (
    <div>
      <h3>Orders</h3>
      {orders.map((o) => (
        <div key={o.id} style={{ border: "1px solid #ddd", padding: 8, marginBottom: 8 }}>
          <div><strong>{o.id}</strong> — {o.status}</div>
          <div>{o.customerName || "No name"} • {o.address?.text}</div>
          <div>Items: {JSON.stringify(o.items)}</div>
          <div style={{ marginTop: 8 }}>
            <button onClick={() => assignDriver(o.id, "driver_1")}>Assign driver_1</button>
          </div>
        </div>
      ))}
    </div>
  );
}