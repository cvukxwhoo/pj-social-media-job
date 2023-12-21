import EmployerModel from '../Models/employerDetail.js';

const employerController = {
  // CREATE
  postDetail: async (req, res) => {
    try {
      const newEmployerDetail = req.body;

      const existingEmployer = await EmployerModel.findOne({
        workEmail: newEmployerDetail.workEmail,
        companyName: newEmployerDetail.companyName,
      });
      if (existingEmployer) {
        res.status(400).json({
          message: 'This company name or email have existed',
        });
        return;
      }
      const createNewEmployerDetail = await EmployerModel.create(
        newEmployerDetail
      );
      res.status(201).json({
        message: 'Employer Detail created successfully',
        data: createNewEmployerDetail,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
};

export default employerController;
