const Sweet = require("../models/Sweet");

/**
 * @desc    Create a new sweet
 * @route   POST /api/sweets
 * @access  Admin
 */
exports.createSweet = async (req, res) => {
  try {
    const { name, category, price, quantity } = req.body;

    if (!name || !category || price == null || quantity == null) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const sweet = await Sweet.create({
      name,
      category,
      price,
      quantity
    });

    res.status(201).json(sweet);
  } catch (error) {
    console.error("Create Sweet Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * @desc    Get all sweets
 * @route   GET /api/sweets
 * @access  Public
 */
exports.getAllSweets = async (req, res) => {
  try {
    const sweets = await Sweet.find();
    res.status(200).json(sweets);
  } catch (error) {
    console.error("Get Sweets Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * @desc    Search sweets
 * @route   GET /api/sweets/search
 * @access  Public
 */
exports.searchSweets = async (req, res) => {
  try {
    const { name, category, minPrice, maxPrice } = req.query;
    const query = {};

    if (name) query.name = { $regex: name, $options: "i" };
    if (category) query.category = category;

    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    const sweets = await Sweet.find(query);
    res.status(200).json(sweets);
  } catch (error) {
    console.error("Search Sweet Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * @desc    Update sweet
 * @route   PUT /api/sweets/:id
 * @access  Admin
 */
exports.updateSweet = async (req, res) => {
  try {
    const sweet = await Sweet.findById(req.params.id);

    if (!sweet) {
      return res.status(404).json({ message: "Sweet not found" });
    }

    sweet.name = req.body.name ?? sweet.name;
    sweet.category = req.body.category ?? sweet.category;
    sweet.price = req.body.price ?? sweet.price;
    sweet.quantity = req.body.quantity ?? sweet.quantity;

    await sweet.save();
    res.status(200).json(sweet);
  } catch (error) {
    console.error("Update Sweet Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * @desc    Delete sweet
 * @route   DELETE /api/sweets/:id
 * @access  Admin
 */
exports.deleteSweet = async (req, res) => {
  try {
    const sweet = await Sweet.findById(req.params.id);

    if (!sweet) {
      return res.status(404).json({ message: "Sweet not found" });
    }

    await sweet.deleteOne();
    res.status(200).json({ message: "Sweet deleted successfully" });
  } catch (error) {
    console.error("Delete Sweet Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * @desc    Purchase a sweet
 * @route   POST /api/sweets/:id/purchase
 * @access  User
 */
exports.purchaseSweet = async (req, res) => {
  try {
    const sweet = await Sweet.findById(req.params.id);

    if (!sweet) {
      return res.status(404).json({ message: "Sweet not found" });
    }

    if (sweet.quantity <= 0) {
      return res.status(400).json({ message: "Sweet out of stock" });
    }

    sweet.quantity -= 1;
    await sweet.save();

    res.status(200).json(sweet);
  } catch (error) {
    console.error("Purchase Sweet Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * @desc    Restock sweet
 * @route   POST /api/sweets/:id/restock
 * @access  Admin
 */
exports.restockSweet = async (req, res) => {
  try {
    const { quantity } = req.body;

    if (!quantity || quantity <= 0) {
      return res.status(400).json({ message: "Quantity must be greater than zero" });
    }

    const sweet = await Sweet.findById(req.params.id);

    if (!sweet) {
      return res.status(404).json({ message: "Sweet not found" });
    }

    sweet.quantity += Number(quantity);
    await sweet.save();

    res.status(200).json(sweet);
  } catch (error) {
    console.error("Restock Sweet Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
