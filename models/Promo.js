import mongoose from "mongoose";

const PromoSchema = new mongoose.Schema({
    name: String,
    percent: Number
}, {
    timestamps: true,
});

export default mongoose.model('Promo', PromoSchema);
