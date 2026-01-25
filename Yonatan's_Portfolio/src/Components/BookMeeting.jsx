import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function BookMeeting() {
  const today = new Date();

  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const [showLogin, setShowLogin] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectSpecification, setProjectSpecification] = useState("");

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  const monthName = new Date(currentYear, currentMonth).toLocaleString(
    "default",
    { month: "long" }
  );

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

  const handleLogin = () => {
    if (loginEmail === "admin@gmail.com" && loginPassword === "admin") {
      setShowLogin(false);
      setLoginError("");
      window.location.href = "/admin";
    } else {
      setLoginError("Invalid email or password");
    }
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white pt-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

          {/* CALENDAR */}
          <div className="bg-black/50 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <button onClick={() => setCurrentMonth((m) => m - 1)}>‹</button>
              <h2 className="font-semibold">
                {monthName} {currentYear}
              </h2>
              <button onClick={() => setCurrentMonth((m) => m + 1)}>›</button>
            </div>

            <div className="grid grid-cols-7 gap-2">
              {[...Array(firstDay)].map((_, i) => (
                <div key={i} />
              ))}

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
                  className={`rounded-lg py-2 transition
                    ${
                      selectedDate &&
                      selectedDate.day === i + 1 &&
                      selectedDate.month === currentMonth &&
                      selectedDate.year === currentYear
                        ? "bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.8)]"
                        : "bg-slate-900 hover:bg-blue-500"
                    }
                  `}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>

          {/* FORM */}
          <div className="bg-black/40 border border-white/10 rounded-2xl p-8">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full p-3 bg-slate-900 rounded"
                  required
                />
                <input
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 bg-slate-900 rounded"
                  required
                />
                <input
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3 bg-slate-900 rounded"
                />
                <textarea
                  placeholder="Project Specification"
                  value={projectSpecification}
                  onChange={(e) => setProjectSpecification(e.target.value)}
                  className="w-full p-3 bg-slate-900 rounded"
                />

                <button
                  type="submit"
                  className="w-full bg-blue-500 py-3 rounded-full font-semibold
                             hover:bg-blue-600 transition
                             shadow-[0_0_20px_rgba(59,130,246,0.7)]"
                >
                  Submit
                </button>
              </form>
            ) : (
              <div className="text-center">
                <div className="text-6xl mb-4">✅</div>
                <h2 className="text-2xl text-blue-400 font-semibold">
                  Booking Saved
                </h2>
              </div>
            )}

            {/* LOGIN BUTTON */}
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => {
                  setShowLogin(true);
                  setLoginEmail("");
                  setLoginPassword("");
                  setLoginError("");
                }}
                className="
                  px-6 py-2 rounded-full
                  bg-blue-500 text-sm font-semibold
                  hover:bg-blue-600 transition
                  shadow-[0_0_15px_rgba(59,130,246,0.6)]
                "
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* LOGIN MODAL */}
      {showLogin && (
        <div className="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-md flex items-center justify-center">
          <div className="bg-slate-900 rounded-2xl p-8 w-full max-w-md border border-white/10 relative">
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-4 right-4 text-xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold text-blue-400 mb-6">
              Login
            </h2>

            <input
              type="email"
              placeholder="Email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              className="w-full mb-4 p-3 bg-slate-800 rounded"
            />

            <input
              type="password"
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              className="w-full mb-4 p-3 bg-slate-800 rounded"
            />

            {loginError && (
              <p className="text-red-400 text-sm mb-4">
                {loginError}
              </p>
            )}

            <button
              onClick={handleLogin}
              className="w-full bg-blue-500 py-3 rounded-full font-semibold
                         hover:bg-blue-600 transition
                         shadow-[0_0_20px_rgba(59,130,246,0.7)]"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default BookMeeting;
