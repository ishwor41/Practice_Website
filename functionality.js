const places=[
{
    placeName: 'Pokhara',
    price: 'Rs. 5000',
    img: 'images/travelimg1.jpg'
},
{
    placeName: 'Lumbini',
    price: 'Rs. 5000',
    img: 'images/travelimg2.jpg'
},
{
    placeName: 'Rara',
    price: 'Rs. 5000',
    img: 'images/travelimg3.jpg'
},
{
    placeName: 'Chitwan',
    price: 'Rs. 5000',
    img: 'images/travelimg4.jpg'
},
{
    placeName: 'Illam',
    price: 'Rs. 5000',
    img: 'images/travelimg5.jpg'
},
{
    placeName: 'Muktinath',
    price: 'Rs. 5000',
    img: 'images/travelimg6.jpg'
},
{
    placeName: 'Muktinath',
    price: 'Rs. 5000',
    img: 'images/travelimg6.jpg'
}


];
const tourContainer= document.querySelector('.tour-container');
window.addEventListener('DOMContentLoaded',function(){
        console.log("hello world");
        let displayTourItems=places.map(function(place){
        return `<div class="tour-place">
        <div class="image-container">
            <img src=${place.img} class="image" alt="">
        </div>
        <div class="tour-name">${place.placeName}</div>
        <div class="price">Price: ${place.price}</div>
    </div>`;
    });
    
    displayTourItems= displayTourItems.join('');
    console.log(displayTourItems);
    tourContainer.innerHTML=displayTourItems;
    
    
    
    
    
});

// 












