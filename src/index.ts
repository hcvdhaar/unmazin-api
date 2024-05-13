import app from './server';

import dotenv from 'dotenv';

dotenv.config();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
