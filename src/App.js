import './App.css';
import Prenavbar from './components/prenavbar';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Slider from './components/Slider.js'
import Offers from './components/Offers.js'
import data from './data/data.json'
import Header from './components/Header.js'
import StarProduct from './components/StarProduct.js'
import HotAccessoriesMenu from './components/HotAccessoriesMenu.js'
import HotAccessories from './components/HotAccessories.js';
import ProductReviews from './components/ProductReviews.js'
import Videos from './components/Videos.js'
import Banner from './components/Banner.js'
import Footer from './components/Footer.js'
import Navoptions from './components/Navoptions.js'
function App() {
  return (
    <Router>

      <Prenavbar />
      <Navbar />
      <Navoptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} 
      fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} 
      audio={data.audio} accessories={data.accessories} />
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Header text='STAR PRODUCTS' />
      <StarProduct starProduct={data.starProduct} />
      <Header text='HOT ACCESSORIES' />
      <HotAccessoriesMenu />
      <Routes>
        <Route exact path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />
      </Routes>
      <Routes>
        <Route exact path="/smartdevice" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />} />
      </Routes>
      <Routes>
        <Route exact path="/home" element={<HotAccessories home={data.hotAccessories.home}
          homeCover={data.hotAccessoriesCover.home} />} />
      </Routes>
      <Routes>
        <Route exact path="/lifestyle" element={<HotAccessories lifestyle={data.hotAccessories.lifeStyle}
          lifestyleCover={data.hotAccessoriesCover.lifeStyle} />} />
      </Routes>
      <Routes>
        <Route exact path="/mobileaccessories" element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories}
          mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />} />
      </Routes>

      <Header text='PRODUCT REVIEWS' />
      <ProductReviews ProductReviews={data.productReviews} />
      <Header text='VIDEOS' />
      <Videos videos={data.videos} />
      <Header text='IN THE PRESS' />
      <Banner banner={data.banner} />
      <Footer footer={data.footer}/>
    </Router>

  )
};

export default App;
