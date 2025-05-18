import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

export default defineConfig(({ mode }) => {
  const isLocal = mode === 'development';
  const config = {};

  if (isLocal) {
    try {
      config.server = {
        https: {
          key: fs.readFileSync(path.resolve(__dirname, 'localhost-key.pem')),
          cert: fs.readFileSync(path.resolve(__dirname, 'localhost-cert.pem')),
        },
      };
    } catch (err) {
      console.warn('Certificados HTTPS não encontrados, rodando sem HTTPS.');
    }
  }

  return config;
});
