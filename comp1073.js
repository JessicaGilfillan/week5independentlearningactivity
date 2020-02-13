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

let jeshan ={ 
    firstname:'jeshan',
    age:19,
    lastname:'chhabra',
    program:'COPA',
     home:'india',
     interests:['playing','music','dance'],
     bio: function(){
      alert("i am "+ jeshan.firstname+" "+ jeshan.lastname);
     },
    info: function(){
          alert("i am "+ jeshan.firstname+" "+jeshan.lastname+"."+"i am "+jeshan.age+" years old."+"i was enrolled in "+jeshan.program+"i have intersts in"+jeshan.interests[0])
    }

}


let alp = {
    firstName: "Alp",
    lastName: "Akca",
    program: "CP",
    home: "Cyprus",
    interest: ["hiking","swimming","animals"],
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

let matt = 
{
	name:
	{
		first: 'Matthew',
		last: 'Sotera'
	},
	age: 31,
	gender: 'male',	
	interests: ['adventuring', 'coding', 'snacking', 'hiking', 'sleeping'],
	program: 'Computer Programmer',
	location: 'Barrie',
	bio: function()
	{
		alert(matt.name.first + ' ' + 
			  matt.name.last + ' ' + 'is ' + 
			  matt.age + ' years old and they like ' + 
			  matt.interests[0] + ' and ' + 
			  matt.interests[1] + '.' + ' ' +
			  matt.name.first + ' is a ' +
			  matt.program + ' at Georgian College.' + ' ' +
			  matt.name.first + ' is from ' +
			  matt.location);
	},
	greeting: function()
	{
		alert('Hi, my name is' + matt.name.first + ' ' + matt.name.last);
	}
};

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


let kuan = {
  name: {
    first: 'Kuan-Wen',
    last: 'Liu'
  },
  program: 'Computer Programmer',
  home: 'Taiwan',
  interests: ['sleep', 'playing games', 'watching movie'],
  greeting: function() {
    alert('Hi, I am ' + kuan.name.first + ' ' + kuan.name.last);
  },
  information: function() {
    alert('I am interesting in ' + kuan.interests[0] + ' ' + kuan.interests[1], + ' ' + kuan.interests[2]);
  }
}

// add a new object member that display your biggest pet peeve (something that bothers or annoys you)
let memberName = 'pet peeves';
let memberValue = ['poor hygiene', 'ignorance'];
matt[memberName] = memberValue;
//delete your last name 
delete matt.name.last;

let jamie = {
	name: {
		first: 'Jamie',
		last: 'Malangyaon'
	},
	program: 'COPA',
	home: 'Vaughan',
	interests: ['cosplay', 'eating', 'meditating', 'apex', 'animal crossing'],
	bio: function() {
		alert('Hi, I am ' + jamie.name.first + ' ' + jamie.name.last + '.');
	},
	greeting: function() {
		alert('First Name: ' + jamie.name.first +
			'\n' + 'Last Name: ' + jamie.name.last + '\n' +
			'Program: ' + jamie.program + '\n' + 
			'Interests: ' + jamie.interests)
	},
}
let jamieName = 'petpeeve';
let jamieValue = ['Messy car'];
jamie[jamieName] = jamieValue;
delete jamie.name.last;


//add event listener function or event handler property here 

let button = document.getElementById('jess'); 
let alpButton = document.getElementById("alp");
let chrisButton = document.getElementById('chris');
let anmolButton = document.getElementById('anmol');
let vidhiButton=document.getElementById('vidhi');
let kuwarButton = document.getElementById('kuwar');
let mattButton = document.getElementById('matt');
let btn= document.getElementById("jeshan");
let buttonMike = document.getElementById('mike');
let kaunButton = document.getElementById('kuan');
let jamieButton = document.getElementById('jamie');
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
mattButton.addEventListener('click', function())
{
	matt.bio;
}
			  btn.addEventListener('click', function(){
	jeshan.bio();
});
kuanButton.addEventListener('click', function(){
	kuan.greeting();
});
buttonMike.addEventListener('click', function(){
	mikemacgregor.myInfo
});
jamieButton.addEventListener('click', function(){
  jamie.bio(); 
