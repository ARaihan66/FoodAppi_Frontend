import React from 'react'

const MapLocation = () => {
  return (
    <div className='my-10'>
      <h3 className='font-bold text-2xl my-5'>Location On Map</h3>
      <div style={{ width: '100%' }}>
      <iframe
        width="100%"
        height="600"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Lalmatia,%20Mohammadpur,%20Dhaka+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        title="Google Map"
      >
        <a href="https://www.gps.ie/">gps trackers</a>
      </iframe>
      </div>
      </div>
  )
}

export default MapLocation
