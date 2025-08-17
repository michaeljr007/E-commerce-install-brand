// app/admin/page.tsx
export default function AdminDashboard() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-lg font-semibold">Users</h3>
        <p className="mt-2 text-gray-600">1,245 registered users</p>
      </div>
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-lg font-semibold">Products</h3>
        <p className="mt-2 text-gray-600">532 products in catalog</p>
      </div>
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-lg font-semibold">Orders</h3>
        <p className="mt-2 text-gray-600">89 new orders this week</p>
      </div>
    </div>
  );
}
