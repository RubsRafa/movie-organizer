import app from "../src/app";
import 'dotenv/config';

const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Server running on port ${port}`))