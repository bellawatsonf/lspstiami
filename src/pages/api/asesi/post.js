export default function createAsesi(req, res) {
  /* minta */
  let input = req.body;
  console.log(input);
  /*perksa */
  /*ambil data daridb */
  let datanya = [
    {
      nama: "saya",
      alamat: "bekasi",
    },
  ];
  res.json({
    success: true,
    data: datanya,
  });
}
