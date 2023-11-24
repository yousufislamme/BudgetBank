"use client"

import { useState } from "react";
   
const Hero = () => {  
   // const router = useRouter();
   const [bank, setBank] = useState(0);
   const [optionValueProvider, setOptionValueProvider] = useState();
   const [optionIdProvider, setOptionIdProvider] = useState();
   const [amount, setAmount] = useState();
   const [expenseAmount, setExpenseAmount] = useState(0);  
   
   // handle input
   const handleInput = (e) => {
      let inputText = e.target.value;
      const inputStrToNum = parseFloat(inputText);
      setAmount(inputStrToNum); 
   }
   
   // handle submit
   const handleSubmit = (e) => {
      // const eatingCost = amount;
      e.preventDefault();  

            // condition
      if ('addMoneyId' === optionIdProvider) {
         const addMoneyCalculate = bank + amount;
         setBank(addMoneyCalculate);
         console.log('addMoney id is connected ', optionIdProvider);

      } else if ('productId' === optionIdProvider) {
         const productCalculate = expenseAmount + amount;
         setExpenseAmount(productCalculate);

      }else if ('withdrawalId' === optionIdProvider) {
         const withdrawalCalculate = bank - amount;
         setBank(withdrawalCalculate);

      } else if ('cashId' === optionIdProvider) {
         const cashCalculate = bank + amount;
         setBank(cashCalculate);

      } else if ('eatingId' === optionIdProvider && amount < bank) {
         const eatingCalculate = amount + expenseAmount;
         setExpenseAmount(eatingCalculate);  
         
      } else {
         alert('amount is low');
         console.log('id is not connected ', optionIdProvider);

      } 

      console.log(optionIdProvider, amount);
   }

   // handle change option
   const handleChangeOption = (e) => {
      const optionID = e.target.options[e.target.selectedIndex].id;
      setOptionIdProvider(optionID); // for id provider
      const optionValue = optionID.value;
      setOptionValueProvider(optionValue); // for value provider
      console.log(optionValue); 
   }
   const currentBalanceIs = bank - expenseAmount;

   return (
      
      <section className="m-2 myRounded bg-gray-100">
         
           <div className="grid grid-cols-5 text-center gap-2 p-2">
               <div className="h-36 myRounded myFontStyle col-span-5 bg-gradient-to-b from-purple-400 to-purple-500">
               <h3 className="text-2xl text-purple-900">Total Budget Bank</h3>
               <p><span>$</span>{bank}</p>
               </div> 
              <div className="col-span-3 myRounded myFontStyle bg-gradient-to-r from-sky-400 to-sky-600">
                 <h3 className="text-sky-900">Expense</h3>
                 <p>
                  <span>${expenseAmount }</span>
                  
                 </p>
              </div>
              <div className="col-span-2 myRounded myFontStyle bg-green-400">
                 <h3 className="text-green-900">Today now </h3>
               <p><span>$</span>{currentBalanceIs}</p>
              </div>
           </div>     
           <div className="w-full flex justify-center gap-2 ">
            <form  
               onChange={()=>handleSubmit}
               >
                  <div className='flex flex-col justify-center items-center gap-y-3'>
                     
                  <h3 className='myFontStyle text-gray-700'>Now Send</h3> 
                   
                     <div className="flex justify-center flex-col text-center">

                     <select
                        id="items"
                        value={optionValueProvider}
                        onChange={handleChangeOption}
                        className="bg-yellow-100 px-2 py-1 rounded-md font-semibold"
                     >
                           <option id="productId" value="Products">Products</option>
                           <option id="addMoneyId" value="Add Money">Add Money</option>
                           <option id="withdrawalId" value="Withdrawal">Withdrawal</option>
                           <option id="cashId" value="Cash">Cash</option>
                           <option id="eatingId" value="Eating">Eating</option>
                        </select>
                     </div>
                     <input 
                        type="number"
                        placeholder="Enter Amount"
                        onChange={handleInput}
                        className='outline-none myRounded font-semibold shadow-lg'
                        
                        />
                     <button
                           type="submit" 
                           onClick={handleSubmit}
                           className='bg-orange-500 shadow-lg myRounded font-semibold focus:bg-red-500 mb-5' 
                     >Submit
                     </button>   
                  </div>
                  </form>
            </div>
            
             
        

     </section>
           
  )
}

export default Hero;