import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Admin() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBookings = async () => {
    setLoading(true);
    const res = await fetch("http://localhost:5000/api/bookings");
    const data = await res.json();
    setBookings(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const deleteBooking = async (id) => {
    const confirmed = window.confirm("Delete this booking?");
    if (!confirmed) return;

    const res = await fetch(
      `http://localhost:5000/api/bookings/${id}`,
      { method: "DELETE" }
    );

    if (!res.ok) {
      alert("Delete failed");
      return;
    }

    // remove from UI immediately
    setBookings((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <>
      <Navbar showBookButton={false} />

      <main className="min-h-screen bg-slate-950 text-white pt-32 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-blue-400">
              Meeting Requests
            </h1>

            <button
              onClick={fetchBookings}
              className="px-6 py-2 bg-blue-500 rounded-full hover:bg-blue-600"
            >
              Refresh
            </button>
          </div>

          {loading ? (
            <p>Loading...</p>
          ) : bookings.length === 0 ? (
            <p>No bookings found.</p>
          ) : (
            <div className="space-y-5">
              {bookings.map((b) => (
                <div
                  key={b.id}
                  className="bg-black/50 border border-white/10 rounded-xl p-6 flex flex-col md:flex-row gap-6"
                >
                  <div className="md:w-1/4">
                    <h2 className="text-blue-400 font-semibold text-xl">
                      {b.fullName}
                    </h2>
                    <a
                      href={`mailto:${b.email}`}
                      className="text-blue-400 hover:underline block"
                    >
                      {b.email}
                    </a>
                    {b.phone && <p>{b.phone}</p>}
                    <p className="mt-2">Date: {b.selectedDate}</p>
                  </div>

                  <div className="md:flex-1 border-t md:border-l border-white/10 pt-4 md:pt-0 md:pl-6 flex justify-between">
                    <div>
                      <p className="text-gray-400">Project</p>
                      <p>{b.projectSpecification || "—"}</p>
                      <p className="text-xs text-gray-500 mt-3">
                        {new Date(b.createdAt).toLocaleString()}
                      </p>
                    </div>

                    <button
                      onClick={() => deleteBooking(b.id)}
                      className="self-start px-4 py-2 bg-red-500 rounded-full hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Admin;
