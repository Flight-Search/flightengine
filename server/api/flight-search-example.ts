const data = {
  meta: {
    count: 2,
    links: {
      self: "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=SYD&destinationLocationCode=BKK&departureDate=2021-11-01&adults=1&max=2",
    },
  },
  data: [
    {
      type: "flight-offer",
      id: "1",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: "2021-11-01",
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: "PT14H15M",
          segments: [
            {
              departure: {
                iataCode: "SYD",
                terminal: "1",
                at: "2021-11-01T11:35:00",
              },
              arrival: {
                iataCode: "MNL",
                terminal: "2",
                at: "2021-11-01T16:50:00",
              },
              carrierCode: "PR",
              number: "212",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "PR",
              },
              duration: "PT8H15M",
              id: "1",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MNL",
                terminal: "1",
                at: "2021-11-01T19:20:00",
              },
              arrival: {
                iataCode: "BKK",
                at: "2021-11-01T21:50:00",
              },
              carrierCode: "PR",
              number: "732",
              aircraft: {
                code: "320",
              },
              operating: {
                carrierCode: "PR",
              },
              duration: "PT3H30M",
              id: "2",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "EUR",
        total: "355.34",
        base: "255.00",
        fees: [
          {
            amount: "0.00",
            type: "SUPPLIER",
          },
          {
            amount: "0.00",
            type: "TICKETING",
          },
        ],
        grandTotal: "355.34",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["PR"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "EUR",
            total: "355.34",
            base: "255.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "1",
              cabin: "ECONOMY",
              fareBasis: "EOBAU",
              class: "E",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "2",
              cabin: "ECONOMY",
              fareBasis: "EOBAU",
              class: "E",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
            },
          ],
        },
      ],
    },
    {
      type: "flight-offer",
      id: "2",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: "2021-11-01",
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: "PT16H35M",
          segments: [
            {
              departure: {
                iataCode: "SYD",
                terminal: "1",
                at: "2021-11-01T11:35:00",
              },
              arrival: {
                iataCode: "MNL",
                terminal: "2",
                at: "2021-11-01T16:50:00",
              },
              carrierCode: "PR",
              number: "212",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "PR",
              },
              duration: "PT8H15M",
              id: "3",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MNL",
                terminal: "1",
                at: "2021-11-01T21:40:00",
              },
              arrival: {
                iataCode: "BKK",
                at: "2021-11-02T00:10:00",
              },
              carrierCode: "PR",
              number: "740",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "PR",
              },
              duration: "PT3H30M",
              id: "4",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "EUR",
        total: "355.34",
        base: "255.00",
        fees: [
          {
            amount: "0.00",
            type: "SUPPLIER",
          },
          {
            amount: "0.00",
            type: "TICKETING",
          },
        ],
        grandTotal: "355.34",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["PR"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "EUR",
            total: "355.34",
            base: "255.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "3",
              cabin: "ECONOMY",
              fareBasis: "EOBAU",
              class: "E",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "4",
              cabin: "ECONOMY",
              fareBasis: "EOBAU",
              class: "E",
              includedCheckedBags: {
                weight: 25,
                weightUnit: "KG",
              },
            },
          ],
        },
      ],
    },
  ],
  dictionaries: {
    locations: {
      BKK: {
        cityCode: "BKK",
        countryCode: "TH",
      },
      MNL: {
        cityCode: "MNL",
        countryCode: "PH",
      },
      SYD: {
        cityCode: "SYD",
        countryCode: "AU",
      },
    },
    aircraft: {
      "320": "AIRBUS A320",
      "321": "AIRBUS A321",
      "333": "AIRBUS A330-300",
    },
    currencies: {
      EUR: "EURO",
    },
    carriers: {
      PR: "PHILIPPINE AIRLINES",
    },
  },
};
