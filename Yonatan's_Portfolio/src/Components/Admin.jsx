import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Admin() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/bookings")
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <>
      {/* Navbar WITHOUT Book a Meeting */}
      <Navbar showBookButton={false} />

      <main className="min-h-screen bg-slate-950 text-white pt-32 px-6">
        <div className="max-w-7xl mx-auto">

          <h1 className="text-3xl font-bold text-blue-400 mb-8">
            Meeting Requests
          </h1>

          {loading ? (
            <p className="text-gray-400">Loading meetings...</p>
          ) : bookings.length === 0 ? (
            <p className="text-gray-400">No meetings found.</p>
          ) : (
            <div className="space-y-5">
              {bookings.map((booking) => (
                <div
                  key={booking.id}
                  className="flex flex-col md:flex-row gap-6
                             bg-black/50 border border-white/10 rounded-2xl p-6
                             hover:border-blue-500/40 transition"
                >
                  {/* LEFT: BASIC INFO */}
                  <div className="md:w-1/4">
                    <h2 className="text-xl font-semibold text-blue-400 mb-2">
                      {booking.fullName}
                    </h2>

                    <a
                      href={`mailto:${booking.email}`}
                      className="block text-sm text-blue-400 hover:underline mb-1"
                    >
                      {booking.email}
                    </a>

                    {booking.phone && (
                      <p className="text-sm text-gray-300">
                        {booking.phone}
                      </p>
                    )}

                    <p className="text-sm text-gray-300 mt-2">
                      <span className="text-gray-400">Date:</span>{" "}
                      {booking.selectedDate || "Not selected"}
                    </p>
                  </div>

                  {/* RIGHT: PROJECT DETAILS */}
                  <div className="md:flex-1 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
                    <p className="text-sm text-gray-400 mb-1">
                      Project Specification
                    </p>

                    <p className="text-sm text-gray-200 leading-relaxed">
                      {booking.projectSpecification || "—"}
                    </p>

                    <p className="text-xs text-gray-500 mt-4">
                      Submitted on{" "}
                      {new Date(booking.createdAt).toLocaleString()}
                    </p>
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
