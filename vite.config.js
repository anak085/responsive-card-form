import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
  const isLocal = mode === 'development';
  const httpsConfig = {};

  if (isLocal) {
    const keyPath = path.resolve(__dirname, 'localhost-key.pem');
    const certPath = path.resolve(__dirname, 'localhost-cert.pem');

    if (fs.existsSync(keyPath) && fs.existsSync(certPath)) {
      httpsConfig.https = {
        key: fs.readFileSync(keyPath),
        cert: fs.readFileSync(certPath),
      };
    } else {
      console.warn('⚠️ Certificados HTTPS não encontrados. Rodando com HTTP.');
    }
  }

  return {
    plugins: [react(), tailwindcss()],
    server: {
      ...httpsConfig,
    },
  };
});
