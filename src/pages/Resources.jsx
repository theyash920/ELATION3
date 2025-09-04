import { useNavigate } from "react-router-dom";

const Resources = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-6 py-24">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold">Resources</h1>
        <p className="mt-4 text-white-50 text-lg">
          This page is intentionally left as a placeholder. You can add blogs, case studies, or downloadable assets here later.
        </p>
        <div className="mt-10 p-6 rounded-xl bg-[#121212] border border-white/10">
          <h2 className="text-2xl font-semibold">404 – Not Found (Placeholder)</h2>
          <p className="mt-2 text-white-50">No resources have been added yet. Check back soon!</p>
        </div>
        <button
          onClick={() => navigate('/')}
          className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-medium shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black"
          aria-label="Back to Home"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M19.5 10.5a.75.75 0 01-.75.75h-9.69l3.22 3.22a.75.75 0 11-1.06 1.06l-4.5-4.5a.75.75 0 010-1.06l4.5-4.5a.75.75 0 111.06 1.06L9.06 9.75h9.69a.75.75 0 01.75.75z" clipRule="evenodd" />
          </svg>
          Back to Home
        </button>
      </div>
    </section>
  );
};

export default Resources;