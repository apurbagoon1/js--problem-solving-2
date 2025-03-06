/**
 * Task -2:
Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

 */


const findSmallestName = function(names) {
    let smallest = names[0];

    for (const name of names) {
        if (name.length < smallest.length) {
            smallest = name;
        }
    }
    return smallest;
};

const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
const smallestFriend = findSmallestName(friends);
console.log('Friend with the smallest name:', smallestFriend); 
