import Item from './Item';


const Catagory = ({name, productList}) => {
    //console.log('catagory data' , productList);
    
    return(
        <div className="catagory">
            <div className="catagoryName">{name}</div>
            <hr/>
            <div className="catagory-container">
                {productList.map((item) => {
                    return <Item item={item} key={item.name}/>
                })}
            </div>
            
        </div>
    );
}

export default Catagory;