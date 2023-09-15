import mongoose, { Schema } from "mongoose";

const oldAuditSchema = new Schema(
  {
    backupData: [

    ]
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Backup",oldAuditSchema);
