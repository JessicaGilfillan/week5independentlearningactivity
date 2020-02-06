// JavaScript Document
/*1.) Create an object to represent you.*/

/*

2.) In your object, add the following members 
      a.)first name
      b.)last name
      c.) program 
      d.) where you call home 
      e.) interests 
      f.) a function that creates an alert that displays 'Hi, I am' and your name
      g.) a function that creates an alert that displays all your information


3.) add a new object member that display your biggest pet peeve (something that bothers or annoys you)

4.) delete your last name 

5.) Once complete, raise your hand I will add you as a collaborator to a Github repo 

6.) Once you have access to the github repo, add a button with your name as the label and id on comp1073.html

.7) In comp1073.js, add the object created to represent your self, as well as a mechanism to trigger your bio to appear when your button is clicked. 

*/

let parneet = {
	name: {
		first:"Parneet"
		last:"Kaur"},

		program: 'Computer Programmer',
		homecountry:'India',
		interests: ['reading books','watching movies'],
		
		greeting: function(){
			alert('Hi. I am'+parneet.name.first + ' '+ parneet.name.last);

		},
		bio: function()
		{
			alert(parneet.name.first + ' ' + parneet.name.last +'is enrolled in ' + parneet.program + + '.i am from '+parneet.homecountry+'.i like to'+ parneet.interests[0]+'and'+ parneet.interests[1] );
	},
		};

		let petPeeve ='loud noise';

		

//delete

	delete parneet.name.last;
