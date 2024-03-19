/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("products").del();
  await knex("products").insert([
    {
      id: 1,
      slug: "yx1-earphones",
      name: "YX1 Wireless Earphones",
      category_id: 3,
      isNew: true,
      price: 599,
      description:
        "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
      features:
        "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.\n\nThe YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
      images: {
        mobile:
          "https://res.cloudinary.com/duepohol4/image/upload/v1710783206/Audiophile/product-yx1-earphones/mobile/image-product_wi0zno.jpg",
        tablet:
          "https://res.cloudinary.com/duepohol4/image/upload/v1710783199/Audiophile/product-yx1-earphones/tablet/image-product_nialno.jpg",
        desktop:
          "https://res.cloudinary.com/duepohol4/image/upload/v1710783202/Audiophile/product-yx1-earphones/desktop/image-product_utns04.jpg",
      },
      preview_images: {
        mobile:
          "https://res.cloudinary.com/duepohol4/image/upload/v1710783204/Audiophile/product-yx1-earphones/mobile/image-category-page-preview_dycqxm.jpg",
        tablet:
          "https://res.cloudinary.com/duepohol4/image/upload/v1710783204/Audiophile/product-yx1-earphones/mobile/image-category-page-preview_dycqxm.jpg",
        desktop:
          "https://res.cloudinary.com/duepohol4/image/upload/v1710783201/Audiophile/product-yx1-earphones/desktop/image-category-page-preview_lxhf8x.jpg",
      },
    },
    {
      id: 2,
      slug: "xx59-headphones",
      name: "XX59 Headphones",
      category_id: 1,
      isNew: false,
      price: 899,
      description:
        "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
      features:
        "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.\n\nMore than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
      images: {
        mobile:
          "https://res.cloudinary.com/duepohol4/image/upload/v1710782986/Audiophile/product-xx59-headphones/mobile/image-product_snnoqf.jpg",
        tablet:
          "https://res.cloudinary.com/duepohol4/image/upload/v1710782954/Audiophile/product-xx59-headphones/tablet/image-product_z6yblw.jpg",
        desktop:
          "https://res.cloudinary.com/duepohol4/image/upload/v1710782970/Audiophile/product-xx59-headphones/desktop/image-product_ezlcfd.jpg",
      },
      preview_images: {
        mobile:
          "https://res.cloudinary.com/duepohol4/image/upload/v1710782979/Audiophile/product-xx59-headphones/mobile/image-category-page-preview_ia3vvt.jpg",
        tablet:
          "https://res.cloudinary.com/duepohol4/image/upload/v1710782948/Audiophile/product-xx59-headphones/tablet/image-category-page-preview_zq5n5c.jpg",
        desktop:
          "https://res.cloudinary.com/duepohol4/image/upload/v1710782963/Audiophile/product-xx59-headphones/desktop/image-category-page-preview_fif5nt.jpg",
      },
    },
    {
      id: 3,
      slug: "xx99-mark-one-headphones",
      name: "XX99 Mark I Headphones",
      category_id: 1,
      isNew: false,
      price: 1750,
      description:
        "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
      features:
        "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.\n\nFrom the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is includes with a balanced gold connector.",
      images: {
        mobile:
          "https://res.cloudinary.com/duepohol4/image/upload/v1710783249/Audiophile/product-xx99-mark-one-headphones/mobile/image-product_wjfi86.jpg",
        tablet:
          "https://res.cloudinary.com/duepohol4/image/upload/v1710783002/Audiophile/product-xx99-mark-one-headphones/tablet/image-product_u1kzaf.jpg",
        desktop:
          "https://res.cloudinary.com/duepohol4/image/upload/v1710783018/Audiophile/product-xx99-mark-one-headphones/desktop/image-product_b6zmwi.jpg",
      },
      preview_images: {
        mobile:
          "https://res.cloudinary.com/duepohol4/image/upload/v1710783027/Audiophile/product-xx99-mark-one-headphones/mobile/image-category-page-preview_r5qndb.jpg",
        tablet:
          "https://res.cloudinary.com/duepohol4/image/upload/v1710782995/Audiophile/product-xx99-mark-one-headphones/tablet/image-category-page-preview_adlc0b.jpg",
        desktop:
          "https://res.cloudinary.com/duepohol4/image/upload/v1710783014/Audiophile/product-xx99-mark-one-headphones/desktop/image-category-page-preview_mbsqkt.jpg",
      },
    },
    {
      id: 4,
      slug: "xx99-mark-two-headphones",
      name: "XX99 Mark II Headphones",
      category_id: 1,
      isNew: true,
      price: 2999,
      description:
        "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      features:
        "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.\n\nThe advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
      images: {
        mobile:
          "https://res.cloudinary.com/duepohol4/image/upload/v1710783195/Audiophile/product-xx99-mark-two-headphones/mobile/image-product_htfrkh.jpg",
        tablet:
          "https://res.cloudinary.com/duepohol4/image/upload/v1710783186/Audiophile/product-xx99-mark-two-headphones/tablet/image-product_onvbly.jpg",
        desktop:
          "https://res.cloudinary.com/duepohol4/image/upload/v1710783192/Audiophile/product-xx99-mark-two-headphones/desktop/image-product_pzmcso.jpg",
      },
      preview_images: {
        mobile:
          "https://res.cloudinary.com/duepohol4/image/upload/v1710783194/Audiophile/product-xx99-mark-two-headphones/mobile/image-category-page-preview_eb0zyz.jpg",
        tablet:
          "https://res.cloudinary.com/duepohol4/image/upload/v1710783043/Audiophile/product-xx99-mark-two-headphones/tablet/image-category-page-preview_eem0df.jpg",
        desktop:
          "https://res.cloudinary.com/duepohol4/image/upload/v1710783191/Audiophile/product-xx99-mark-two-headphones/desktop/image-category-page-preview_gehjev.jpg",
      },
    },
    {
      id: 5,
      slug: "zx7-speaker",
      name: "ZX7 Speaker",
      category_id: 2,
      isNew: false,
      price: 3500,
      description:
        "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
      features:
        "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.\n\nThe ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
      images: {
        mobile:
          "https://res.cloudinary.com/duepohol4/image/upload/v1710783216/Audiophile/product-zx7-speaker/mobile/image-product_tzye2x.jpg",
        tablet:
          "https://res.cloudinary.com/duepohol4/image/upload/v1710783210/Audiophile/product-zx7-speaker/tablet/image-product_yiu30w.jpg",
        desktop:
          "https://res.cloudinary.com/duepohol4/image/upload/v1710783213/Audiophile/product-zx7-speaker/desktop/image-product_rv5lop.jpg",
      },
      preview_images: {
        mobile:
          "https://res.cloudinary.com/duepohol4/image/upload/v1710783214/Audiophile/product-zx7-speaker/mobile/image-category-page-preview_zbzxey.jpg",
        tablet:
          "https://res.cloudinary.com/duepohol4/image/upload/v1710783208/Audiophile/product-zx7-speaker/tablet/image-category-page-preview_xcdxdy.jpg",
        desktop:
          "https://res.cloudinary.com/duepohol4/image/upload/v1710783211/Audiophile/product-zx7-speaker/desktop/image-category-page-preview_o8oh7p.jpg",
      },
    },
    {
      id: 6,
      slug: "zx9-speaker",
      name: "ZX9 Speaker",
      category_id: 2,
      isNew: true,
      price: 4500,
      description:
        "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      features:
        "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).\n\nDiscover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
      images: {
        mobile:
          "https://res.cloudinary.com/duepohol4/image/upload/v1710783226/Audiophile/product-zx9-speaker/mobile/image-product_k1jhtf.jpg",
        tablet:
          "https://res.cloudinary.com/duepohol4/image/upload/v1710783219/Audiophile/product-zx9-speaker/tablet/image-product_nwoeol.jpg",
        desktop:
          "https://res.cloudinary.com/duepohol4/image/upload/v1710783222/Audiophile/product-zx9-speaker/desktop/image-product_qfgvbm.jpg",
      },
      preview_images: {
        mobile:
          "https://res.cloudinary.com/duepohol4/image/upload/v1710783224/Audiophile/product-zx9-speaker/mobile/image-category-page-preview_q25mjf.jpg",
        tablet:
          "https://res.cloudinary.com/duepohol4/image/upload/v1710783218/Audiophile/product-zx9-speaker/tablet/image-category-page-preview_xdnxqv.jpg",
        desktop:
          "https://res.cloudinary.com/duepohol4/image/upload/v1710783220/Audiophile/product-zx9-speaker/desktop/image-category-page-preview_l62rni.jpg",
      },
    },
  ]);
};
