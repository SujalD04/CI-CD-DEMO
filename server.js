const app = require('./src/app');

const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || 'development';

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Environment: ${ENV}`);
});
