// api/track.js
let clicks = 0;

module.exports = (req, res) => {
  clicks++;
  console.log(`تم الضغط ${clicks} مرة`);
  res.writeHead(302, {
    Location: 'https://male-fashion-lac.vercel.app/'
  });
  res.end();
};
