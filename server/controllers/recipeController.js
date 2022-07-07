/**
 * GET /
 * Homepage
 */

const homepage = async (req, res) => {
  res.render("index", { title: "Cooking Blog - Home" });
};

module.exports = { homepage };
