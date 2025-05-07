import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = await cookies();
  const allCookies = cookieStore.getAll();

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-slate-800 dark:to-slate-900 font-sans">
      <main className="flex-grow flex flex-col items-center justify-center p-4 sm:p-10">
        <div className="w-full max-w-3xl p-8 sm:p-10 bg-white dark:bg-slate-800 shadow-2xl rounded-xl border border-gray-200 dark:border-slate-700 transform hover:scale-[1.01] transition-transform duration-300 ease-in-out">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 sm:mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-400 dark:to-indigo-500">Inspected Cookies</h2>
          {allCookies.length > 0 ? (
            <ul className="space-y-4">
              {allCookies.map((cookie) => (
                <li key={cookie.name} className="p-4 sm:p-5 rounded-lg bg-gray-50 dark:bg-slate-700/50 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-200 ease-in-out shadow-sm border border-gray-200 dark:border-slate-600">
                  <span className="font-semibold text-lg text-indigo-700 dark:text-indigo-400">{cookie.name}:</span>
                  <span className="ml-3 text-gray-700 dark:text-slate-300 break-all text-sm leading-relaxed">{cookie.value}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-lg text-center text-gray-600 dark:text-slate-300 py-4">No cookies were received by the server.</p>
          )}
          <p className="mt-8 text-sm text-gray-500 dark:text-slate-400 text-center">
            This section displays cookies sent with the request to this page, as interpreted by the server.
          </p>
        </div>
      </main>

      <footer className="py-8 px-4 sm:px-8 border-t border-gray-300 dark:border-slate-700 bg-gray-50 dark:bg-slate-800/50">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-base text-gray-700 dark:text-slate-300">
          <p>Flow App Zone - Part of a Multi-Zone Demonstration</p>
        </div>
      </footer>
    </div>
  );
}
