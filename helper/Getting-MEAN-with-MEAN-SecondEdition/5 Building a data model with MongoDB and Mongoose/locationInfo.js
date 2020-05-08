location: [{
    name: 'Starcups',
    address: '125 High Street, Reading, RG6 1PS',
    rating: 3,
    facilities: ['Hot drinks', 'Food', 'Premium wifi'],
    coords: {
        lat: 51.455041,
        lng: -0.9690884
    },
    openingTimes: [{
        days: 'Monday - Friday',
        opening: '7:00am',
        closing: '7:00pm',
        closed: false
    }, {
        days: 'Saturday',
        opening: '8:00am',
        closing: '5:00pm',
        closed: false
    }, {
        days: 'Sunday',
        closed: true
    }],
    reviews: [{
        author: 'Simon Holmes',
        rating: 5,
        timestamp: '16 July 2013',
        reviewText: 'What a great place. I can\'t say enough good things about it.'
    }, {
        author: 'Charlie Chaplin',
        rating: 3,
        timestamp: '16 June 2013',
        reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
    }]
}];



{
    "_id": ObjectId("52ef3a9f79c44a86710fe7f5"),
    "name": "Starcups",
    "address": "125 High Street, Reading, RG6 1PS",
    "rating": 3,
    "facilities": ["Hot drinks", "Food", "Premium wifi"],
    "coords": [-0.9690884, 51.455041],
    "openingTimes": [{
      "_id": ObjectId("52ef3a9f79c44a86710fe7f6"),
      "days": "Monday - Friday",
      "opening": "7:00am",
      "closing": "7:00pm",
      "closed": false
    }, {
      "_id": ObjectId("52ef3a9f79c44a86710fe7f7"),
      "days": "Saturday",
      "opening": "8:00am",
      "closing": "5:00pm",
      "closed": false
    }, {
      "_id": ObjectId("52ef3a9f79c44a86710fe7f8"),
      "days": "Sunday",
      "closed": true
    }]
  }