import mongoose from "mongoose";
const { Schema } = mongoose;
import { Champion } from "app/interfaces/champion.interface"

const championsSchema = new Schema<Champion>({
    c_name: { type: String, required: true },
    c_lane: { type: String, enum: ['top', 'bot', 'mid', 'sup', 'jg'], required: true },
    c_splash_art: String, // Big picture of the champion
    c_icon: String,
    c_tips: [
      {
        title: { type: String}, // Our advices to try to win the matchup with the counter
        description: { type: String}, // adn the description
      },
    ],
    
  });

const Champions = mongoose.model("Champions", championsSchema);

export default Champions;
