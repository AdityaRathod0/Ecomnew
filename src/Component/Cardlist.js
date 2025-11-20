import Card from "./Card"

function Cardlist(props){
    const product = props.products1;
    console.log(product);
    return(
        <>
        <div className="container">
        <p style={{textAlign:'center'}}>This is Cardlist</p>
        {
            product && product.map((p,ind)=>{
                return <Card {...p} key={ind} />
            })
        }
     </div>
        </>
    )
}

export default Cardlist;