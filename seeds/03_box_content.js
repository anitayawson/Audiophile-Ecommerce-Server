/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("boxContent").del();
  await knex("boxContent").insert([
    {
      id: 1,
      product_id: 1,
      quantity: 2,
      item_name: "Earphone unit",
    },
    {
      id: 2,
      product_id: 1,
      quantity: 6,
      item_name: "Multi-size earplugs",
    },
    {
      id: 3,
      product_id: 1,
      quantity: 1,
      item_name: "User manual",
    },
    {
      id: 4,
      product_id: 1,
      quantity: 1,
      item_name: "USB-C charging cable",
    },
    {
      id: 5,
      product_id: 1,
      quantity: 1,
      item_name: "Travel pouch",
    },
    {
      id: 6,
      product_id: 2,
      quantity: 1,
      item_name: "Headphone unit",
    },
    {
      id: 7,
      product_id: 2,
      quantity: 2,
      item_name: "Replacement earcups",
    },
    {
      id: 8,
      product_id: 2,
      quantity: 1,
      item_name: "User manual",
    },
    {
      id: 9,
      product_id: 2,
      quantity: 1,
      item_name: "3.5mm 5m audio cable",
    },
    {
      id: 10,
      product_id: 3,
      quantity: 1,
      item_name: "Headphone unit",
    },
    {
      id: 11,
      product_id: 3,
      quantity: 2,
      item_name: "Replacement earcups",
    },
    {
      id: 12,
      product_id: 3,
      quantity: 1,
      item_name: "User manual",
    },
    {
      id: 13,
      product_id: 3,
      quantity: 1,
      item_name: "3.5mm 5m audio cable",
    },
    {
      id: 14,
      product_id: 4,
      quantity: 1,
      item_name: "Headphone unit",
    },
    {
      id: 15,
      product_id: 4,
      quantity: 2,
      item_name: "Replacement earcups",
    },
    {
      id: 16,
      product_id: 4,
      quantity: 1,
      item_name: "User manual",
    },
    {
      id: 17,
      product_id: 4,
      quantity: 1,
      item_name: "3.5mm 5m audio cable",
    },
    {
      id: 18,
      product_id: 4,
      quantity: 1,
      item_name: "Travel bag",
    },
    {
      id: 19,
      product_id: 5,
      quantity: 2,
      item_name: "Speaker unit",
    },
    {
      id: 20,
      product_id: 5,
      quantity: 2,
      item_name: "Speaker cloth panel",
    },
    {
      id: 21,
      product_id: 5,
      quantity: 1,
      item_name: "User manual",
    },
    {
      id: 22,
      product_id: 5,
      quantity: 1,
      item_name: "3.5mm 7.5m audio cable",
    },
    {
      id: 23,
      product_id: 5,
      quantity: 1,
      item_name: "7.5m optical cable",
    },
    {
      id: 24,
      product_id: 6,
      quantity: 2,
      item_name: "Speaker unit",
    },
    {
      id: 25,
      product_id: 6,
      quantity: 2,
      item_name: "Speaker cloth panel",
    },
    {
      id: 26,
      product_id: 6,
      quantity: 1,
      item_name: "User manual",
    },
    {
      id: 27,
      product_id: 6,
      quantity: 1,
      item_name: "3.5mm 10m audio cable",
    },
    {
      id: 28,
      product_id: 6,
      quantity: 1,
      item_name: "10m optical cable",
    },
  ]);
};
