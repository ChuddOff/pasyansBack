import {lodzi, lodziExtensive, pacyansProfile, pacyansTopEasy, pacyansTopHard} from '../models/model.js';

class Zamer{
     async postElo(req, res) {
          try { 
               const {name, eloChange} = req.body;

               const newProfile = await pacyansProfile.findOne({
                    name: name
               });

               if (!newProfile) {
                    res.status(404).json({
                         message: 'Не найден'
                    })
                    return;
               }

               newProfile.elo += eloChange;

               newProfile.elo = newProfile.elo < 0 ? newProfile.elo = 0 : newProfile.elo

               await newProfile.save();
               res.status(201).json({
                    message: 'Успех'
               });
          
          }
          catch(e) {
               console.log(e, 'ЗАМЕРА не будет');
          }
     }
     async postTime(req, res) {
          try {
               const {type, name, seconds} = req.body;

               const newProfile = await pacyansProfile.findOne({name: name});

               if (!newProfile) {
                    res.status(404).json({
                         message: 'Не найден'
                    })
                    return;
               }

               switch (type) {
                    case 'hard':
                         newProfile.bestHard = newProfile.bestHard>seconds ? seconds : newProfile.bestHard;
                         break;
                    case 'easy':
                         newProfile.bestEasy = newProfile.bestEasy>seconds ? seconds : newProfile.bestEasy;
                         break;
               }

               await newProfile.save();
               res.status(201).json({
                    message: 'Успех'
               });
          
          }
          catch(e) {
               console.log(e, 'ЗАМЕРА не будет');
          }
     }

     async postWin(req, res) {
          try {
               const {name} = req.body;

               const newProfile = await pacyansProfile.findOne({name: name});

               if (!newProfile) {
                    res.status(404).json({
                         message: 'Не найден'
                    })
                    return;
               }

               newProfile.wins += 1
               newProfile.fails -= 1

               console.log(newProfile);

               await newProfile.save();
               res.status(201).json({
                    message: 'Успех'
               });
          
          }
          catch(e) {
               console.log(e, 'ЗАМЕРА не будет');
          }
     }

     async postFail(req, res) {
          try {
               const {name} = req.body;

               const newProfile = await pacyansProfile.findOne({name: name});

               if (!newProfile) {
                    res.status(404).json({
                         message: 'Не найден'
                    })
                    return;
               }
               
               newProfile.fails += 1

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

     async getProfile(req, res) {
          try {
               const {name} = req.query;

               const data = await pacyansProfile.find({
                    name: name
               });

               res.json(data);
          }
          catch(err) {
               console.error(err);
               res.status(500).json({ message: 'Internal server error' });
          }
     }

     async getAll(req, res) {
          try {
               const {type} = req.query;

               const data = await pacyansProfile.find();


               res.json(data);
          }
          catch(err) {
               console.error(err);
               res.status(500).json({ message: 'Internal server error' });
          }
     }




    test(req, res) {
          res.send(true);
     }
}
export default new Zamer();