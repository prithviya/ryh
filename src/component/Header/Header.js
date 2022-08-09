import React from 'react';
import Images from '../../constants/asset';

function Header() {
  const [planet, setPlanet] = useState(1); // 0 is assigned to first planet and image

    const planetObj = [
      {
        id: 1,
        planet: "Mercury",
        image: Images.NAGARAJ,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      // {
      //   id: 2,
      //   planet: "Venus",
      //   image: Image.SHUKRA,
      //   content: "Content 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      // },
      // {
      //   id: 3,
      //   planet: "Moon",
      //   image: Image.CHANDRAN,
      //   content: "Content 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      // },
      // {
      //   id: 4,
      //   planet: "Mars",
      //   image: Image.SEVAI,
      //   content: "Content 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
      // },
      // {
      //   id: 5,
      //   planet: "Jupiter",
      //   image: Image.GURU,
      //   content: "Content 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
      // },
      // {
      //   id: 6,
      //   planet: "Saturn",
      //   image: Image.SHANI,
      //   content: "Content 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
      // },
      // {
      //   id: 7,
      //   planet: "Ketu",
      //   image: Image.KETU,
      //   content: "Content 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
      // },
      // {
      //   id: 8,
      //   planet: "Raahu",
      //   image: Image.RAHU,
      //   content: "Content 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
      // },
      // {
      //   id: 9,
      //   planet: "Sun",
      //   image: Image.SURYA,
      //   content: "Content 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
      // },
    ];
    console.log(planet);
  return (
    <div className='container'>
      <div className='mercury_btn'>
          <button className='mercury' onClick={() => setPlanet(1)}>Mercury</button>
      </div>
      {planetObj.map(
          (item) =>
          item.id === planet && (
              <>
                  <div className='uk-text-center custom-tab-img'>
                      <img src= {item.image} style={{width: '100%'}}/>
                      {/* <img src={item.image} alt="img" className='' /> */}
                  </div>
                  <div class="uk-card uk-padding-large uk-padding-remove-top uk-text-center">
                      <h1 className='uk-margin-top custom-tab-title'>{item.planet}</h1>
                      <p className='uk-margin-top'>{item.content}</p>
                  </div>
              </>
          )
      )}
    </div>
  )
}

export default Header