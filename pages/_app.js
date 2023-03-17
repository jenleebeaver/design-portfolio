import '../index.css';
import localFont from '@next/font/local';

const worksans = localFont({
    src: [
        {
            path: '../public/fonts/WorkSans-Black.ttf',
            weight: '900',
        },
        {
            path: '../public/fonts/WorkSans-ExtraBold.ttf',
            weight: '800',
        },
        {
            path: '../public/fonts/WorkSans-Bold.ttf',
            weight: '700',
        },
        {
            path: '../public/fonts/WorkSans-SemiBold.ttf',
            weight: '600',
        },
        {
            path: '../public/fonts/WorkSans-Medium.ttf',
            weight: '500',
        },
        {
            path: '../public/fonts/WorkSans-Regular.ttf',
            weight: '400',
        },
        {
            path: '../public/fonts/WorkSans-Light.ttf',
            weight: '300',
        },
        {
            path: '../public/fonts/WorkSans-ExtraLight.ttf',
            weight: '200',
        },
        {
            path: '../public/fonts/WorkSans-Thin.ttf',
            weight: '100',
        },     
    ],
});

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
        <style jsx global>{`
        :root {
            --worksans-font: ${worksans.style.fontFamily};
        }
        `}
        </style>
        <Component {...pageProps} />
    </>
  );
}