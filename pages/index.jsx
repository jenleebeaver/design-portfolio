import React from 'react';
import CaseStudy from './case_study.jsx';
import Nav from './components/nav.jsx';
import AudioControl from './components/audioControl.jsx';

function ImageList(){
  let slideshow = React.useRef(null);

  React.useEffect(() => {
    const slideshowElement = slideshow.current.querySelector('.art-slideshow');  
    
    const artContainerHeight = slideshowElement.offsetHeight - window.innerHeight;

      document.getAnimations().forEach((anim) => {
      anim.cancel();
      anim.play();
      });

      const animation = slideshowElement.animate([
        { transform: `translateY(-${artContainerHeight}px)`}
      ], {
        duration: 200000, 
        iterations: Infinity,
      });

      animation.commitStyles();
  
  }, []);

  

  //commented out last four URLS to have no remainders left over in a group of 5
  const imageURLS = [
    'https://images.metmuseum.org/CRDImages/ep/web-large/DP123847.jpg', 
    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1943.jpg', 
    'https://images.metmuseum.org/CRDImages/ep/web-large/DP-14201-001.jpg', 
    'https://images.metmuseum.org/CRDImages/ep/web-large/DP-21959-001.jpg', 
    'https://images.metmuseum.org/CRDImages/ep/web-large/DP-20613-001.jpg', 
    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1027.jpg', 
    'https://images.metmuseum.org/CRDImages/ep/web-large/DP-23704-001.jpg', 
    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1500.jpg', 
    'https://images.metmuseum.org/CRDImages/ep/web-large/DT10262.jpg',
    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1952.jpg', 
    'https://images.metmuseum.org/CRDImages/ep/web-large/DP231550.jpg', 
    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1860.jpg', 
    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1944.jpg', 
    'https://images.metmuseum.org/CRDImages/rl/web-large/DT3131.jpg', 
    'https://images.metmuseum.org/CRDImages/ep/web-large/ep1974.356.35.R.jpg', 
    'https://images.metmuseum.org/CRDImages/ep/web-large/DP-20100-001.jpg', 
    'https://images.metmuseum.org/CRDImages/ep/web-large/DP341200.jpg', 
    'https://images.metmuseum.org/CRDImages/ep/web-large/DP-14936-043.jpg', 
    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1864.jpg', 
    'https://images.metmuseum.org/CRDImages/ep/web-large/DP-14936-037.jpg', 
    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1139.jpg', 
    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1863.jpg', 
    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1867.jpg', 
    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1559.jpg', 
    'https://images.metmuseum.org/CRDImages/ep/web-large/DP364161.jpg', 
    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1866.jpg', 
    'https://images.metmuseum.org/CRDImages/ep/web-large/DT1954.jpg', 
    'https://images.metmuseum.org/CRDImages/rl/web-large/DT3113.jpg', 
    'https://images.metmuseum.org/CRDImages/ep/web-large/DP-14936-049.jpg', 
    'https://images.metmuseum.org/CRDImages/ep/web-large/DP317780.jpg',   
  ]

  const mappedImages = Array(Math.ceil(imageURLS.length / 5))
    .fill()
    .map((_, index) => imageURLS.slice(index * 5, index * 5 + 5));

  return (
    <div ref={slideshow}>
      <div className="art-slideshow">
          {mappedImages.map((imageArray) => { 
            return (
          <div className="container" >
              <div className="a">
                <img src={imageArray[0]}/>
              </div>
              <div className="b">
                <img src={imageArray[1]}/>
              </div>
              <div className="c">
                <img src={imageArray[2]}/>
              </div>
              <div className="d">
                <img src={imageArray[3]}/>
              </div>
              <div className="e">
                <img src={imageArray[4]}/>
              </div>
          </div>
            )
          })}
      </div>
    </div>
  )
};

export default function ImageContainer({}) {

  // FETCHING DATA FROM MET API 
  // const [images, setImages] = React.useState([]);
  // const [isLoading, setIsLoading] = React.useState(false);

  // React.useEffect(() => {
  //   async function getImages() {
  //     setIsLoading(true);

  //     // // FETCHING DATA FROM MET API 
  //     // // returning an array of object ID's with French Art between 1890-1900 - Belle Epoque (era of progress and prosperity)/ Impressionists 
  //     // const idResponse = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?dateBegin=1890&dateEnd=1900&q=French");
  //     // const idJSON = await idResponse.json();
  //     // const parsedIds = idJSON.objectIDs.slice(0,1000);
  //     // console.log(parsedIds);

  //     // //returning an array of object URL's associated to the object ID's. Includes three filters: 1) 404 errors 2) painting classfication 3) empty string
  //     // Promise.all(parsedIds.map( async id => await fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/" + id)))
  //     // .then(responses => {
  //     //   //filter out responses that return 404 
  //     //   const validResponses = responses.filter(response => response.status !== 404);
  //     //     return Promise.all(validResponses.map(response => response.json()));
  //     // }).then(data => {
  //     //   console.log(data);
  //     //   const paintings =  data.filter(object => (object.classification.includes("Paintings")));
  //     //   console.log(paintings);
  //     //   const urls = paintings.map( object => object.primaryImageSmall);
  //     //   console.log(urls);

  //     //   function filterList(urls){
  //     //     return urls.filter(url => {
  //     //       if (url === ''){
  //     //         return false;
  //     //       } 
  //     //       return true;
  //     //     })
  //     //   };

  //     //   const filteredList = filterList(urls);
  //     //   console.log(filteredList);
  //     // });
     
  //     // setImages(imageURLS);
  //     // setIsLoading(false);
  //   }
  //   // getImages();
  // }, []);

  return (
    <div>
      <ImageList />
      <CaseStudy />
      <AudioControl />
      <Nav />
    </div>
  )
}