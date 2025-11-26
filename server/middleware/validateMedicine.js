export function validateMedicine(req, res, next) {
  const { name, dosage, time, date } = req.body;

  // required fields
  if (!name || !name.trim()) {
    return res.status(400).json({ message: "Medicine name is required." });
  }

  if (!dosage || !dosage.trim()) {
    return res.status(400).json({ message: "Dosage is required." });
  }

  // simple HH:MM check
  if (!time || !/^\d{2}:\d{2}$/.test(time)) {
    return res.status(400).json({ message: "Time must be in HH:MM format." });
  }

  // simple YYYY-MM-DD check
  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return res.status(400).json({ message: "Date must be in YYYY-MM-DD format." });
  }

  next();
}
