import app from "./app.js";

const PORT = process.env.PORT || 5000;
// Root route FIRST
app.get('/', (req, res) => {
  res.send('🚀 API is running...');
});
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
