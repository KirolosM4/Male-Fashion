let clicks = 0;

export default function handler(req, res) {
  clicks++;
  console.log(`تم الضغط ${clicks} مرة`);

  res.writeHead(302, {
    Location: 'https://male-fashion-lac.vercel.app'
  });
  res.end();
}

