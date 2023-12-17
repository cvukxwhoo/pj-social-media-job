import UserModel from '../Models/user.js';
import EmployerModel from '../Models/employerDetail.js';

const middlewares = {
  register: async (req, res, next) => {
    const { userName, email, password } = req.body;
    // Must have userName
    if (!userName) {
      res.status(400).json({
        message: 'Please provide a username',
      });
      return;
    }
    // Must have email
    if (!email) {
      res.status(400).json({
        message: 'Please provide a email',
      });
      return;
    }

    try {
      // check if email already in Database
      const existingEmail = await UserModel.findOne({ email });
      if (existingEmail) {
        res.status(400).json({
          message: 'Email already in use',
        });
        return;
      }
    } catch (error) {
      res.status(500).json({
        message: 'Internal Server Error',
      });
      return;
    }

    //  Must have password
    if (!password) {
      res.status(400).json({
        message: 'Please provide a password',
      });
      return;
    }
    next();
  },

  login: (req, res, next) => {
    const { email, password } = req.body;
    // Must have userName
    if (!email) {
      res.status(400).json({
        message: 'Please provide a username',
      });
      return;
    }
    // Must have password
    if (!password) {
      res.status(400).json({
        message: 'Please provide a password',
      });
      return;
    }
    next();
  },

  // EMPLOYER MIDDLEWARES
  employer: async (req, res, next) => {
    const {
      fullName,
      workTitle,
      workEmail,
      phoneNumber,
      companyName,
      companyLocation,
      websiteUrl,
    } = await req.body;
    // fullName
    if (!fullName) {
      res.status(400).json({
        message: 'Please let us know your name',
      });
      return;
    } else if (fullName.length < 3) {
      res.status(400).json({
        message: 'Please enter at least 4 characters',
      });
      return;
    }

    // workTitle
    if (!workTitle) {
      res.status(400).json({
        message: 'Please let us know your title',
      });
      return;
    } else if (workTitle.length < 3) {
      res.status(400).json({
        message: 'Please enter at least 4 characters',
      });
      return;
    }

    // workEmail
    const emailRegex = /\b[A-Za-z0-9._%+-]+@gmail\.com\b/;
    if (!workEmail) {
      res.status(400).json({
        message: 'Please provide your work email address',
      });
      return;
    }
    if (!emailRegex.test(workEmail)) {
      res.status(400).json({
        message: 'Please provide a valid Gmail email address',
      });
      return;
    }

    // phoneNumber
    if (!phoneNumber) {
      res.status(400).json({
        message: 'Please let us know your name',
      });
      return;
    }

    // companyName
    if (!companyName) {
      res.status(400).json({
        message: 'Please let us know your company name',
      });
      return;
    } else if (companyName.length < 3) {
      res.status(400).json({
        message: 'Please enter at least 4 characters',
      });
      return;
    }

    // companyLocation
    if (!companyLocation) {
      res.status(400).json({
        message: 'Please let us know your company name',
      });
      return;
    }

    // websiteUrl
    if (!websiteUrl) {
      res.status(400).json({
        message: 'Please let us know your website company',
      });
      return;
    }
    next();
  },
};
export default middlewares;
