export async function POST(req) {
  try {
    await DatabaseConn();
    let { email, password } = await req.json();
    //check values
    if (email === "" || password === "") {
      return NextResponse.json({
        success: false,
        message: "All Values are Required !",
      });
    }

    //remove whitespace
    email = email.trim();
    password = password.trim();
    console.log(email);

    //check user email is exit
    const userExit = await User.findOne({ email: email });
    if (userExit) {
      //check password correct or not
      const isMatch = await bcrypt.compare(password, userExit.password);

      if (isMatch) {
        const token = userExit.token;
        return NextResponse.json({
          success: true,
          message: "Login Success !",
          token: token,
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "Password Wrong !",
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "Email Wrong !",
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Something went Wrong , please try again !",
    });
  }
}
const User = require("../model/User.js");
const DatabaseConn = require("../database/DatabaseCon.js");
const jwt = require("jsonwebtoken");

const VerifyOtpHandler = async (req, res, next) => {
  await DatabaseConn();
  try {
    let { email, otp } = req.body;

    // Find the user
    const user = await User.findOne({ email: email });
    otp = otp.trim();
    if (!user) {
      return res.json({
        success: false,
        message: "This Email is Not found try again!",
      });
    }

    const token = jwt.sign(
      { email, userId: user._id },
      process.env.TOKEN_SECRET_KEY,
      { expiresIn: "24h" }
    );

    // Check if OTP is correct and not expired

    if (user.otp === otp && Date.now() < user.expiration) {
      await User.updateOne(
        { email: email },
        { verifyUser: true, token: token }
      );
      return res.json({
        success: true,
        message: "Email verified",
        user: user,
        token: token,
      });
    } else if (Date.now() >= user.expiration) {
      return res.json({
        success: false,
        message: "otp exprise",
      });
    } else {
      return res.json({
        success: false,
        message: "Invalid OTP",
      });
    }
  } catch (error) {
    console.log(error.message);

    return res.json({
      success: false,
      message: "Server problem",
    });
  }
};
