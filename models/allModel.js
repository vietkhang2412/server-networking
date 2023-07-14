var { model } = require("mongoose");

var db = require("./db");

const usersSchema = new db.mongoose.Schema(
  {
    username: { type: String, require: true },
    password: { type: String, require: true },
    email: { type: String, require: false },
  },
  {
    collection: "users",
  }
);

const smartPhoneSchema = new db.mongoose.Schema(
  {
    name: { type: String, require: true },
    price: { type: Number, require: true },
    brand: { type: String, require: true },
    describe: { type: String, require: false },
    configuration: [
      {
        screen: String,
        widescreen: String,
        operating_system: String,
        cpu: String,
        rom: String,
        ram: String,
        slot_sim: String,
        battery: String,
      },
    ],
  },
  {
    collection: "smart_phone",
  }
);

let userModel = db.mongoose.model("userModel", usersSchema);
let phoneModel = db.mongoose.model("phoneModel", smartPhoneSchema);

module.exports = {
  userModel,
  phoneModel,
};
