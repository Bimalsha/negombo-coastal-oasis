import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@fontsource/italiana';
import '@fontsource/cormorant-garamond/600.css';
import '@fontsource/cormorant-sc/600.css';
import '@fontsource/mulish/400.css';
import '@fontsource/dancing-script';
createRoot(document.getElementById("root")!).render(<App />);
