function ping(_req, res) {
  res.status(200).json({ menssage: "pong!"})
}

module.export = ping;
