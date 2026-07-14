import '../app/globals.css'; 

export default function App({ Component, pageProps }) {

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Component {...pageProps} />
    </div>
  );
}