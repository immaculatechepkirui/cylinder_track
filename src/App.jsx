import React from "react";
import OrderForm from "./components/OrderForm";
import AdminDashboard from "./components/AdminDashboard";

export default function App() {
  return (
    <div style={{ padding: 16 }}>
      <h1>CylinderTrack (Hackathon MVP)</h1>
      <div style={{ display: "flex", gap: 24 }}>
        <div style={{ flex: 1 }}>
          <h2>Customer (Mobile)</h2>
          <OrderForm />
        </div>
        <div style={{ width: 480 }}>
          <h2>Admin Dashboard</h2>
          <AdminDashboard />
        </div>
      </div>
    </div>
  );
}