import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';


export default defineConfig({
    root    : 'app',
    build   : {
        sourcemap   : process.env.SOURCE_MAP === 'true',
        outDir      : '../dist'
    },
    plugins : [
        VitePWA({
            mode            : 'production',
            base            : '/',
            srcDir          : 'app/src',
            includeAssets   : ['favicon.svg'],
            injectRegister  : process.env.SW_INLINE === undefined ? 'auto' : 'script',
            selfDestroying  : process.env.SW_DESTROY === 'true',
            manifest        : {
                name            : 'PWA Router',
                short_name      : 'PWA Router',
                theme_color     : '#ffffff',
                icons           : [
                    {
                        src: 'pwa-192x192.png', // <== don't add slash, for testing
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: '/pwa-512x512.png', // <== don't remove slash, for testing
                        sizes: '512x512',
                        type: 'image/png',
                    },
                    {
                        src: 'pwa-512x512.png', // <== don't add slash, for testing
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any maskable',
                    }
                ]
            },
            devOptions        : {
                enabled             : process.env.SW_DEV === 'true',
                //navigateFallback    : 'index.html'
            }
        })
    ]
})
