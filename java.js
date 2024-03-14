// create array for initial freelancers
const availableFreelancers = [
    {name: "Alice", price: 30, occupation: "writer"},
    {name: "Robert", price: 40, occupation: "programer"},
]
// create array for freelancers to be added 
const freelancersAdd = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];
  //query into main
  const main = document.querySelector("main");
 
  // create the first header of the page 
  const pageTitle = document.createElement("h1");
  pageTitle.textContent = "Available Freelancers";
  main.appendChild(pageTitle);
 
  //create a function that creates cards
  function createCard(freelancer) {
    //Should create 4 thigs : card, name, occupation, starter price
    const card = document.createElement('div');
    card.className = 'card';
    //create a name for freelancer 
    const header = createName(freelancer.name);
    //create a occupation for freelancer
    const header2 = createOccupation(freelancer.occupation);
    //create a starter price for freelancer 
    const header3 = createPrice(freelancer.price);

    //append to card
    card.appendChild(header);
    card.appendChild(header2);
    card.appendChild(header3);

    //append to main
    main.appendChild(card);
  };

  //function to create name
  function createName(name) {
    const header = document.createElement('div');
    const h2 = document.createElement('h2');
    const text = document.createTextNode('Name: ' + ' ' + name);
  
    h2.append(text);
    header.appendChild(h2);
      
    return header;
  };

  //function to create occupation
  function createOccupation(occupation) {
    const header2 = document.createElement('div');
    const h3 = document.createElement('h3');
    const textOcc = document.createTextNode('Occupation: ' + ' ' + occupation);
  
    h3.append(textOcc);
    header2.appendChild(h3);
      
    return header2;
  };

  //fuction to create starter price
  function createPrice(price) {
    const headerPrice= document.createElement('div');
    const par = document.createElement('p');
    const textprice = document.createTextNode('Starter Price: ' + ' ' + price);

    par.append(textprice);
    headerPrice.appendChild(par);

    return headerPrice;
  };

//create a loop - forEach
availableFreelancers.forEach((freelancer) => {
    createCard(freelancer);
  });