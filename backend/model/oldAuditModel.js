import mongoose, { Schema } from "mongoose";

const oldAuditSchema = new Schema(
  {
    taskId: {
      type: Number,
      required: true,
      default: 1,
    },
    hostId: {
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
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("OldAuditSchema",oldAuditSchema);
