const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    company: {
      type: String,
      required: true,
      trim: true,
    },

    location: {
      type: String,
      required: true,
      trim: true,
    },

    type: {
      type: String,
      required: true,
      enum: ["Full-time", "Part-time", "Contract", "Remote", "Internship"],
    },

    salary: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    postedAt: {
      type: String,
      required: true,
    },

    experience: {
      type: String,
      required: true,
    },

    skills: {
      type: [String],
      default: [],
    },

    description: {
      type: String,
      required: true,
    },

    benefits: {
      type: [String],
      default: [],
    },

    isSaved: {
      type: Boolean,
      default: false,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Job", jobSchema);
