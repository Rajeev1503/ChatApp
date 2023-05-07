const serverUrl = import.meta.env.VITE_NODE_ENV == "PRODUCTION"
      ? "https://chat-app-server-orcin.vercel.app"
      : "http://localhost:5001";


export default serverUrl;