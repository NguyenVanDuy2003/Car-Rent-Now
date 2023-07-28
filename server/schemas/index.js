//schema mô tả những dữ liệu nó sẽ bao gồm gì

export const typeDefs = `#graphql

scalar Boolean
scalar Number

type User {
    id: String!,
    name:String,
    accessToken:String,
    username:String,
    password:String,
    image:String,
    cars: [Car]
}

type Car {
    id:String,
    nameCar:String,
    properties:String,
    image:String,
    fuel:Number,
    driving_mode:String,
    seats:Number,
    price:Number,
    cost:Number,
    heart:Boolean,
    userId:String
}
type Query {
users: [User],
user(userId: String!): User,
cars(userId: String!): [Car],
}
type Mutation{
    addUser(image:String,username: String!, password: String!,name:String!): User,
    addCar(nameCar:String!,image:String!,properties: String!, fuel: Number!,driving_mode:String!,seats:Number!,price: Number!, cost: Number!,userId: String!,heart: Boolean):Car,
    updateCar(id: String!,nameCar:String,image:String,properties: String, fuel: Number,driving_mode:String,seats:Number,price: Number, cost: Number,heart: Boolean):Car,
    deleteCar(id: String!):Car

}
`;
