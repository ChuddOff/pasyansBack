import {lodzi, lodziExtensive, pacyansProfile} from '../models/model.js';

class Zamer{
     async postElo(req, res) {
          try { 
               const {name, eloChange} = req.body;

               const newProfile = await pacyansProfile.findOne({name});

               if (!newProfile) {
                    res.status(404).json({
                         message: 'Не найден'
                    })
                    return;
               }

               newProfile.elo += eloChange;

               await newProfile.save();
               res.status(201).json({
                    message: 'Успех'
               });
          
          }
          catch(e) {
               console.log(e, 'ЗАМЕРА не будет');
          }
     }
     async postTimeEasy(req, res) {
          try {
               const {name, seconds} = req.body;

               const newProfile = await pacyansProfile.findOne({name});

               if (!newProfile) {
                    res.status(404).json({
                         message: 'Не найден'
                    })
                    return;
               }

               newProfile.bestEasy = seconds;

               await newProfile.save();
               res.status(201).json({
                    message: 'Успех'
               });
          
          }
          catch(e) {
               console.log(e, 'ЗАМЕРА не будет');
          }
     }

     async postTimeHard(req, res) {
          try {
               const {name, seconds} = req.body;

               const newProfile = await pacyansProfile.findOne({name});

               if (!newProfile) {
                    res.status(404).json({
                         message: 'Не найден'
                    })
                    return;
               }

               newProfile.bestHard = seconds;

               await newProfile.save();
               res.status(201).json({
                    message: 'Успех'
               });
          
          }
          catch(e) {
               console.log(e, 'ЗАМЕРА не будет');
          }
     }
     

     async postProfile(req, res) {
          try {
               const {name} = req.body;

               const isNotNewEl = await pacyansProfile.findOne({
                    name: name
               })
               if (isNotNewEl) {
                    res.status(409).json({
                         message: 'Уже имеется'
                    })
                    return;
               }

               const newProfile = new pacyansProfile({
                    name: name,
                    elo: 1000,
                    bestEasy: 0,
                    bestHard: 0,
                    wins: 0,
                    fails: 0,

               })

               await newProfile.save();
               res.status(201).json({
                    message: 'Успех'
               });
          
          }
          catch(e) {
               console.log(e, 'ЗАМЕРА не будет');
          }
     }




    test(req, res) {
          res.send(true);
     }
}
export default new Zamer();