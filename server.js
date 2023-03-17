//This server was created to download mp3's from youtube - took too long to download

// const { createServer } = require('http')
// const { parse } = require('url')
// const next = require('next')

// const dev = process.env.NODE_ENV !== 'production'
// const hostname = 'localhost'
// const port = 3001
// // when using middleware `hostname` and `port` must be provided below
// const app = next({ dev, hostname, port })
// const handle = app.getRequestHandler();
// const yas = require('youtube-audio-server');
// yas.setKey('AIzaSyAoOf-6-c-HCdWd9tA-La6HSrHBwpneKnU');

// app.prepare().then(() => {
//   createServer(async (req, res) => {
//     try {
//       // Be sure to pass `true` as the second argument to `url.parse`.
//       // This tells it to parse the query portion of the URL.
//       const parsedUrl = parse(req.url, true)
//       const { pathname, query } = parsedUrl

//       if (pathname === '/audio') {
//         // await app.render(req, res, '/a', query)
//         const id = '9_7loz-HWUM' // "Prelude to the Afternoon of a Faun" by Debussy.
//         const file = 'prelude-to-the-afternoon-of-a-faun.mp3'
//         console.log(`Downloading ${id} into ${file}...`)
//         yas.downloader
//         .setFolder('./') // Optionally set a folder for downloaded content.
//         .onSuccess(({id, file}) => {
//             console.log(`Yay! Audio (${id}) downloaded successfully into "${file}"!`)
//         })
//         .onError(({ id, file, error }) => {
//             console.error(`Sorry, an error ocurred when trying to download ${id}`, error)
//         })
//         .download({ id, file, useCache: true })
//         await app.render(req, res, '/b', query)
//       } else if (pathname === '/b') {
//         await app.render(req, res, '/b', query)
//       } else {
//         await handle(req, res, parsedUrl)
//       }
//     } catch (err) {
//       console.error('Error occurred handling', req.url, err)
//       res.statusCode = 500
//       res.end('internal server error')
//     }
//   })
//     .once('error', (err) => {
//       console.error(err)
//       process.exit(1)
//     })
//     .listen(port, () => {
//       console.log(`> Ready on http://${hostname}:${port}`)
//     })
// })