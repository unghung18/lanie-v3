import { getProductsByCategory } from "@/api/LanieApi";
import FlashSale from "@/components/FlashSale";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import BannerTop from "@/components/Slider/BannerTop/BannerTop";
import SlideCollection from "@/components/Slider/SlideCollection/SlideCollection";
import SliderBrand from "@/components/Slider/SliderBrand/SliderBrand";
import SliderInstagram from "@/components/Slider/SliderInstagram/SliderInstagram";
import SliderMain from "@/components/Slider/SliderMain/SliderMain";
import Tabs from "@/components/Tabs";

async function getDataAo() {
  const res = await getProductsByCategory("Áo");
  return res.data;
}

async function getDataQuan() {
  const res = await getProductsByCategory("Quần");
  return res.data;
}
async function getDataChanVay() {
  const res = await getProductsByCategory("Chân váy");
  return res.data;
}
async function getDataDam() {
  const res = await getProductsByCategory("Đầm");
  return res.data;
}

export default async function Home() {
  const tabsData = {
    ao: await getDataAo(),
    dam: await getDataDam(),
    quan: await getDataQuan(),
    chanvay: await getDataChanVay(),
  };

  return (
    <>
      <div className="app">
        <Navbar />
        <div className="app__content">
          <BannerTop />

          <SliderMain />

          <div className="banner__block container">
            <div className="banner__block--item">
              <img
                src="/banner3.png"
                alt="banner__block"
                className="banner__block--item-image"
              />
              <div className="banner__block--item-content">
                <p>Best Men's Fashion</p>
                <button>Shop Now</button>
              </div>
            </div>
            <div className="banner__block--item">
              <img
                src="/banner1.png"
                alt="banner__block"
                className="banner__block--item-image"
              />
              <div className="banner__block--item-content">
                <p>Summer Sale Collection</p>
                <button>Shop Now</button>
              </div>
            </div>
            <div className="banner__block--item">
              <img
                src="/banner2.png"
                alt="banner__block"
                className="banner__block--item-image"
              />
              <div className="banner__block--item-content">
                <p>20% Off Accessories</p>
                <button>Shop Now</button>
              </div>
            </div>
          </div>

          <section>
            <div className="section__container container">
              <Tabs tabsData={tabsData} />
            </div>
          </section>

          <section>
            <div className="section__container container">
              <h2>Explore Collections</h2>
              <SlideCollection />
            </div>
          </section>

          <FlashSale />

          <section className="benefit">
            <div className="benefit__container container">
              <div className="benefit__container__item">
                <div className="benefit__container__item--icon">
                  <img
                    src="/benefitIcon/phone-call.png"
                    alt="phone call icon"
                  />
                </div>
                <div className="benefit__container__item--heading">
                  24/7 Customer Service
                </div>
                <div className="benefit__container__item--caption">
                  We're here to help you with any questions or concerns you
                  have, 24/7.
                </div>
              </div>

              <div className="benefit__container__item">
                <div className="benefit__container__item--icon">
                  <img src="/benefitIcon/assurance.png" alt="assurance" />
                </div>
                <div className="benefit__container__item--heading">
                  14-Day Money Back
                </div>
                <div className="benefit__container__item--caption">
                  If you're not satisfied with your purchase, simply return it
                  within 14 days for a refund.
                </div>
              </div>

              <div className="benefit__container__item">
                <div className="benefit__container__item--icon">
                  <img src="/benefitIcon/returning.png" alt="assurance" />
                </div>
                <div className="benefit__container__item--heading">
                  Our Guarantee
                </div>
                <div className="benefit__container__item--caption">
                  We stand behind our products and services and guarantee your
                  satisfaction.
                </div>
              </div>

              <div className="benefit__container__item">
                <div className="benefit__container__item--icon">
                  <img src="/benefitIcon/Fast-delivery.svg" alt="assurance" />
                </div>
                <div className="benefit__container__item--heading">
                  Shipping worldwide
                </div>
                <div className="benefit__container__item--caption">
                  We ship our products worldwide, making them accessible to
                  customers everywhere.
                </div>
              </div>
            </div>
          </section>

          <Newsletter />

          <section className="instagram">
            <div className="instagram--heading">Lanie On Instagram</div>
            <div className="instagram--hastag">#LanieClothing</div>

            <SliderInstagram />
          </section>

          <section className="brand container">
            <SliderBrand />
          </section>

          <Footer />
        </div>
      </div>
    </>
  );
}
