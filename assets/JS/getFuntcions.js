

export const getFunctions = (e,ids,menu,getImpar,ul,btn,getPrices,getAll,show) => {

        if(btn.className ==="impar" ){
           ul.innerHTML= ''
           ids = getImpar(menu)
           ids.map(id => {
           const li = document.createElement("li");
           ul.append(li)
           li.innerHTML = 
                          `
                          <div>
                               <h2>${id.name}</h2>
                               <div>
                               <span>$${id.price}</span>
                               <p>${id.ingredients} 
                               </div>
                          </div>
                          `
        })
       }

        if(btn.className ==="prices" ){
          ul.innerHTML= ''
            ids = getPrices(menu)
            ids.map(id => {
            const li = document.createElement("li");
            ul.append(li)
            li.innerHTML = 
                           `
                           <div>
                                <h2>${id.name}</h2>
                                <div>
                                <span>$${id.price}</span>
                                <p>${id.ingredients} 
                                </div>
                           </div>
                           `
         })
        }
         if(btn.className ==="all"){
            ul.innerHTML= ''
            ids = getAll(menu)
            ids.map(id => {
            const li = document.createElement("li");
            ul.append(li)
             li.innerHTML = 
                           `
                           <div>
                                <h2>${id.name}</h2>
                                <div>
                                <span>$${id.price}</span>
                                <p>${id.ingredients} 
                                </div>
                           </div>
                           `
         })
         
         }
}
export const getPizzaForId = (e,menu, form, ids, getIds) => {
   e.preventDefault()
   const pizzaForId = getIds(e,menu);
   const div = document.querySelector(".card-number");
   const h2 = document.createElement("h2");
   h2.innerHTML = 
                     `
                     <div>
                          <h3 class="error-title">*The number do not correct </h3>
                          <p class="error-p">please enter again</p>
                      </div>
                     `;

   if( pizzaForId.length > 0  ) {
     div.innerHTML=''
     pizzaForId.map(id => {
          const li = document.createElement("div");
          div.append(li)
           li.innerHTML = 
                         `
                         <div>
                              <h2>${id.name}</h2>
                              <div>
                              <span>$${id.price}</span>
                              <p>${id.ingredients} 
                              </div>
                         </div>
                         `
       })
   }else{
     div.innerHTML=''
     div.append(h2)
   }
}