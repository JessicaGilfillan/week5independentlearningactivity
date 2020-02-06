//JavaScript Document

let person = 
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
		alert(person.name.first + ' ' + 
			  person.name.last + ' ' + 'is ' + 
			  person.age + ' years old and they like ' + 
			  person.interests[0] + ' and ' + 
			  person.interests[1] + '.' + ' ' +
			  person.name.first + ' is a ' +
			  person.program + ' at Georgian College.' + ' ' +
			  person.name.first + ' is from ' +
			  person.location);
	},
	greeting: function()
	{
		alert('Hi, my name is' + person.name.first + ' ' + person.name.last);
	}
};

// add a new object member that display your biggest pet peeve (something that bothers or annoys you)
let memberName = 'pet peeves';
let memberValue = ['poor hygiene', 'smelly classrooms'];

person[memberName] = memberValue;


//delete your last name 
delete person.name.last;


let buttonOne = document.getElementById('matt');

buttonOne.addEventListener('click', function())
{
	matt.bio;
}

