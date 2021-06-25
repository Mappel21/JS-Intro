/*Exercise closely resembles 11 - consider introducing another concept here? */


function getRandomInt()
{
    var randomNumber = [1,2,3,4,5,6,7,8,9]
    var randomNumber = Math.floor((Math.random() * 10) + 1);
	return randomNumber;
}
console.log(getRandomInt());