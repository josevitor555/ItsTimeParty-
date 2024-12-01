import { Service as ServiceModel } from '../models/Service.js';

export const serviceController = {
  
  create: async (req, res) => {
    try {
      
      const service = {
        name: req.name,
        description: req.description,
        price: req.price,
        image: req.image
      };

      const response = await ServiceModel.create(service);
      res.status(201).json({ response, msg: 'Serviço criado com sucesso!' });

    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }
};
