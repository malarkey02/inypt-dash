const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const cors = require("cors");

const http = require("http");
// const io = require("socket.io")(server, {
//   cors: {
//     origin: "http://localhost:3002",
//     methods: ["GET", "POST"],
//   },
// });

require("dotenv").config();

const app = express();
// const server = http.createServer(app);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: "1mb" }));

try {
  mongoose.connect(
    "mongodb+srv://admin-harsh:" +
      process.env.DB_PASS +
      "@cluster0.8y5it.mongodb.net/InYPTUsers?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
} catch (err) {
  console.log(err);
}

const userSchema = new mongoose.Schema({
  email: String,
  password: String,

  progressBar: {
    theory: Number,
    practical: Number,
  },

  taskList: [{ bannerColor: String, task: String, owner: String, due: String }],
  projects: [
    {
      projID: Number,
      projColor: String,
      projName: String,
      projStatus: String,
      projPhase: String,
      projLink: String,
      theoryProg: Number,
      practicalProg: Number,
    },
  ],

  calendar: [{ class: String, startDay: String, endDay: String }],
});

const meetingSchema = new mongoose.Schema({
  meetingDetails: String,
  meetingTopic: String,
  meetingLink: String,
  attendees: [String],
});

const User = mongoose.model("user", userSchema);

app.use("/login", function (req, res) {
  const username = req.body.username;
  const myPlaintextPassword = req.body.password;

  console.log(username + " " + myPlaintextPassword);

  //Note foundUser returns an array because we're using .find and not .findOne
  User.find({ email: username }, function (err, foundUser) {
    if (err) {
      console.log(err);
      console.log("User doesn't exist or some error");
    } else {
      // Load hash from your password DB.
      console.log(foundUser[0].password);

      console.log("User Exists");
      const hash = foundUser[0].password;
      bcrypt.compare(myPlaintextPassword, hash).then(function (result) {
        if (result) {
          res.send({
            token: foundUser[0]._id,
          });
        } else {
          console.log("Invalid Login");
        }
      });
    }
  });

  // res.send({
  //     token: "test123"
  // });
});

//Progress Tab
app.use("/getprogress", function (req, res) {
  const userid = req.body.useridValue;

  User.find({ _id: userid }, function (err, foundUser) {
    if (err) {
      console.log(err);
    } else {
      res.send({
        theory: foundUser[0].progressBar.theory,
        practical: foundUser[0].progressBar.practical,
      });
    }
  });
});

//Task List
app.use("/gettasks", function (req, res) {
  const userid = req.body.useridValue;

  User.find({ _id: userid }, function (err, foundUser) {
    if (err) {
      console.log(err);
    } else {
      res.send({
        tasklist: foundUser[0].taskList,
      });
    }
  });
});

//Projects
app.use("/getprojects", function (req, res) {
  const userid = req.body.useridValue;
  console.log(userid);

  User.find({ _id: userid }, function (err, foundUser) {
    if (err) {
      console.log(err);
    } else {
      res.send({
        tasklist: foundUser[0].projects,
      });
    }
  });
});


//rtc sockets
// io.on("connection", (socket) => {
//   socket.emit("me", socket.id);

//   socket.on("disconnect", () => {
//     socket.broadcast.emit("callEnded");
//   });

//   socket.on("callUser", (data) => {
//     io.to(data.userToCall).emit("callUser", {
//       signal: data.signalData,
//       from: data.from,
//       name: data.name,
//     });
//   });

//   socket.on("answerCall", (data) => {
//     io.to(data.to).emit("callAccepted"), data.signal;
//   });
// });

app.listen(3002, function (req, res) {
  console.log("Listening at 3002");
});
