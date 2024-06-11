import Image from "next/image"
import 작명 from '/public/food0.png'


export default function list() {

    let 상품 = ['Pizza', 'Taco', 'Pasta']

    return (
        <div>
            <h4 className="title">Products</h4>
            {
                상품.map((a, i)=>{
                    return (
                    <div className="food" key={i}>
                        <Image src={작명} className="food-img"></Image>
                        <h4>{ a }</h4>
                    </div>
                    )
                })
            }
            
        </div>
    )
}