import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

// __dirname 대체: import.meta.url을 이용하여 현재 파일 경로를 가져옴
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
    plugins: [react()],
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler',
            },
        },
    },
    resolve: {
        alias: {
            '@api': path.resolve(__dirname, './src/apis'),
            '@features': path.resolve(__dirname, './src/features'),
            '@layout': path.resolve(__dirname, './src/layout'),
            '@hooks': path.resolve(__dirname, './src/hooks'),
            '@page': path.resolve(__dirname, './src/page'),
            '@style': path.resolve(__dirname, './src/style'),
            '@type': path.resolve(__dirname, './src/type'),
            '@mocks': path.resolve(__dirname, './src/mocks'),
            '@utils': path.resolve(__dirname, './src/utils'),
            '@components': path.resolve(__dirname, './src/components'),
            '@assets': path.resolve(__dirname, './src/assets'),
            '@images': path.resolve(__dirname, './src/assets/images'),
            '@scss': path.resolve(__dirname, './src/assets/scss'),
        },
    },
    esbuild: {
        loader: 'tsx', // TypeScript + JSX를 처리하도록 설정
        include: /src\/.*\.[tj]sx?$/, // .ts, .tsx, .js, .jsx 파일을 모두 포함
        exclude: /node_modules/, // 제외
    },
    build: {
        terserOptions: {
            compress: {
                drop_console: true, // 콘솔 로그를 제거
                drop_debugger: true, // 디버거 구문을 제거
            },
            output: {
                comments: false, // 모든 주석을 제거
            },
        },
    },
    server: {
        port: 3000,
        // host: '0.0.0.0', // 외부 IP 접근 허용 설정
        host: 'localhost', // 로컬 개발용으로만 접근 가능
    },
});
