/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("gallery").del();
  await knex("gallery").insert([
    {
      id: 1,
      product_id: 1,
      images: {
        first: {
          mobile:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710783205/Audiophile/product-yx1-earphones/mobile/image-gallery-1_onhpcc.jpg",
          tablet:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710783198/Audiophile/product-yx1-earphones/tablet/image-gallery-1_g5p1md.jpg",
          desktop:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710783202/Audiophile/product-yx1-earphones/desktop/image-gallery-1_wuumio.jpg",
        },
        second: {
          mobile:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710783204/Audiophile/product-yx1-earphones/mobile/image-gallery-2_zekjes.jpg",
          tablet:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710783197/Audiophile/product-yx1-earphones/tablet/image-gallery-2_prdrkx.jpg",
          desktop:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710783200/Audiophile/product-yx1-earphones/desktop/image-gallery-2_sui3tc.jpg",
        },
        third: {
          mobile:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710783203/Audiophile/product-yx1-earphones/mobile/image-gallery-3_wsqtsd.jpg",
          tablet:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710783196/Audiophile/product-yx1-earphones/tablet/image-gallery-3_yrkt3x.jpg",
          desktop:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710783199/Audiophile/product-yx1-earphones/desktop/image-gallery-3_yqeamr.jpg",
        },
      },
    },
    {
      id: 2,
      product_id: 2,
      images: {
        first: {
          mobile:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710782983/Audiophile/product-xx59-headphones/mobile/image-gallery-1_eroejx.jpg",
          tablet:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710782951/Audiophile/product-xx59-headphones/tablet/image-gallery-1_h2ibro.jpg",
          desktop:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710782967/Audiophile/product-xx59-headphones/desktop/image-gallery-1_eqp9zr.jpg",
        },
        second: {
          mobile:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710782976/Audiophile/product-xx59-headphones/mobile/image-gallery-2_bvo0n2.jpg",
          tablet:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710782944/Audiophile/product-xx59-headphones/tablet/image-gallery-2_qmwgal.jpg",
          desktop:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710782960/Audiophile/product-xx59-headphones/desktop/image-gallery-2_gvgpfz.jpg",
        },
        third: {
          mobile:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710782973/Audiophile/product-xx59-headphones/mobile/image-gallery-3_ppdb9c.jpg",
          tablet:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710782938/Audiophile/product-xx59-headphones/tablet/image-gallery-3_nqmoqg.jpg",
          desktop:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710782957/Audiophile/product-xx59-headphones/desktop/image-gallery-3_ae7v6c.jpg",
        },
      },
    },
    {
      id: 3,
      product_id: 3,
      images: {
        first: {
          mobile:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710783030/Audiophile/product-xx99-mark-one-headphones/mobile/image-gallery-1_j6hqhc.jpg",
          tablet:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710782999/Audiophile/product-xx99-mark-one-headphones/tablet/image-gallery-1_oa716n.jpg",
          desktop:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710783011/Audiophile/product-xx99-mark-one-headphones/desktop/image-gallery-1_jld2xe.jpg",
        },
        second: {
          mobile:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710783024/Audiophile/product-xx99-mark-one-headphones/mobile/image-gallery-2_qrynqm.jpg",
          tablet:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710782992/Audiophile/product-xx99-mark-one-headphones/tablet/image-gallery-2_yvmtzt.jpg",
          desktop:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710783008/Audiophile/product-xx99-mark-one-headphones/desktop/image-gallery-2_vpg0fw.jpg",
        },
        third: {
          mobile:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710783021/Audiophile/product-xx99-mark-one-headphones/mobile/image-gallery-3_vi1oot.jpg",
          tablet:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710782989/Audiophile/product-xx99-mark-one-headphones/tablet/image-gallery-3_d5zjbu.jpg",
          desktop:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710783005/Audiophile/product-xx99-mark-one-headphones/desktop/image-gallery-3_fre30v.jpg",
        },
      },
    },
    {
      id: 4,
      product_id: 4,
      images: {
        first: {
          mobile:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710783196/Audiophile/product-xx99-mark-two-headphones/mobile/image-gallery-1_hlgfpu.jpg",
          tablet:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710783183/Audiophile/product-xx99-mark-two-headphones/tablet/image-gallery-1_jdxayf.jpg",
          desktop:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710783192/Audiophile/product-xx99-mark-two-headphones/desktop/image-gallery-1_m51jnz.jpg",
        },
        second: {
          mobile:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710783194/Audiophile/product-xx99-mark-two-headphones/mobile/image-gallery-2_pefap6.jpg",
          tablet:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710783040/Audiophile/product-xx99-mark-two-headphones/tablet/image-gallery-2_qvpxec.jpg",
          desktop:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710783191/Audiophile/product-xx99-mark-two-headphones/desktop/image-gallery-2_zbgh20.jpg",
        },
        third: {
          mobile:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710783193/Audiophile/product-xx99-mark-two-headphones/mobile/image-gallery-3_qtidjt.jpg",
          tablet:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710783037/Audiophile/product-xx99-mark-two-headphones/tablet/image-gallery-3_ketax0.jpg",
          desktop:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710783189/Audiophile/product-xx99-mark-two-headphones/desktop/image-gallery-3_sgr4wv.jpg",
        },
      },
    },
    {
      id: 5,
      product_id: 5,
      images: {
        first: {
          mobile:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710783215/Audiophile/product-zx7-speaker/mobile/image-gallery-1_dj3l3x.jpg",
          tablet:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710783208/Audiophile/product-zx7-speaker/tablet/image-gallery-1_lxxrzk.jpg",
          desktop:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710783212/Audiophile/product-zx7-speaker/desktop/image-gallery-1_lzj1ap.jpg",
        },
        second: {
          mobile:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710783212/Audiophile/product-zx7-speaker/mobile/image-gallery-2_bin8q5.jpg",
          tablet:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710783207/Audiophile/product-zx7-speaker/tablet/image-gallery-2_rqxgtr.jpg",
          desktop:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710783210/Audiophile/product-zx7-speaker/desktop/image-gallery-2_zixsil.jpg",
        },
        third: {
          mobile:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710783214/Audiophile/product-zx7-speaker/mobile/image-gallery-3_rqeaq2.jpg",
          tablet:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710783206/Audiophile/product-zx7-speaker/tablet/image-gallery-3_jk0ybs.jpg",
          desktop:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710783209/Audiophile/product-zx7-speaker/desktop/image-gallery-3_qtvq0j.jpg",
        },
      },
    },
    {
      id: 6,
      product_id: 6,
      images: {
        first: {
          mobile:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710783225/Audiophile/product-zx9-speaker/mobile/image-gallery-1_v0lufm.jpg",
          tablet:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710783218/Audiophile/product-zx9-speaker/tablet/image-gallery-1_xdaydn.jpg",
          desktop:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710783222/Audiophile/product-zx9-speaker/desktop/image-gallery-1_ifkrnb.jpg",
        },
        second: {
          mobile:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710783224/Audiophile/product-zx9-speaker/mobile/image-gallery-2_iv2jig.jpg",
          tablet:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710783217/Audiophile/product-zx9-speaker/tablet/image-gallery-2_fhrvop.jpg",
          desktop:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710783220/Audiophile/product-zx9-speaker/desktop/image-gallery-2_puws7y.jpg",
        },
        third: {
          mobile:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710783223/Audiophile/product-zx9-speaker/mobile/image-gallery-3_ptjvhf.jpg",
          tablet:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710783216/Audiophile/product-zx9-speaker/tablet/image-gallery-3_xpfyks.jpg",
          desktop:
            "https://res.cloudinary.com/duepohol4/image/upload/v1710783221/Audiophile/product-zx9-speaker/desktop/image-gallery-3_m6hhbp.jpg",
        },
      },
    },
  ]);
};
