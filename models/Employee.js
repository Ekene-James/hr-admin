const mongoose = require("mongoose");
const beautifyUnique = require('mongoose-beautiful-unique-validation');

const EmployeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    required: [true, "Please add your first name"]
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, "Please add your last name"]
  },
  NOKFN: {
    type: String,
    trim: true,
    required: [true, "Please add your NOK First name"]
  },
  NOKLN: {
    type: String,
    trim: true,
    required: [true, "Please add your NOK last name"]
  },
  NOKAddress: {
    type: String,
    trim: true,
    required: [true, "Please add your NOK Address"]
  },
  personalEmail: {
    type: String,
    required: [true, "Please add an email"],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email"
    ]
  },
  NOKEmail: {
    type: String,
    required: [true, "Please add NOK Email an email"],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email"
    ]
  },
  officialEmail: {
    type: String,
    required: [true, "Please add a official email"],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email"
    ]
  },
  spouseEmail: {
    type: String,
    required: [true, "Please add spouse email"],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email"
    ]
  },

  otherName: {
    type: String,
    required: [true, "Please add a other names"]
  },
  spouseFName: {
    type: String,
    required: [true, "Please add spouse first name"]
  },
  spouseLName: {
    type: String,
    required: [true, "Please add spouse last name"]
  },
  gender: {
    // Array of strings
    type: [String],
    required: [true, "Please add a gender"],
    enum: [
      "male",
      "female",
      "other"
    ]
  },
  employmentType: {
    // Array of strings
    type: [String],
    required: [true, "Please add employment type"],
    enum: [
      "temporary employee",
      "Nysc employee",
      "Siwess Employee"
    ]
  },
  NOKRelationship: {
    // Array of strings
    type: [String],
    required: [true, "Please add NOK relationship type"],
    enum: [
      "Spouse",
      "Mother",
      "Father"
    ]
  },
  pensionManager: {
    // Array of strings
    type: [String],
    required: [true, "Please add pension Manager"],
    enum: [
      "AXA Mansard Pension Limited",
      "ARM Pension Managers",
      "Coronation Merchant Bank",
      "Alico Pension Managers Limited"
     
    ]
  },
  employeeDesignation: {
    // Array of strings
    type: [String],
    required: [true, "Please add employment designation"],
    enum: [
      "Executive",
      "Staff",
      "Head Of Department"
    ]
  },
  employeeDepartment: {
    // Array of strings
    type: [String],
    required: [true, "Please add employee department"],
    enum: [
      "Executive Management Office",
      "Finance And Accounting",
      "Human Resource"
    ]
  },
  maritalStatus: {
    // Array of strings
    type: [String],
    required: [true, "Please add marital status"],
    enum: [
      "married",
      "single",
      "other"
    ]
  },
  bankName: {
    // Array of strings
    type: [String],
    required: [true, "Please add bank Name"],
    enum: [
      "Access Bank Plc",
      "Ecobank Nigeria",
      "Fidelity Bank Plc",
      "First Bank Nigeria Limited",
      "Zenith Bank Plc"
    ]
  },
  employeeStatus: {
    // Array of strings
    type: [String],
    required: [true, "Please fill employee status "],
    enum: [
      "Confirmed",
      "Probation"
    ]
  },
  employeeLocation: {
    // Array of strings
    type: [String],
    required: [true, "Please fill employee location "],
    enum: [
      " Corporate Head Office",
      "Lagos Office",
      "Warri Base",
    ]
  },
  employeeConfirmation: {
    type: Boolean,
    default: false
  },
  phoneNumber: {
    type: String,
    maxlength: [11, "Phone number can not be longer than 11 characters"]
  },
  numberOfChildren: {
    type: String,
    maxlength: [100, "Isnt that too much?"]
  },
  spousePhoneNumber: {
    type: String,
    maxlength: [11, "spouse Phone number can not be longer than 11 characters"]
  },
  grossSalary: {
    type: String,
    maxlength: [20, "nobody earns such amount"]
  },
  dob: {
    type: Date,
    required: [true, "Please add date of birth"]
  },
  doe: {
    type: Date,
    required: [true, "Please add date of employment"]
  },
  dol: {
    type: Date,
    required: [true, "Please add date of leave"]
  },

  nationality: {
    type: String,
    required: [true, "Please add your nationality"]
  },
  currentAddress: {
    type: String,
    required: [true, "Please add your current address"]
  },
  permanentAddress: {
    type: String,
    required: [true, "Please add your permanent address"]
  },
  state: {
    type: String,
    required: [true, "Please add a permanent address"]
  },
  town: {
    type: String,
    required: [true, "Please add your town"]
  },
  refereeName1: {
    type: String,
    required: [true, "Please add refereeName1"]
  },
  refereeAddress1: {
    type: String,
    required: [true, "Please add refereeAddress1"]
  },
  refereePhone1: {
    type: String,
    maxlength: [11, "ref1 Phone number can not be longer than 11 characters"]
  },
  emergName1: {
    type: String,
    required: [true, "Please add emergName1"]
  },
  emergAddress1: {
    type: String,
    required: [true, "Please add emergAddress1"]
  },
  emergPhone1: {
    type: String,
    maxlength: [11, "emergPhone1 Phone number can not be longer than 11 characters"]
  },
  accountNumber: {
    type: String,
    maxlength: [15, "account number can not be longer than 15 characters"]
  },
  bankVerificationNumber: {
    type: String,
    maxlength: [15, "BVN number can not be longer than 15 characters"]
  },
  pensionNumber: {
    type: String,
    maxlength: [15, "pension Number number can not be longer than 15 characters"]
  },
  emergName2: {
    type: String,
    required: [true, "Please add emergName2"]
  },
  emergAddress2: {
    type: String,
    required: [true, "Please add emergAddress2"]
  },
  emergPhone2: {
    type: String,
    maxlength: [11, "emergPhone2 Phone number can not be longer than 11 characters"]
  },
  NOKPhone: {
    type: String,
    maxlength: [11, "NOK Phone number can not be longer than 11 characters"]
  },
  refereeName2: {
    type: String,
    required: [true, "Please add refereeName2"]
  },
  refereeAddress2: {
    type: String,
    required: [true, "Please add refereeAddress2"]
  },
  refereePhone2: {
    type: String,
    maxlength: [11, "ref2 Phone number can not be longer than 11 characters"]
  },
  staffId: {
    type: String,
    required: [true, "Please add your staff Id"]
  },
 
  createdAt: {
    type: Date,
    default: Date.now
  },
 
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true
  }
});





EmployeeSchema.plugin(beautifyUnique);

module.exports = mongoose.model("Course", EmployeeSchema);
