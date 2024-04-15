import express from "express";
const realRouter = express.Router();

const url: string =  "https://harry-potter-api-3a23c827ee69.herokuapp.com/api/characters"

type allStudents =  {
    "id": string,
    "name": string,
    "alternate_names": string[],
    "species": string,
    "gender": string,
    "house": string,
    "dateOfBirth": string,
    "yearOfBirth": number,
    "wizard": boolean,
    "ancestry": string,
    "eyeColour": string,
    "hairColour": string,
    "wand": {
      "wood": string,
      "core": string,
      "length": number
    },
    "patronus": string,
    "hogwartsStudent": boolean,
    "hogwartsStaff": boolean,
    "actor": string,
    "alternate_actors": string[],
    "alive": boolean,
    "image": string
}

realRouter.get("/", function (req, res, next) {
  res.send("This is real route");
});

realRouter.get("/students/:house", async (_req, res) => {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data)
})


realRouter.get("/randomstudent", async (_req, res) => {
    const response = await fetch(url);
    const data: allStudents[] = await response.json() as allStudents[];
    const randomStudent = data[Math.floor(Math.random() * data.length)];
    res.json(randomStudent)
});


export default realRouter