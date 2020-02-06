// JavaScript Document

//add your object here 
const jess = {
  name: ['Jessica','Gilfillan'],
  age:34,
  interests: ['coffee', 'code', 'cats'],
  bio: function() {
    alert(this.name[0] + ' ' + this.name[1]  + ' is ' + this.age + ' years old. They like ' + this.interests[0] + ', ' + this.interests[1] +  ' and ' + this.interests[2] + '.');
  },
  greeting: function() {
    alert('Hi! I\'m ' + this.name[0] + this.age + '.');
  }
}

const chris = {
    fName: 'Chris',
    lName: 'Pander',
    program: 'COPR',
    homeCity: 'Barrie',
    interest: ['hockey', 'coding', 'gaming', 'football'],
    hi: function(){
        alert('Hi, I am ' + chris.fName + ' ' + chris.lName);
    },
    bio: function(){
        alert('My name is ' + chris.fName + ' ' + chris.lName + '. I\'m enrolled in the ' + chris.program + ' program. I live in ' + chris.homeCity + ' where I enjoy ' + chris.interest[0] + ', ' + chris.interest[1] + ', ' + chris.interest[2] + ', and ' + chris.interest[3] + '.')
    }
}

let alp = {
    firstName: "Alp",
    lastName: "Akca",
    program: "CP",
    home: "Cyprus",
    interest: "",
    greet: function () {
        alert(`Hi, I am ${this.firstName} ${this.lastName}`);
    },
    info: function () {
        alert(`My program ${this.program}, home: ${this.home}`)
    }
};

alp["annoy"] = "headache";
delete alp.lastName;

let intro;
intro={
    name:{
        first:'Vidhi',
        last:'Sodvadiya'
    },
    program:'Computer Programmer',
    home:'111,Collge Crescent',
    interest: ['Cooking','Dancing','Netflix'],
    petPeeve:'Disturbing me while I am asleep'
    greeting: function(){
 
    alert('Hi I am '+ intro.name.first + ' ' + intro.name.last);

},
    bio: function(){
        alert(intro.name.first + ' ' + intro.name.last +'is studing '+intro.program+ 'and I live in '+intro.interest[0] + ',  '+intro.interest[1] +'and '+intro.interest[2]);
    }
    
}
delete intro.name.last;

let anmol = {
  firstName: 'ANMOL',
  lastName:  'SHARMA',
  age: 19,
  program: 'Computer Programming',
  interests: ['Songs','Basketball'],
  Intro: function(){
    alert('Hi, I am'+anmol.firstName+" "+ anmol.lastName);
  },
  Info: function(){
    alert("Here is my info"+anmol.firstName+" "+anmol.lastName+" "+anmol.age+" "+anmol.program+" "+anmol.interests[0]+" "+anmol.interests[1]);
  }
};

let kuwar = {
	firstName: 'Kuwar',
	lastname: 'Dua',
	program: 'Computer Programming',
	home: 'India',
	interests: ['badminton', 'cricket', 'watches','perfumes'],
	intro: function(){
		alert('Hi, I am ' + kuwar.firstName + ' ' + kuwar.lastname);
	},
	bio: function(){
		alert(kuwar.firstName + ' ' + kuwar.lastname + ' is in '  kuwar.program + ' and calls ' + kuwar.home + ' .My interests are ' + kuwar.interests[0] + ' ' + kuwar.interests[1] + ' ' + kuwar.interests[2] + ' ' + kuwar.interests[3])
	}

};

let kenColeman = {
    firstName: "Kenneth",
    lastName: "Coleman",
    program: "Computer Programmer",
    home: "Barrie, ON",
    interests: ["computers", "playing guitar", "big dogs"],
    greeting: function () {
        alert("Hi, I am " + firstName + " " + lastName + ".");
    },
    bio: function () {
        alert("Hi, I am " + kenColeman.firstName + " " + kenColeman.lastName + ". I live in " + kenColeman.home + " and I like " + kenColeman.interests[1] + ".");
    },
    peeve: function () {
        alert("My biggest peeve is evening classes.");
    }
};

//add event listener function or event handler property here 

let button = document.getElementById('jess'); 
let alpButton = document.getElementById("alp");
let chrisButton = document.getElementById('chris');
let anmolButton = document.getElementById('anmol');
let vidhiButton=document.getElementById('vidhi');
let kuwarButton = document.getElementById('kuwar');
let kenButton = document.getElementById('ken');

//button.addEventListener('click', jess.greeting); 

button.addEventListener('click', function(){
  jess.bio(); 
});
alpButton.addEventListener('click', function(){
    alp.info();
});
anmolButton.addEventListener('click', function(){
  anmol.bio(); 
});

chrisButton.addEventListener('click', function(){
  chris.bio();
});
vidhiButton.addEventListener('click', function(){
  vidhi.bio(); 
});
kuwarButton.addEventListener('click', function(){
	kuwar.bio();
});
kenButton.addEventListener('click', function(){
  ken.bio(); 
});

// mikemacgregor
	
let mikemacgregor = {
  name: {
    first: 'Mike',
    last: 'MacGregor'
  },
  program: 'COPR',
  home: 'Barrie',
  interests: ['soccer', 'fantasy football', 'comics'],
  hi: function() {
    alert('Hi, I am ' + mikemacgregor.name.first + ' ' + mikemacgregor.name.last);
  },
  myInfo: function() {
    var info = JSON.stringify(mikemacgregor);
    alert(info);
  }
};

mikemacgregor.petPeeve = 'my daughter not picking up after herself';

delete mikemacgregor.name.last;
	
let buttonMike = document.getElementById('mikemacgregor');
buttonMike.addEventListener('click', function(){
	mikemacgregor.myInfo
});
	
// end mikemacgregor
