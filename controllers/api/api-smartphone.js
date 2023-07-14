var SMD = require("../../models/allModel");

var objReturn = {
  status: 1,
  message: "",
};

const getSmartPhone = async (req, res) => {
  let listPhone;
  try {
    listPhone = await SMD.phoneModel.find();
    if (listPhone.length > 0) {
      objReturn.data = 0;
    } else {
      objReturn.status = 0;
      objReturn.message = "Không tìm thấy dữ liệu phù hợp!";
    }
    objReturn.data = listPhone;
  } catch (error) {
    objReturn.status = 0;
    objReturn.message = error.message;
  }

  return res.status(200).json(objReturn.data);
};

const addSmartPhone = async (req, res) => {
  let objPhone = new SMD.phoneModel({
    name: req.body.name,
    price: req.body.price,
    brand: req.body.brand,
    describe: req.body.describe,
    configuration: req.body.configuration,
  });

  try {
    await objPhone.save();
    objReturn.message = "Thêm thành công!";
  } catch (error) {
    objReturn.message = "Thêm thất bại!";
  }

  return res.json(objReturn);
};

const updateSmartPhone = async (req, res) => {
  let objPhone = await SMD.phoneModel.findById(req.params.ids);
  (objPhone.name = req.body.name),
    (objPhone.price = req.body.price),
    (objPhone.brand = req.body.brand),
    (objPhone.describe = req.body.describe),
    (objPhone.configuration = req.body.configuration);

  try {
    await SMD.phoneModel.findByIdAndUpdate(req.params.ids, objPhone);
    objReturn.message = "Sửa thành công!";
  } catch (error) {
    objReturn.message = "Sửa thất bại!";
    console.log(error.message);
  }

  return res.json(objReturn);
};

const deleteSmartPhone = async (req, res) => {
  try {
    await SMD.phoneModel.findByIdAndDelete(req.params.ids);
    objReturn.message = "Xoá thành công!";
  } catch (error) {
    objReturn.message = "Xóa thất bại!";
  }

  return res.json(objReturn);
};

module.exports = {
  getSmartPhone,
  addSmartPhone,
  updateSmartPhone,
  deleteSmartPhone,
};
