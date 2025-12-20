import logo from './logo.svg';
import './App.css';


const Header = () =>{
  return(
    <div className = 'Header'>
    <div className = 'logo-container'>
    <img className = 'logo' src= "https://thumbs.dreamstime.com/b/food-delivery-logo-design-template-fast-delivery-service-sign-food-delivery-app-vector-logo-design-template-167491511.jpg"/>
    </div>
    <div className = 'nav-items'>
    <ul>
      <li>Home</li>
      <li>about</li>
      <li>contact us</li>
      <li>Cart</li>
    </ul>
    </div>
    </div>
  )
}

const restaurants = [

{
id: "856913",
name: "Pizza Hut",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/d8657a5a-e134-42ce-975a-f2038743ba5d_856913.JPG",
locality: "Devanahalli Town",
areaName: "NH-7 BYPAALORESS",
costForTwo: "₹350 for two",
cuisines: [
"Pizzas"
],
avgRating: 4,
parentId: "721",
avgRatingString: "4.0",
totalRatingsString: "472",
sla: {
deliveryTime: 63,
lastMileTravel: 14.5,
serviceability: "SERVICEABLE",
slaString: "60-70 mins",
lastMileTravelString: "14.5 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-12-18 00:00:00",
opened: true
},
badges: { },
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: { },
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "ITEMS",
subHeader: "AT ₹99"
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "4.2",
ratingCount: "89"
},
source: "GOOGLE",
sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
{
id: "1213214",
name: "Olio - The Wood Fired Pizzeria",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/12/1d93f031-78fc-4c02-b5f1-5a907378ed39_1213214.JPG",
locality: "Chikkajala",
areaName: "Bajrakabati Canal Road",
costForTwo: "₹300 for two",
cuisines: [
"Pizzas",
"Pastas",
"Fast Food",
"Snacks",
"Beverages"
],
avgRating: 4,
parentId: "11633",
avgRatingString: "4.0",
totalRatingsString: "83",
sla: {
deliveryTime: 63,
lastMileTravel: 10.4,
serviceability: "SERVICEABLE",
slaString: "60-70 mins",
lastMileTravelString: "10.4 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-12-18 03:00:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "newg.png",
description: "Gourmet"
}
]
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "Gourmet",
imageId: "newg.png"
}
}
]
},
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "ITEMS",
subHeader: "AT ₹119"
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
isNewlyOnboarded: true,
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},

 {
id: "334355",
name: "McDonald's",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/724c1f4c-da2b-4140-9929-cd47c1747b3d_334355.JPG",
locality: "Meenakunte Sadahalli Gate",
areaName: "Devanahalli",
costForTwo: "₹400 for two",
cuisines: [
"Burgers",
"Beverages",
"Cafe",
"Desserts"
],
avgRating: 4.4,
parentId: "630",
avgRatingString: "4.4",
totalRatingsString: "1.3K+",
sla: {
deliveryTime: 35,
lastMileTravel: 7.5,
serviceability: "SERVICEABLE",
slaString: "35-45 mins",
lastMileTravelString: "7.5 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-12-17 23:45:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
description: "Delivery!"
}
]
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "Delivery!",
imageId: "Ratnesh_Badges/Rx_Awards_2025/Bolt.png"
}
}
]
},
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "ITEMS",
subHeader: "AT ₹119"
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},

 {
id: "807084",
name: "Maa Da Dhaba",
cloudinaryImageId: "f070323750b77547608c09a881fb2b71",
locality: "Arisinakunte Village",
areaName: "Devanahalli",
costForTwo: "₹500 for two",
cuisines: [
"North Indian",
"Biryani"
],
avgRating: 4.4,
parentId: "18576",
avgRatingString: "4.4",
totalRatingsString: "218",
sla: {
deliveryTime: 28,
lastMileTravel: 2.7,
serviceability: "SERVICEABLE",
slaString: "25-30 mins",
lastMileTravelString: "2.7 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-12-17 23:45:00",
opened: true
},
badges: { },
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: { },
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "60% OFF",
subHeader: "UPTO ₹130",
headerTypeV2: "HEADER_TYPE_V2_TOP_UP",
secondaryDiscountCallout: "₹30 Cashback"
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},


 {
id: "1194358",
name: "Kanti Sweets",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/3/76a974e3-3993-4bad-b5ad-234aef764b04_1194358.jpg",
locality: "Devanahalli",
areaName: "Devanahalli",
costForTwo: "₹300 for two",
cuisines: [
"Sweets",
"Snacks"
],
avgRating: 4.5,
veg: true,
parentId: "4700",
avgRatingString: "4.5",
totalRatingsString: "42",
sla: {
deliveryTime: 35,
lastMileTravel: 10.1,
serviceability: "SERVICEABLE",
slaString: "35-40 mins",
lastMileTravelString: "10.1 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-12-17 23:02:00",
opened: true
},
badges: { },
isOpen: true,
aggregatedDiscountInfoV2: { },
type: "F",
badgesV2: {
entityBadges: {
imageBased: { },
textBased: { },
textExtendedBadges: { }
}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
isNewlyOnboarded: true,
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},

 {
id: "497862",
name: "Anand Sweets & Savouries",
cloudinaryImageId: "h5bjgvy7zqpcveulhhc1",
locality: "Devanahalli",
areaName: "Devanahalli",
costForTwo: "₹500 for two",
cuisines: [
"Sweets"
],
avgRating: 4.6,
parentId: "53",
avgRatingString: "4.6",
totalRatingsString: "1.7K+",
sla: {
deliveryTime: 33,
lastMileTravel: 7.5,
serviceability: "SERVICEABLE",
slaString: "30-35 mins",
lastMileTravelString: "7.5 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-12-17 22:15:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "Rxawards/_CATEGORY-Mithai.png",
description: "Delivery!"
}
]
},
isOpen: true,
aggregatedDiscountInfoV2: { },
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "Delivery!",
imageId: "Rxawards/_CATEGORY-Mithai.png"
}
}
]
},
textBased: { },
textExtendedBadges: { }
}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},

 {
id: "1005481",
name: "Raj Dum Biryani",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/10/53dce60b-0a76-4223-a098-7d5fb5cf63ab_1005481.jpg",
locality: "SERVICE ROAD",
areaName: "Devanahalli",
costForTwo: "₹300 for two",
cuisines: [
"Biryani",
"South Indian"
],
avgRating: 4.1,
parentId: "164960",
avgRatingString: "4.1",
totalRatingsString: "123",
sla: {
deliveryTime: 36,
lastMileTravel: 9.5,
serviceability: "SERVICEABLE",
slaString: "35-40 mins",
lastMileTravelString: "9.5 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-12-17 22:30:00",
opened: true
},
badges: { },
isOpen: true,
aggregatedDiscountInfoV2: { },
type: "F",
badgesV2: {
entityBadges: {
imageBased: { },
textBased: { },
textExtendedBadges: { }
}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},

 {
id: "717531",
name: "Purani Dilli By Anand Sweets",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/53185382-9f4f-4e97-9df6-e17a360c99ea_717531.jpg",
locality: "Down Town Park",
areaName: "Devanahalli",
costForTwo: "₹500 for two",
cuisines: [
"Desserts",
"Sweets"
],
avgRating: 4.4,
veg: true,
parentId: "5710",
avgRatingString: "4.4",
totalRatingsString: "169",
sla: {
deliveryTime: 34,
lastMileTravel: 7.5,
serviceability: "SERVICEABLE",
slaString: "30-35 mins",
lastMileTravelString: "7.5 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-12-17 22:30:00",
opened: true
},
badges: { },
isOpen: true,
aggregatedDiscountInfoV2: { },
type: "F",
badgesV2: {
entityBadges: {
imageBased: { },
textBased: { },
textExtendedBadges: { }
}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
{
id: "367769",
name: "Lucky Restaurant",
cloudinaryImageId: "qems028i3da5rxf81rbp",
locality: "Banjara Hills",
areaName: "Banjara Hills",
costForTwo: "₹300 for two",
cuisines: [
"Biryani",
"Tandoor"
],
avgRating: 4,
parentId: "535180",
avgRatingString: "4.0",
totalRatingsString: "85K+",
sla: {
deliveryTime: 24,
lastMileTravel: 2.6,
serviceability: "SERVICEABLE",
slaString: "20-25 mins",
lastMileTravelString: "2.6 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-12-17 23:59:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "android/static-assets/icons/big_rx.png",
description: "bolt!"
}
]
}},
{
id: "487214",
name: "ZAZA Mughal Biryani",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/7ebfac9e-877d-4737-882f-bd72d9d07650_487214.jpg",
locality: "Khairatabad",
areaName: "Vaibhav Nagar",
costForTwo: "₹250 for two",
cuisines: [
"Biryani",
"North Indian",
"Awadhi"
],
avgRating: 4,
parentId: "22473",
avgRatingString: "4.0",
totalRatingsString: "577",
sla: {
deliveryTime: 25,
lastMileTravel: 3,
serviceability: "SERVICEABLE",
slaString: "20-30 mins",
lastMileTravelString: "3.0 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-12-18 02:00:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "Rxawards/_CATEGORY-Mughlai.png",
description: "Delivery!"
}
]
}},{
id: "681600",
name: "LeanCrust Pizza- ThinCrust Experts",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/30/12e3ef41-1079-47a2-a2b0-411cb9a072be_681600.jpg",
locality: "Vaibhav Nagar",
areaName: "Khairatabad",
costForTwo: "₹300 for two",
cuisines: [
"Pizzas",
"Italian",
"Desserts"
],
avgRating: 4.3,
parentId: "11216",
avgRatingString: "4.3",
totalRatingsString: "1.3K+",
sla: {
deliveryTime: 25,
lastMileTravel: 3,
serviceability: "SERVICEABLE",
slaString: "20-30 mins",
lastMileTravelString: "3.0 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-12-18 02:00:00",
opened: true
},
badges: { },
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: { },
textBased: { }
}}},{
id: "142670",
name: "Shah Ghouse Hotel & Restaurant",
cloudinaryImageId: "bk26jkkqpg55veii0aj9",
locality: "Lakdi-Ka-Pul",
areaName: "Banjara Hills",
costForTwo: "₹350 for two",
cuisines: [
"Biryani",
"Chinese",
"Tandoor",
"Mughlai"
],
avgRating: 4.3,
parentId: "19271",
avgRatingString: "4.3",
totalRatingsString: "88K+",
sla: {
deliveryTime: 27,
lastMileTravel: 2.7,
serviceability: "SERVICEABLE",
slaString: "25-30 mins",
lastMileTravelString: "2.7 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-12-24 00:00:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "android/static-assets/icons/big_rx.png",
description: "bolt!"
},
{
imageId: "Rxawards/_CATEGORY-Biryani.png",
description: "Delivery!"
}
]
},
isOpen: true,
aggregatedDiscountInfoV2: { },
type: "F",}

]
const RestaurentCard = (props) =>{

  const {cloudinaryImageId,name,cuisines,avgRating,sla} = props.resData
  const cloudinaryUrl = 'https:media-assets.swiggy.com/swiggy/image/upload/'
return(
  <div className='res-card'>
    <img  className= 'res-logo' alt='image' src= {cloudinaryUrl + cloudinaryImageId}></img>
    <h3>{name}</h3>
    <h4>{cuisines}</h4>
    <h4>{avgRating} stars</h4>
    <h4>{sla.deliveryTime} minutes</h4>
  </div>
)
}
const Body = ()=>{
  return(
    <div className='body'>
      <div className='search'> Search Bar</div>
      <div className='res-container'>
        {restaurants.map((id)=>{
          return <RestaurentCard resData={id}/>
        })}
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
