const mongoose = require("mongoose");
const slugify = require("slugify");
const geocoder = require("../utils/geocode");

const BootcampSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
      unique: true,
      trim: true,
      maxlength: [50, "Name can not be more than 50 characters"]
    },
    slug: String,
    description: {
      type: String,
      required: [true, "Please add a description"],
      maxlength: [500, "Description can not be more than 500 characters"]
    },
    website: {
      type: String,
      match: [
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
        "Please use a valid URL with HTTP or HTTPS"
      ]
    },
    phone: {
      type: String,
      maxlength: [20, "Phone number can not be longer than 20 characters"]
    },
    email: {
      type: String,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please add a valid email"
      ]
    },
    address: {
      type: String,
      required: [true, "Please add an address"]
    },
    location: {
      // GeoJSON Point
      type: {
        type: String,
        enum: ["Point"]
      },
      coordinates: {
        type: [Number],
        index: "2dsphere"
      },
      formattedAddress: String,
      street: String,
      city: String,
      state: String,
      zipcode: String,
      country: String
    },
    careers: {
      // Array of strings
      type: [String],
      required: true,
      enum: [
        "Web Development",
        "Mobile Development",
        "UI/UX",
        "Data Science",
        "Business",
        "Other"
      ]
    },
    averageRating: {
      type: Number,
      min: [1, "Rating must be at least 1"],
      max: [10, "Rating must can not be more than 10"]
    },
    averageCost: Number,
    photo: {
      type: String,
      default: "no-photo.jpg"
    },
    housing: {
      type: Boolean,
      default: false
    },
    jobAssistance: {
      type: Boolean,
      default: false
    },
    jobGuarantee: {
      type: Boolean,
      default: false
    },
    acceptGi: {
      type: Boolean,
      default: false
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
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);
//create a slug from the name
BootcampSchema.pre("save", async function(next) {
  this.slug = await slugify(this.name, { lower: true });
  next();
});

// Reverse populate with virtuals
//the "courses" below is jst a name we wana call our reverse populate
//nd if we wana call it on d bootcamp controller : await Bootcamp.find().populate('courses')
//we r using reverse populate bcos normally to populate,u do smtn like in d bootcamp model ::
// user: {
//  type: mongoose.Schema.ObjectId,
//  ref: "User", this ref is wot mongoose uses to knw wia to populate from, but u call it using d
//                key i.e .populate('user') d small letter
//  required: true
//}
//but we dnt ve Course ref in d bootcamp schema bt we ve bootcamp ref in d Course schema so
//we reverse populate
BootcampSchema.virtual("courses", {
  ref: "Course", //model to use or connect with
  localField: "_id", //the field in the bootcampschema we want to = in Course schema
  foreignField: "bootcamp", //the field in the course schema we r equalling to
  justOne: false
});

//delete courses related to this bootcamp while deleting this bootcamp
BootcampSchema.pre("remove", async function(next) {
  console.log(
    `courses related to this bootcamp wt id: ${this.id} is been deleted too`
  );
  await this.model("Course").deleteMany({ bootcamp: this._id });
  next();
});

//geocode and create location field
/*BootcampSchema.pre("save", async function(next) {
   await geocoder.geocode(this.address, function(err, res) {
  
    this.location = {
      ...res,
      type: "Point"
    };
  });
  this.address = undefined;
  next();
});*/
/* 


// Cascade delete courses when a bootcamp is deleted
BootcampSchema.pre('remove', async function(next) {
  console.log(`Courses being removed from bootcamp ${this._id}`);
  await this.model('Course').deleteMany({ bootcamp: this._id });
  next();
});

*/

module.exports = mongoose.model("Bootcamp", BootcampSchema);
