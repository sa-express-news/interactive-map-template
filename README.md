# SAEN Interactive Map Template #

## Table of contents ##

- [Loading your data](#loading-your-data)
- [Loading your map](#loading-your-map)
- [Setting the title and social links](#setting-the-title-and-social-links)

---------

This template can be used to build interactive map experiences featuring images, videos and 360 panoramic images like those seen here:

 - [San Antonio Mural Map](http://www.expressnews.com/san-antonio-mural-map/)
 - [Explore the new Botanical Gardens with 360 images](http://www.expressnews.com/explore-san-antonio-botanical-garden/)
 - [Experience the new Witte Museum](http://witte.expressnews.com.s3-website-us-east-1.amazonaws.com/)

 This README assumes a familiarity with GIT, React and our normal project building workflow. If you are new to that process, I suggest first [following the README here and building a story in the Long Form Template](https://github.com/sa-express-news/longform-story-template/blob/master/README.md).

 ## Loading your data ##

 Clone the repo and `npm install`.

 Upload your photos to the WCM and your videos to your chosen hosting platform. If you will be using panoramic images, store them in `src/panos/` directory. In the future, we'll move them to a CDN, but CORS issues keep us from storing them in the WCM for now. Extras server might be an option...

 You'll need to create your marker icons for every piece of content. These should be `72px x 48px` images that you can upload to the WCM.

 Create a spreadsheet in google sheets and structure it like [this example file](https://docs.google.com/spreadsheets/d/1C9tsdPjaDmXJ8tTeBebY0nyv7BroeqzDsTDnKPYoHEk/edit?usp=sharing). Notice that videos and photos feature hard urls and panos use just the filenames from the `panos` directory. Don't worry about the coordinates for now if you don't have them on hand, you can add those later. The `type` column in the `pages` sheet is used to define the content type. Options include `pano`, `photo` and `video`. In the `markers` sheet, the `type` column is used to define the logo type. Options here include just `photo` and `video`.

 You're going to want to export your sheet data to JSON. In other SAEN, we've automated this process (and feel free to do that here too if you like), but for now, I suggest intalling [this Export JSON tool](http://blog.pamelafox.org/2013/06/exporting-google-spreadsheet-as-json.html). Using this tool, you can grab each sheet as JSON and copy and paste the data into `src/data/map.json` and `src/data/pages.json` respectively.

 ## Loading your map ##

 [Head over to Mapbox](https://www.mapbox.com/studio/) and login to the SAEN account. If you've never used Mapbox, it is pretty intuitive. In the most basic use case, you just want to go to the Styles tab and create/choose a style. Edit it as you see fit and then publish it. Under `Share, develop & use`, go to `Develop with this style` and select `leaflet`. Copy the `Leaflet URL` and inside `src/components/Map/index.jsx` and configure the leafletConfigObj here:

 ```
 getLeafletConfigObj() {
	const tileLayer = {
		uri: 'PASTE-YOUR-LEAFLET-URL-HERE!!!',
	};
	const params = {
		center: this.isMobile() ? [38.367502, -112.796631] : [39.631077, -111.994629],
		zoom: 6,
		maxZoom: 9,
		minZoom: 4,
		legends: true,
	};
	return {
		tileLayer,
		params,
	};
}
```

If you'd like to mess with different options for the default center and zoom, uncomment `//this.setTestEvents(map);` in the `init` method. This will report the coordinates at the center of the viewport to the console everytime you move the map, the zoom level every time you zoom in and out and the coordinates at the selected point everytime you click on the map. This click feature can be used to choose the coordinates for your markers and then added to the spreadsheet.

Check out the [leaflet documentation](http://leafletjs.com/reference-1.2.0.html) for more.

## Setting the Title and Social Links ##

The title for map page can be set in `src/components/App/index.jsx` under `<Nav className="Nav" title="Explore the new Botanical Gardens" />`. The social button links can be set in `src/components/SocialBlock/index.jsx`.

## Publishing your map ##

The publishing process is exactly the same as that for other React Apps that will end up in the WCM. Again, I will refer you to the [Long Form Template README](https://github.com/sa-express-news/longform-story-template/blob/master/README.md) for more information.
