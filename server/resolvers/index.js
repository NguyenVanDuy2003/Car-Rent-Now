import UserModel from "../models/UserModel.js";
import CarModel from "../models/CarModel.js";
//Query truy vấn từ phía client để lấy dữ liệu
//Mutation sử dụng khi muốn update hay xóa dữ liệu
//Subscription hoạt động phía client update theo dạng realtime,khi mà có bất kì sự thay đổi nào từ phía server nó sẽ tự động gửi trả về phía client

export const resolvers = {
  Query: {
    users: async () => {
      const user = await UserModel.find();
      return user;
    },
    user: async (parent, args) => {
      const userID = args.userId;
      const user = await UserModel.findById(userID);
      return user;
    },

    cars: async (parent, args) => {
      const userID = args.userId;
      console.log(userID);
      console.log(parent);
      const car = await CarModel.find({ userId: userID });
      console.log(car);
      return car;
    },
  },
  User: {
    cars: async (parent, args) => {
      const cars = await CarModel.find({
        userID: parent.id,
      }).sort({
        updatedAt: "desc",
      });
      return cars;
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const newUser = new UserModel({ ...args });
      await newUser.save();
      return newUser;
    },
    addCar: async (parent, args) => {
      const newCar = new CarModel({ ...args });
      await newCar.save();
      return newCar;
    },
    updateCar: async (parent, args) => {
      const carId = args.id;
      console.log(carId);
      const car = await CarModel.findByIdAndUpdate(carId, args);
      return car;
    },
    deleteCar: async (parent, args) => {
      const carId = args.id;
      const car = await CarModel.findByIdAndRemove(carId, args);
      return car;
    },
  },
};
