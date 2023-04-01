var botui = new BotUI('help-bot');
let solar = {
  name: "Solar Energy!",
  num: 0
}
let wind = {
  name: "Wind Energy!",
  num: 0
}
let hydro = {
  name: "Hydroelectric Energy!",
  num: 0
}
let geo = {
  name: "Geothermal Energy!",
  num: 0
}
let bio = {
  name: "Bioenergy!",
  num: 0
}

let message;
let big = solar.num;
let q = 0;
const energy =[solar, wind, hydro, geo, bio]

botui.message.add({
  delay: 500,
  loading: true,
  content: 'Hi my name is R.E.G.I.E!'
}).then(function () {
  return botui.message.add({
    delay: 1000,
    loading: true,
    content: 'I am here to help you find the most suitable renewable source for you!'
  });
}).then(function () {
    return botui.message.add({
      delay: 800,
      loading: true,
      content: 'Do you rent or own your house?'
   });
 }).then(function () {
   return botui.action.button({
     action: [
       {
         text: 'Rent',
         value: 'rent'
       },
       {
         text: 'Own',
         value: 'own'
       }
      ]
   });
 }).then(function (res) {

   if (res.value === "rent") {
    solar.num = -5
    wind.num += 1
    hydro.num += 1
    geo.num += 1
    bio.num += 1
   }
   else if (res.value === "own") {
    solar.num += 1
    wind.num += 1
    hydro.num += 1
    geo.num += 1
    bio.num += 1
   }
   return botui.message.add({
     type: 'html',
     delay: 1000,
     loading: true,
     content: 'What is your household income?'
   });
 }).then(function () {
   return botui.action.button({
     action: [
       {
         text: '$0 - $11,000',
         value: '1'
       },
       {
         text: '$11,000 - $45,000',
         value: '2'
       },
       {
         text: '$45,000 - $95,000',
         value: '3'
       },
       {
         text: '$95,000 - $180,000',
         value: '4'
       },
       {
        text: '$180,000+',
        value: '5'
       }
     ]
   });
 }).then(function (res) {
  if (res.value === "1") {
    solar.num += 0
    wind.num += 0
    hydro.num += 1
    geo.num += 1
    bio.num += 1
   }
   else if (res.value === "2") {
    solar.num += 0
    wind.num += 0
    hydro.num += 1
    geo.num += 1
    bio.num += 1
   }
   else if (res.value === "3") {
    solar.num += 0
    wind.num += 0
    hydro.num += 1
    geo.num += 1
    bio.num += 1
   }
   else if (res.value === "4") {
    solar.num += 0
    wind.num += 0
    hydro.num += 1
    geo.num += 1
    bio.num += 1
   }
   else if (res.value === "5") {
    solar.num += 1
    wind.num += 1
    hydro.num += 1
    geo.num += 1
    bio.num += 1
   }
   return botui.message.add({
     type: 'html',
     delay: 1000,
     loading: true,
     content: 'What region do you live in?'
   });
 }).then(function() {
  botui.action.select({
    action: {
        placeholder : "Select Language", 
        value: 'Select from drop down', // Selected value or selected object. Example: {value: "TR", text : "Türkçe" }
        searchselect : true, // Default: true, false for standart dropdown
        label : 'text', // dropdown label variable
        options : [
                        {value: "NE", text : "New England" },
                        {value: "GP", text : "Great Plains" },
                        {value: "RM", text : "Rocky Mountains" },
                        {value: "MA", text : "Mid-Atlantic" },
                        {value: "SE", text : "Southeast" },
                        {value: "SW", text : "Southwest" },
                        {value: "W", text : "West" },
                        {value: "MW", text : "Midwest" },
                        {value: "AH", text : "Alaska/Hawaii:" },
                  ],
        button: {
          icon: 'check',
          label: 'OK'
        }
      }
    }).then(function (res) { // will be called when a button is clicked.
      if (res.value === "NE") {
        solar.num += 0
        wind.num += 0
        hydro.num += 0
        geo.num += 1
        bio.num += 0
       }
       else if (res.value === "GP") {
        solar.num += 0
        wind.num += 1
        hydro.num += 0
        geo.num += 0
        bio.num += 0
       }
       else if (res.value === "RM") {
        solar.num += 0
        wind.num += 0
        hydro.num += 0
        geo.num += 1
        bio.num += 0
       }
       else if (res.value === "MA") {
        solar.num += 0
        wind.num += 1
        hydro.num += 0
        geo.num += 0
        bio.num += 0
       }
       else if (res.value === "SE") {
        solar.num += 1
        wind.num += 0
        hydro.num += 0
        geo.num += 0
        bio.num += 0
       }
       else if (res.value === "SW") {
        solar.num += 0
        wind.num += 1
        hydro.num += 0
        geo.num += 0
        bio.num += 0
       }
       else if (res.value === "W") {
        solar.num += 0
        wind.num += 0
        hydro.num += 1
        geo.num += 0
        bio.num += 0
       }
       else if (res.value === "MW") {
        solar.num += 0
        wind.num += 0
        hydro.num += 0
        geo.num += 0
        bio.num += 1
       }
       else if (res.value === "AH") {
        solar.num += 0
        wind.num += 0
        hydro.num += 0
        geo.num += 1
        bio.num += 0
     }
     return botui.message.add({
      type: 'html',
      delay: 1000,
      loading: true,
      content: 'What type of home do you live in?'
     });
    }).then(function () {
      return botui.action.button({
        action: [
          {
            text: 'Single Family Home',
            value: '1'
          },
          {
            text: 'Apartment/condo',
            value: '2'
          },
          {
            text: 'Townhome',
            value: '3'
          }
        ]
      });
    }).then(function (res) { // will be called when a button is clicked.
      
      if (res.value === "1") {
        solar.num += 1
        wind.num += 1
        hydro.num += 1
        geo.num += 1
        bio.num += 1
       }
       else if (res.value === "2") {
        solar.num += 0
        wind.num += 1
        hydro.num += 1
        geo.num += 1
        bio.num += 1
       }
       else if (res.value === "3") {
        solar.num += 1
        wind.num += 1
        hydro.num += 1
        geo.num += 1
        bio.num += 1
       }
       
      return botui.message.add({
        
        delay: 1000,
        loading: true,
        content: 'The best suitable renewable source for you is...'
      });
    }).then(function(res) {
      energy.forEach(element => {
        if(big < element.num){
          big = element.num
          message = element.name
        }
      })
      return botui.message.add({
        delay: 800,
        loading: true,
        content: message
     });
    })
 });