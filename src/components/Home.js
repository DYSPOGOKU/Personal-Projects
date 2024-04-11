import React from 'react'

const Home = () => {
  const divStyle = {
    backgroundImage: `url("https://www.shutterstock.com/image-illustration/dramatic-clouds-pattern-on-hill-600nw-1625948488.jpg")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%', // Set width to fill parent container
    height: '100vh', // Set height to fill viewport height
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white', // Text color
    fontSize: '2rem', // Example font size
    textAlign: 'center' // Center align text
  };
  return (
    <div className="container" style={divStyle}>
        Hello
    </div>
  )
}

export default Home