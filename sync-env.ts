import { writeFileSync } from 'fs';

const key = process.env.NINJA_API_KEY;

if (key) {
    const jsContent = `window.process = { env: { NINJA_API_KEY: '${key}', API_KEY: '${key}' } };\nconsole.log('Environment variables injected from Bun');`;
    writeFileSync('env-injection.js', jsContent);
    console.log('Successfully generated env-injection.js using Bun native env reader');
} else {
    console.error('NINJA_API_KEY not found in Bun process.env');
}
