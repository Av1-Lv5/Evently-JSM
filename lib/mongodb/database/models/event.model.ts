import { Schema, model, models } from "mongoose";

export interface Event {
  _id: string;
  title: string;
  description?: string; // Optional property
  location?: string; // Optional property
  createdAt: Date;
  imageUrl: string;
  startDateTime: Date;
  endDateTime: Date;
  price?: string; // Optional property
  isFree: boolean;
  url?: string; // Optional property
  category: { _id: string; name: string };
  organizer: { _id: string; firstName: string; lastName: string };
}

const eventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  location: { type: String },
  createdAt: { type: Date, default: Date.now },
  imageUrl: { type: String, required: true },
  startDateTime: { type: Date, default: Date.now },
  endDateTime: { type: Date, default: Date.now },
  price: { type: String },
  isFree: { type: Boolean, default: false },
  url: { type: String },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  organizer: { type: Schema.Types.ObjectId, ref: "User" },
});

const Event = models.Event || model("Event", eventSchema);
export default Event;
