var UMD = require("../../models/allModel");

var objReturn = {
  status: 1,
  message: "",
};

const getUser = async (req, res) => {
  let listUser;
  try {
    listUser = await UMD.userModel.find();
    if (listUser.length > 0) {
      objReturn.data = 0;
    } else {
      objReturn.status = 0;
      objReturn.message = "Không có dữ liệu phù hợp!";
    }
    objReturn.data = listUser;
  } catch (error) {
    objReturn.message = error.message;
    objReturn.status = 0;
  }
  return res.status(200).json(objReturn.data);
};

const addUser = async (req, res) => {
  let objUser = new UMD.userModel();
  objUser.username = req.body.username;
  objUser.password = req.body.password;
  objUser.email = req.body.email;

  try {
    await objUser.save();
    objReturn.message = "Thêm thành công!";
  } catch (error) {
    objReturn.message = "Thêm thất bại!";
  }

  return res.json(objReturn);
};

module.exports = {
  getUser,
  addUser,
};
