const bodyElement = document.body;
const childNodes = bodyElement.childNodes;
console.log(childNodes);

const parentNode = bodyElement.parentNode;
console.log(parentNode);

const bodyCyildren = bodyElement.children;
console.log(bodyCyildren);


const previousSiblingNode = bodyElement.previousSibling;
console.log(previousSiblingNode);

const gti = document.querySelectorAll('.reasons');
console.log(gti);

const gta = document.querySelectorAll('li');
console.log(gta);

const gte = document.querySelectorAll('li.advantage-item');
console.log(gte);

const gty = document.querySelectorAll('li');
console.log(gty[2]);
/*
for (const item of gty) {
	console.log(item);
	
}
*/
gty.forEach(item => {
	console.log(item);
	
});

const lesson = document.querySelector('.advantage');
console.log(lesson);

const lessan = document.querySelector('.advantage-item');
console.log(lessan);

const parent = lessan.closest('.advantages-list');
console.log(parent);





