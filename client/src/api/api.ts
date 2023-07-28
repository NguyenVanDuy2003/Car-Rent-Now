import { request } from "./request";

export const dataUsers = async () => {
  const query = `query users{
    users {
      id
      name
      accessToken
      username
      password
      image 
      cars {
        id
        nameCar
        properties
        image
        fuel
        driving_mode
        seats
        price
        cost
        heart
      }
    }
    }
    `;
  const data = await request({ query });
  return data;
};
export const dataUser = async (userId: any) => {
  const query = `query  User($userId: String!) {
    user(userId: $userId) {
      id
      name
      accessToken
      username
      password
      image
      cars {
        id
        nameCar
        properties
        image
        fuel
        driving_mode
        seats
        price
        cost
        heart
        userId
      }
    }
  }
    `;
  const data = await request({
    query,
    variables: {
      userId,
    },
  });
  return data;
};

export const addNewUser = async (newUser: any) => {
  const query = `mutation addUser($username: String!, $password: String!, $name: String!, $image: String) {
    addUser(username: $username, password: $password, name: $name, image: $image) {
      id
      accessToken
      name
      username
      password
      image
    }
  }`;

  const data = await request({
    query,
    variables: {
      username: newUser.username,
      password: newUser.password,
      name: newUser.name,
      image: newUser.image,
    },
  });
  return data;
};

export const updateHeartCar = async (newCar: any) => {
  const query = `mutation UpdateCar($carId: String!, $heart: Boolean) {
    updateCar(id: $carId, heart: $heart) {
      id
      heart
    }
  }`;
  const data = await request({
    query,
    variables: {
      carId: newCar.carId,
      heart: newCar.heart,
    },
  });
  return data;
};

export const carsUser = async (userId: any) => {
  const query = `query User( $userId: String!) {
    cars(userId: $userId) {
      id
      nameCar
      properties
      image
      fuel
      driving_mode
      seats
      price
      cost
      heart
      userId
    }
  }`;

  const data = await request({
    query,
    variables: {
      userId,
    },
  });
  return data;
};

export const createNewCar = async (newCar: any, userID: any) => {
  const query = `mutation Mutation($nameCar: String!, $image: String!, $properties: String!, $fuel: Number!, $drivingMode: String!, $seats: Number!, $price: Number!, $cost: Number!, $userId: String!, $heart: Boolean) {
    addCar(nameCar: $nameCar, image: $image, properties: $properties, fuel: $fuel, driving_mode: $drivingMode, seats: $seats, price: $price, cost: $cost, userId: $userId, heart: $heart) {
      id
      nameCar
      properties
      image
      fuel
      driving_mode
      seats
      price
      cost
      heart
      userId
    }
  }`;
  const data = await request({
    query,
    variables: {
      nameCar: newCar.nameCar,
      properties: newCar.properties,
      image: newCar.image,
      fuel: Number(newCar.fuel),
      drivingMode: newCar.driving_mode,
      seats: newCar.seats,
      cost: Number(newCar.cost),
      price: Number(newCar.price),
      userId: userID,
      heart: false,
    },
  });
  console.log(data);
  return data;
};

export const removeCar = async (carID: any) => {
  const query = `mutation DeleteCar($carId: String!) {
    deleteCar(id: $carId) {
      id
      nameCar
      properties
      image
      fuel
      driving_mode
      seats
      price
      cost
      heart
      userId
    }
  }`;
  const data = await request({
    query,
    variables: {
      carId: carID,
    },
  });
  console.log(data);
  return data;
};
