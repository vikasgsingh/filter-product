//  async function getuser() {
//     let url = "db.json";
//     let res = await fetch(url)
//     return res.json()
// }
// async function filterdata(cat) {
//     var data = await getuser()
//     var filteritem = data.filter((result) => {
//         return (cat === result.category)
//     })
//     var totaldata = filteritem.map((item) => {
//         return (
//             `
//             <img src=${item.imagedata} height="200px" width="300px">
//             <h2> Product Name-${item.i}</h2>
//             <h3>Price-Rs.${item.price}</h3>
//             <p>Category-${item.category}</p>
//             `
//         )
//     })
//     document.getElementById("root").innerHTML = totaldata;
// }

async function getdata(){
       let url="db.json"
         let result=await fetch(url)
          return result.json()
          
}
async function filteritem(cat){
           var record= await getdata();  
          let finaldata= record.filter((data)=>{
            return (cat===data.category)

           })     
           
           var total= finaldata.map((item)=>{
             return (
                `
                <div class="img-wrap">
                     <img src=${item.imagedata}>
                      <div class="details">
                      <h2> Product Name-${item.i}</h2>
                      <h3>Price-Rs.${item.price}</h3>
                      <p>Category-${item.category}</p>
                     </div>
                    
                </div>

                `
             )
           })
           document.getElementById("root").innerHTML=total;
}








