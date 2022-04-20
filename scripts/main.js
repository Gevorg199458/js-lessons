/*
window.onload = function(){
  window.setInterval(function(){
  let now = new Date();
 let clock = document.getElementById("clock");
  clock.innerHTML = now.toLocaleTimeString();
  },1000);
};
*/
/*
const questions = [
	{
		question: "In what children's game are participants chased by someone designated \"It\"?",
		content: [
			"Tag",
			"Simon Says",
			"Charades",
			"Hopscotch"
		],
		correct: 0
	},
	{
		question: "On a radio, stations are changed by using what control?",
		content: [
			"Tuning",
			"Volume",
			"Bass",
			"Treble"
		],
		correct: 0
	},
	{
		question: "Which material is most dense?",
		content: [
			"Silver",
			"Styrofoam",
			"Butter",
			"Gold"
		],
		correct: 3
	},
	{
		question: "Which state in the United States is largest by area?",
		content: [
			"Alaska",
			"California",
			"Texas",
			"Hawaii"
		],
		correct: 0
	},
	{
		question: "What is Aurora Borealis commonly known as?",
		content: [
			"Fairy Dust",
			"Northern Lights",
			"Book of ages",
			"a Game of Thrones main character"
		],
		correct: 1
	},
	{
		correct: 3,
		content: [
			"developed the telescope",
			"discovered four satellites of Jupiter",
			"discovered that the movement of pendulum produces a regular time measurement",
			"All of the above"
		],
		question: "Galileo was an Italian astronomer who"
	},
	{
		correct: 3,
		content: [
			"the infrared light kills bacteria in the body",
			"resistance power increases",
			"the pigment cells in the skin get stimulated and produce a healthy tan",
			"the ultraviolet rays convert skin oil into Vitamin D"
		],
		question: "Exposure to sunlight helps a person improve his health because"
	},
	{
		correct: 0,
		content: [
			"a club or a local sport association for remarkable achievements",
			"amateur athlete, not necessarily an Olympian",
			"National Olympic Committee for outstanding work",
			"None of the above"
		],
		question: "Sir Thomas Fearnley Cup is awarded to"
	},
	{
		correct: 1,
		content: [
			"1968",
			"1929",
			"1901",
			"1965"
		],
		question: "Oscar Awards were instituted in"
	},
	{
		correct: 2,
		content: [
			"1998",
			"1989",
			"1979",
			"1800"
		],
		question: "When did Margaret Thatcher became the first female Prime Minister of Britain?"
	},
	{
		correct: 2,
		content: [
			"15th April",
			"12th December",
			"1st May",
			"1st August"
		],
		question: "When is the International Workers' Day?"
	},
	{
		correct: 2,
		content: [
			"1962",
			"1963",
			"1964",
			"1965"
		],
		question: "When did China test their first atomic device?"
	},
	{
		correct: 3,
		content: [
			"1904",
			"1905",
			"1908",
			"1909"
		],
		question: "When did Commander Robert Peary discover the North Pole?"
	},
	{
		correct: 0,
		content: [
			"819/sq. km",
			"602/sq. km",
			"415/sq. km",
			"500/sq. km"
		],
		question: "What is the population density of Kerala?"
	},
	{
		correct: 1,
		content: [
			"4 km",
			"25 km",
			"500 m to 9 km",
			"150 km"
		],
		question: "What is the range of missile 'Akash'?"
	}
]

function myfunc(sum, arr,sum3) {
	let para = document.createElement("p")
	para.innerText = sum
	let ul = document.createElement("ul")
	let li;
	for (let i = 0; i < arr.length; i++) {
		li = document.createElement("li")
		li.innerText = arr[i]
		ul.appendChild(li)
	}
	document.getElementById("sum").appendChild(para)
	document.getElementById("sum").appendChild(ul)
}
for (let i = 0; i < questions.length; i++) {
	myfunc(questions[i].question, questions[i].content,questions[i].correct)
}


*/
/*
function getvalue(){
	let fname= document.getElementById("fname").value
	 let lname=document.getElementById("lname").value
	 let age=document.getElementById("age").value
	 let gender=document.getElementById("gender").value
	 let nationality=document.getElementById("nationality").value
	 let language=document.getElementById("language").value

	 console.log(fname,lname,age,gender,nationality,language)

}
*/
/*
function x (num){
	
	if(num==0 || num ==1){
		return (num)
	}else{
		return  num * x(num-1)
	}
	
	
	
	
}

console.log(x(5))
*/
/*
let nestedObjects = [
    {
        name: 'Employee',
        children: [
            {
                name: 'Vacation',
            },
            {
                name: 'Salary'
            },
            {
                name: 'Positions',
                children: [
                    {
                        name: 'Management',
                    },
                    {
                        name: 'Developement'
                    },
                ] 
            }
        ]
    },
    {
        name: 'Dashboard',
    },
    {
        name: 'Documents'
    },
    {
        name: 'Settings',
        children: [
            {
                name: 'Company details'
            },
            {
                name: 'User details'
				
            }
			
        ]
	
		
    }
	
]
function myfunc(arr){
for(let i = 0;i<arr.length;i++){
	console.log(arr[i].name)
	if((arr[i].children)){
	myfunc(arr[i].children)
}	
}
}
myfunc(nestedObjects)
*/
/*
function shaxmat(){
let board = document.querySelector('.board');
let y;
let x = true;

for(let i=0; i<8; i++){


	for(let j=0; j<8; j++){
		if(i==0){
		}
		if(j==0){
			x = !x;  
		
		}
		y = document.createElement('div');
	
		if(x){
			y.className='y black';
		}else{
			y.className='y white';
		}
		
		board.appendChild(y);
		
		x = !x;
		
	}
}
}

shaxmat();
*/

/*
let x = [
	{name: 'yellow', interval: 500},
	{name: 'red', interval: 4000},
	{name: 'green', interval: 4000}
  ];
  */
 
  /*
  let red=document.getElementById('red');
                    red.style.background='red';
        let yellow=document.getElementById('yellow');
	
        let green=document.getElementById('green');
        
   
	
		setInterval(myfunc, 8000)

function myfunc(){
     setTimeout("red.style.background='red';yellow.style.background='#333';green.style.background='#333';", 1000);
     setTimeout("yellow.style.background='yellow';red.style.background='#333';green.style.background='#333';", 3000);
     setTimeout("green.style.background='green';red.style.background='#333';yellow.style.background='#333';", 4000);
;
}

*/
/*
let x =document.getElementById('text');
function myfunc(){
let value=document.getElementById("search").value
console.log(value)
}
*/

/*
let reg2 = new RegExp('lorem')
let text1=`  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
since the 1500s, when an unknown printer took a galley of type 
and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
remaining essentially unchanged. It was popularised in the 1960s with
the release of Letraset sheets containing Lorem Ipsum passages,
and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
let a = reg.exec(text1);
let m = text1.match(reg)
console.log(m)
*/

/*
class Person{
	constructor(name,age,fname){
		this.name= name;
		this.age= age;
		this.fname= fname;
	}
	
	greet(){
		console.log(`barev ${this.name}`);
		console.log(`tariq@ ${this.age}`);
		console.log(`azganun@ ${this.fname}`);
	}
	
}
	let person1= new Person('Gevorg','23','Movsesyan');
   console.log(person1);
   person1.greet();
*/
/*
 class Rectangle{
	 constructor(height,width){
		 this.height = height
		 this.width = width;

	 }
    greet(){
		return this.height*this.width
	}
	grete(){
		return (this.height+this.width)*2
	}
     
   roeRectangle(){
	  let y= document.createElement("div")
	  y.style.width=`${this.width}px`
	  y.style.height=`${this.height}px`;
	  y.style.backgroundColor='red'
	  document.body.appendChild(y)
   }

	}
	let x = new Rectangle(200,150)
	console.log(x)
	console.log(x.greet())
	console.log(x.grete())
	x. roeRectangle();

class DateFormatter extends Date{
	getFormattedDate(){
		let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
		return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
	}
}
 console.log(new DateFormatter('August 19,1975').getFormattedDate());
*/
  
/*
let count = true;
let countValue = new Promise(function(resolve,reject){
	if(count){
		resolve("there is a count value.");

	} else{
		reject("there is no count value");
	}

});
console.log(countValue);

let countValue = new Promise(function(resolve,reject){
	resolve("Promise resolved");
});
	countValue.then(function successValue(result){
		console.log(result);
	})
