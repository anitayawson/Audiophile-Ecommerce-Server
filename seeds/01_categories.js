/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("categories").del();
  await knex("categories").insert([
    {
      id: 1,
      name: "Headphones",
      image:
        "https://res.cloudinary.com/duepohol4/image/upload/v1710783238/Audiophile/shared/desktop/image-category-thumbnail-headphones_fxnbiz.png",
    },
    {
      id: 2,
      name: "Speakers",
      image:
        "https://res.cloudinary.com/duepohol4/image/upload/v1710783234/Audiophile/shared/desktop/image-category-thumbnail-speakers_ordhie.png",
    },
    {
      id: 3,
      name: "Earphones",
      image:
        "https://res.cloudinary.com/duepohol4/image/upload/v1710783234/Audiophile/shared/desktop/image-category-thumbnail-earphones_qdo2ll.png",
    },
  ]);
};
