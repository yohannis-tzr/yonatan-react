import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function BookMeeting() {
  const today = new Date();

  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectSpecification, setProjectSpecification] = useState("");

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedDate) {
      alert("Please select a date");
      return;
    }

    const payload = {
      fullName,
      email,
      phone,
      projectSpecification,
      selectedDate: `${selectedDate.year}-${selectedDate.month + 1}-${selectedDate.day}`,
    };

    console.log("SENDING:", payload);

    const res = await fetch("http://localhost:5000/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      alert("Failed to save booking");
      return;
    }

    setSubmitted(true);
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white pt-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          {/* CALENDAR */}
          <div className="bg-black/50 p-6 rounded-2xl">
            <div className="flex justify-between mb-4">
              <button onClick={() => setCurrentMonth((m) => m - 1)}>‹</button>
              <h2>
                {new Date(currentYear, currentMonth).toLocaleString("default", {
                  month: "long",
                })}{" "}
                {currentYear}
              </h2>
              <button onClick={() => setCurrentMonth((m) => m + 1)}>›</button>
            </div>

            <div className="grid grid-cols-7 gap-2">
              {[...Array(firstDay)].map((_, i) => <div key={i} />)}
              {[...Array(daysInMonth)].map((_, i) => (
                <button
                  key={i}
                  onClick={() =>
                    setSelectedDate({
                      day: i + 1,
                      month: currentMonth,
                      year: currentYear,
                    })
                  }
                  className={`py-2 rounded-lg ${
                    selectedDate &&
                    selectedDate.day === i + 1 &&
                    selectedDate.month === currentMonth &&
                    selectedDate.year === currentYear
                      ? "bg-blue-500"
                      : "bg-slate-900 hover:bg-blue-500"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>

          {/* FORM */}
          <div className="bg-black/40 p-8 rounded-2xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  className="w-full p-3 bg-slate-900"
                  placeholder="Full Name"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                <input
                  className="w-full p-3 bg-slate-900"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="w-full p-3 bg-slate-900"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <textarea
                  className="w-full p-3 bg-slate-900"
                  placeholder="Project Specification"
                  value={projectSpecification}
                  onChange={(e) =>
                    setProjectSpecification(e.target.value)
                  }
                />
                <button
                  type="submit"
                  className="w-full bg-blue-500 py-3 rounded-full"
                >
                  Submit
                </button>
              </form>
            ) : (
              <div className="text-center text-xl text-blue-400">
                ✅ Booking Saved
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default BookMeeting;
