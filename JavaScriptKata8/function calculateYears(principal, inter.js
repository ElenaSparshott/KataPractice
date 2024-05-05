function calculateYears(principal, interest, tax, desired) {

      let years = 1
      let accmoney = principal

      if(principal == desired) {
        
        return 0
        
      }

      while(accmoney < desired) {
        let yearsinterest = accmoney * interest
      
        let yeartax = yearsinterest * tax

        accmoney = accmoney + (yearsinterest - yeartax)
        console.log(accmoney)

      if(accmoney >= desired) {
        
      }else{
        years ++
      }
      }
      console.log(years)
      return years
      
} 
 

calculateYears(1000, 0.05, 0.18, 1000)
