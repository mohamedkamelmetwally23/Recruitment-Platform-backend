const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      enum: ["job_seeker", "company"],
      required: true,
    },

    // Job Seeker fields
    name: {
      type: String,
      trim: true,
    },

    title: {
      type: String,
      trim: true,
    },

    location: {
      type: String,
      trim: true,
    },

    experience: {
      type: String,
      trim: true,
    },

    education: {
      type: String,
      trim: true,
    },

    skills: {
      type: [String],
      default: [],
    },

    certifications: {
      type: [String],
      default: [],
    },

    preferredField: {
      type: String,
      trim: true,
    },

    bio: {
      type: String,
      trim: true,
    },

    // Company fields
    companyName: {
      type: String,
      trim: true,
    },

    industry: {
      type: String,
      trim: true,
    },

    // Shared auth field
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
