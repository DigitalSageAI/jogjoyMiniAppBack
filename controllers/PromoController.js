import Promo from "../models/Promo.js";

const PromoController = {
    // Создание промокода
    async getAll(req, res) {
        try {
            const promos = await Promo.find();
            return res.status(200).json(promos);
        } catch (error) {
            return res.status(500).json({ message: "Ошибка сервера", error });
        }
    },
    async create(req, res) {
        try {
            const { name, percent } = req.body;
            
            if (!name || !percent) {
                return res.status(400).json({ message: "Все поля обязательны" });
            }

            const promo = new Promo({ name, percent });
            await promo.save();

            return res.status(201).json(promo);
        } catch (error) {
            return res.status(500).json({ message: "Ошибка сервера", error });
        }
    },

    // Редактирование промокода
    async update(req, res) {
        try {
            const { id } = req.params;
            const { name, percent } = req.body;

            const promo = await Promo.findByIdAndUpdate(id, { name, percent }, { new: true });
            
            if (!promo) {
                return res.status(404).json({ message: "Промокод не найден" });
            }

            return res.status(200).json(promo);
        } catch (error) {
            return res.status(500).json({ message: "Ошибка сервера", error });
        }
    },

    // Удаление промокода
    async delete(req, res) {
        try {
            const { id } = req.params;

            const promo = await Promo.findByIdAndDelete(id);
            
            if (!promo) {
                return res.status(404).json({ message: "Промокод не найден" });
            }

            return res.status(200).json({ message: "Промокод удален" });
        } catch (error) {
            return res.status(500).json({ message: "Ошибка сервера", error });
        }
    }
};

export default PromoController;