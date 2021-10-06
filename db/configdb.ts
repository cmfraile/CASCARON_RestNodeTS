import { connect as MonConnect } from "mongoose";

const dbC = async() => {
    try{
        MonConnect('mongodb://localhost:27017/pruebas',{user:'cafeuser',pass:'cafeuser'},(err) => {console.log});
    }catch(err){console.log(err);throw new Error('No se logro establecer la conexión')};
}

module.exports = {dbC};