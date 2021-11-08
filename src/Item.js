
let cartArray = [];


const Item = ({item}) => {
    //console.log('item data' , item);

    const addToCart = () => {
        cartArray.push(item);
        console.log('Product Added to the cart');
        console.log(cartArray);
    }

    const removeFromCart = () => {
        let index = cartArray.indexOf(item);
        if(index>=0){
            cartArray.splice(index, 1);
        }
        else{
        }
        console.log('Product removed from the cart');
        console.log(cartArray);

    }


    return(
        <div className="item">
            <div>Name: {item.name}</div>
            <div>Price: {item.price}</div>
            <button onClick={addToCart} className="addBtn">Add to the cart</button>
            <button onClick={removeFromCart} className="removeBtn">Remove from cart</button>

        </div>
    );
}

export default Item;