import User from "../model/User.js";
import PasswordEncrypt from '../config/PasswordEncrypt.js'
import { LocalStorage } from 'node-localstorage';
import Mail from '../Mailer/RegisterEmail.js'
export default class userController {

    // config  =  new PasswordEncrypt();
    localStorage = new LocalStorage('./scratch');

    // Adding USer to DB
    addUser = async (req, res) => {
        const file = req.body.avtar;
        const { userName, userEmail, userPassword, userDOB, userMob, userAddress, userProof, userBio, userRole, enroll } = req.body;
        const data = {
            userName,
            userEmail,
            userPassword,
            userDOB,
            userMob,
            userAddress,
            userProof,
            userBio,
            userRole,
            enroll
        }
        if (!this.isValidPassword(userPassword)) {
            return res.status(400).json({ error: 'Password must have at least one letter (uppercase or lowercase), one digit, and one special symbol' });
        }

        data.userPassword = PasswordEncrypt.encryptText(userPassword, 'KeepCoding');
        const currentTime = new Date();
        data.time = currentTime.getMinutes();
        data.OTP = Math.floor(100000 + Math.random() * 900000);
        const exist = this.localStorage.getItem('TempData');
        if (exist) {
            this.localStorage.removeItem('TempData')
        }
        const userJsonString = JSON.stringify(data);
        this.localStorage.setItem('TempData', userJsonString);
        console.log(data);
        Mail.sendMail(data);
        return res.json(`Varify Your Identity , We send you 6 digits OTP (Expires within 2 minutes) to ${req.body.userEmail}`);
    }

    // fetch All USer
    getAllUser = async (req, res) => {

    }

    // Delete User
    deleteUser = async (req, res) => {

    }

    // Update User 
    updateUser = (req, res) => {

    }

    // Fetch single User
    fetchSingleUser = (req, res) => {

    }

    varifyUser = async (req, res) => {
        const OTP = req.body.OTP;
        const temp = this.localStorage.getItem('TempData');
        const data = JSON.parse(temp);
        console.log(data);
        const currentTime = new Date().getMinutes();

        if (Math.abs(currentTime - data.time) < 2) {
            if (OTP == data.OTP) {
                delete data.OTP;
                delete data.time; 
                const user =  await User.create(data);
                this.localStorage.removeItem('TempData');
                return res.json({Message:`Welcome ${user.userName} to EduHub`,user})
            } else {
                return res.json("Not Valide")
            }
        } else {
            return res.json(`OOPS ${data.userName} Your OTP Expired, Resend Now`)
        }


    }

    resend = async (req, res) => {
        try {
            const temp = this.localStorage.getItem('TempData');
            const data = JSON.parse(temp);
            const currentTime = new Date();
            data.time = currentTime.getMinutes();
            data.OTP = Math.floor(100000 + Math.random() * 900000);
            this.localStorage.removeItem('TempData');
            this.localStorage.setItem("TempData", JSON.stringify(data));
            Mail.sendMail(data);
            return res.json(`Varify Your Identity , We send you 6 digits OTP (Expires within 2 minutes) to ${data.userEmail}`);

        } catch (err) {
            return res.json(`Something went Wrong ${err}`);

        }


    }

    
    isValidPassword = (password) => {
        const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
        return regex.test(password);
    };

}