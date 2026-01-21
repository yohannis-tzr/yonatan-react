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
  const [isSignup, setIsSignup] = useState(false);

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

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* CALENDAR */}
            <div className="bg-black/50 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <button onClick={prevMonth} className="text-xl">‹</button>
                <h2 className="text-lg font-semibold">
                  {monthName} {currentYear}
                </h2>
                <button onClick={nextMonth} className="text-xl">›</button>
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
                    className="bg-slate-900 hover:bg-blue-500 rounded-lg py-2 transition"
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
                <div className="text-center animate-success">
                  <div className="text-6xl mb-4">✅</div>
                  <h2 className="text-2xl text-blue-400 font-semibold">
                    Submission Successful
                  </h2>
                </div>
              )}
            </div>
          </div>

          {/* LOGIN BUTTON */}
          <div className="flex justify-center mt-10">
            <button
              onClick={() => {
                setShowLogin(true);
                setLoginError("");
                setLoginEmail("");
                setLoginPassword("");
              }}
              className="px-6 py-2 rounded-full bg-blue-500 text-sm font-semibold
                         hover:bg-blue-600 transition
                         shadow-[0_0_15px_rgba(59,130,246,0.6)]"
            >
              Login
            </button>
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
              Admin Login
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
