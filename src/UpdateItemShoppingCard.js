import {useState} from "react";



const initialProducts = [{
    id: 0,
    name: 'Baklava',
    count: 1,
}, {
    id: 1,
    name: 'Cheese',
    count: 5,
}, {
    id: 2,
    name: 'Spaghetti',
    count: 2,
}]


export default function UpdateItemShoppingCard() {
    const [shoppingList,setShoppingList]=useState(initialProducts)


    function handleIncreaseClick(productId) {
        setShoppingList(shoppingList.map(product => {
            if (product.id === productId) {
                return {
                    ...product,
                    count: product.count + 1
                };
            } else {
                return product;
            }
        }))
    }

    function handleDecreaseClick(id) {
        setShoppingList(shoppingList.map(product => {
            if (product.id === id) {
                return {
                    ...product,
                    count: product.count - 1
                };
            } else {
                return product;
            }
        }))

    }

    return(


        <div>
            <ul>
                {shoppingList.map(product => (
                    <li key={product.id}>
                        {product.name}
                        {' '}
                        (<b>{product.count}</b>)
                        <button onClick={() => {
                            handleIncreaseClick(product.id);
                        }}>
                            +
                        </button>

                        <button onClick={() => {
                            handleDecreaseClick(product.id);
                        }}>
                            -
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}