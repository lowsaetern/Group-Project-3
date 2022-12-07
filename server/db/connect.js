const mongoose = require("mongoose");
const Db = process.env.ATLAS_URI;

(async () => {
  await mongoose.connect(Db, {}, async () => {
    console.log("Connected to Database", Db);
  });
})();
