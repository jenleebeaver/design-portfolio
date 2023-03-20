import '../index.css';
import localFont from '@next/font/local';

const worksans = localFont({
    src: [
        {
            path: '../public/fonts/worksans/WorkSans-Black.ttf',
            weight: '900',
        },
        {
            path: '../public/fonts/worksans/WorkSans-ExtraBold.ttf',
            weight: '800',
        },
        {
            path: '../public/fonts/worksans/WorkSans-Bold.ttf',
            weight: '700',
        },
        {
            path: '../public/fonts/worksans/WorkSans-SemiBold.ttf',
            weight: '600',
        },
        {
            path: '../public/fonts/worksans/WorkSans-Medium.ttf',
            weight: '500',
        },
        {
            path: '../public/fonts/worksans/WorkSans-Regular.ttf',
            weight: '400',
        },
        {
            path: '../public/fonts/worksans/WorkSans-Light.ttf',
            weight: '300',
        },
        {
            path: '../public/fonts/worksans/WorkSans-ExtraLight.ttf',
            weight: '200',
        },
        {
            path: '../public/fonts/worksans/WorkSans-Thin.ttf',
            weight: '100',
        },     
    ],
});

const roboto = localFont({
    src: [
        {
            path: '../public/fonts/roboto/Roboto-Black.ttf',
            weight: '900',
        },
        {
            path: '../public/fonts/roboto/Roboto-Bold.ttf',
            weight: '700',
        },
        {
            path: '../public/fonts/roboto/Roboto-Medium.ttf',
            weight: '500',
        },
        {
            path: '../public/fonts/roboto/Roboto-Regular.ttf',
            weight: '400',
        },
        {
            path: '../public/fonts/roboto/Roboto-Light.ttf',
            weight: '300',
        },
        {
            path: '../public/fonts/roboto/Roboto-Thin.ttf',
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
            --roboto-font: ${roboto.style.fontFamily};
        }
        `}
        </style>
        <Component {...pageProps} />
    </>
  );
}