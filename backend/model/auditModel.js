import mongoose, { Schema } from "mongoose";

const auditSchema = new Schema(
  {
    taskId: {
      type: Number,
      required: true,
      unique: true,
      default: 1,
    },
    HOS: {
      type: String,
      required: true,
    },
    providerName: {
      type: String,
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
    remark: {
      type: String,
      required: true,
    },
    userId:{
      type:Schema.Types.ObjectId,
      required:true,
      ref:"Users"
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("AuditSchema",auditSchema);
